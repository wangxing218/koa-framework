const _asyncToGenerator = require('./generator');
const BaseRelation = require('./base.js');

module.exports = class BelongToRelation extends BaseRelation {
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
  setRelationData() {
    return _asyncToGenerator(function* () {})();
  }
};