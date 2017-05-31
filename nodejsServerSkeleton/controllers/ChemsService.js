'use strict';

exports.deleteContactsContactid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contactid (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getChems = function(args, res, next) {
  /**
   * parameters expected in the args:
  * $size (Long)
  * $page (Long)
  * $sort (String)
  * boiling Point (Double)
  * melting Point (Double)
  * active (Boolean)
  * cAS Number (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "Melting Point" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "aeiou",
  "rank" : 123,
  "Boiling Point" : 1.3579000000000001069366817318950779736042022705078125,
  "CAS Number" : 1.3579000000000001069366817318950779736042022705078125,
  "active" : true
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getContactsContactid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contactid (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "Melting Point" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "aeiou",
  "rank" : 123,
  "Boiling Point" : 1.3579000000000001069366817318950779736042022705078125,
  "CAS Number" : 1.3579000000000001069366817318950779736042022705078125,
  "active" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postChems = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Chem)
  **/
    var examples = {};
  examples['application/json'] = {
  "Melting Point" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "aeiou",
  "rank" : 123,
  "Boiling Point" : 1.3579000000000001069366817318950779736042022705078125,
  "CAS Number" : 1.3579000000000001069366817318950779736042022705078125,
  "active" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putChemsChemid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * chemid (String)
  * body (Chem)
  **/
    var examples = {};
  examples['application/json'] = {
  "Melting Point" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "aeiou",
  "rank" : 123,
  "Boiling Point" : 1.3579000000000001069366817318950779736042022705078125,
  "CAS Number" : 1.3579000000000001069366817318950779736042022705078125,
  "active" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

