const _asyncToGenerator = require('./generator');
const helper = require('./helper');
const BaseRelation = require('./base.js');

module.exports = class HasManyRelation extends BaseRelation {
  /**
   * relation on select or find
   */
  getRelationData() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const where = _this.parseRelationWhere();
      if (where === false) return _this.data;
      const mapData = yield _this.options.model.where(where).select();
      return _this.parseRelationData(mapData, true);
    })();
  }

  /**
   * relation on add, update, delete
   */
  setRelationData(type) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const { model } = _this2.options;

      let data = _this2.data[_this2.options.name];
      if (!helper.isArray(data)) {
        data = [data];
      }
      switch (type) {
        case 'ADD':
          data = data.map(function (item) {
            item[_this2.options.fKey] = _this2.data[_this2.options.key];
            return item;
          });
          return model.addMany(data);
        case 'UPDATE':
          yield model.db().getSchema();
          const { pk } = model;

          const promises = data.map(function (item) {
            if (item[pk]) {
              return model.update(item);
            }

            // return if main model pk value not exist
            const fKeyData = _this2.data[_this2.options.key];
            if (!fKeyData) {
              return;
            }

            item[_this2.options.fKey] = fKeyData;
            return model.add(item);
          });
          return Promise.all(promises);
        case 'DELETE':
          return model.where({
            [_this2.options.fKey]: _this2.data[_this2.options.key]
          }).delete();
      }
    })();
  }
};