const _asyncToGenerator = require('./generator');
const BaseRelation = require('./base.js');

/**
 * has one relation
 */
module.exports = class HasOneRelation extends BaseRelation {
  /**
   * relation on select or find
   */
  getRelationData() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const where = _this.parseRelationWhere();
      if (where === false) return _this.data;
      const mapData = yield _this.options.model.where(where).select();
      return _this.parseRelationData(mapData);
    })();
  }

  /**
   * relation on add, update, delete
   */
  setRelationData(type) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const { model } = _this2.options;

      const data = _this2.data[_this2.options.name];
      switch (type) {
        case 'ADD':
          data[_this2.options.fKey] = _this2.data[_this2.options.key];
          return model.add(data);
        case 'UPDATE':
          return model.where({
            [_this2.options.fKey]: _this2.data[_this2.options.key]
          }).update(data);
        case 'DELETE':
          return model.where({
            [_this2.options.fKey]: _this2.data[_this2.options.key]
          }).delete();
      }
    })();
  }
};