'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.deleteCompaniesCompanyid = function deleteCompaniesCompanyid (req, res, next) {
  Default.deleteCompaniesCompanyid(req.swagger.params, res, next);
};

module.exports.getCompanies = function getCompanies (req, res, next) {
  Default.getCompanies(req.swagger.params, res, next);
};

module.exports.getCompaniesCompanyid = function getCompaniesCompanyid (req, res, next) {
  Default.getCompaniesCompanyid(req.swagger.params, res, next);
};

module.exports.postCompanies = function postCompanies (req, res, next) {
  Default.postCompanies(req.swagger.params, res, next);
};

module.exports.putCompaniesCompanyid = function putCompaniesCompanyid (req, res, next) {
  Default.putCompaniesCompanyid(req.swagger.params, res, next);
};
