'use strict';

var url = require('url');


var Chems = require('./ChemsService');


module.exports.deleteContactsContactid = function deleteContactsContactid (req, res, next) {
  Chems.deleteContactsContactid(req.swagger.params, res, next);
};

module.exports.getChems = function getChems (req, res, next) {
  Chems.getChems(req.swagger.params, res, next);
};

module.exports.getContactsContactid = function getContactsContactid (req, res, next) {
  Chems.getContactsContactid(req.swagger.params, res, next);
};

module.exports.postChems = function postChems (req, res, next) {
  Chems.postChems(req.swagger.params, res, next);
};

module.exports.putChemsChemid = function putChemsChemid (req, res, next) {
  Chems.putChemsChemid(req.swagger.params, res, next);
};
