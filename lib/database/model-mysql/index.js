const Abstract = require('../model-abstract');
const Query = require('./query.js');
const Schema = require('./schema.js');
const Parser = require('./parser.js');

module.exports = class Mysql extends Abstract {};

module.exports.Query = Query;
module.exports.Schema = Schema;
module.exports.Parser = Parser;
