'use strict';

exports.deleteCompaniesCompanyid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyid (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getCompanies = function(args, res, next) {
  /**
   * parameters expected in the args:
  * $size (Long)
  * $page (Double)
  * $sort (String)
  * name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "tags" : [ "aeiou" ],
  "id" : "aeiou",
  "address" : {
    "zipcode" : "aeiou",
    "street" : "aeiou",
    "city" : "aeiou"
  },
  "name" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getCompaniesCompanyid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyid (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "tags" : [ "aeiou" ],
  "id" : "aeiou",
  "address" : {
    "zipcode" : "aeiou",
    "street" : "aeiou",
    "city" : "aeiou"
  },
  "name" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postCompanies = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Company)
  **/
    var examples = {};
  examples['application/json'] = {
  "tags" : [ "aeiou" ],
  "id" : "aeiou",
  "address" : {
    "zipcode" : "aeiou",
    "street" : "aeiou",
    "city" : "aeiou"
  },
  "name" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putCompaniesCompanyid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyid (String)
  * body (Company)
  **/
    var examples = {};
  examples['application/json'] = {
  "tags" : [ "aeiou" ],
  "id" : "aeiou",
  "address" : {
    "zipcode" : "aeiou",
    "street" : "aeiou",
    "city" : "aeiou"
  },
  "name" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

