'use strict';

var utils = require('../utils/writer.js');
var WEA = require('../service/WEAService');

module.exports.weaGET = function weaGET (req, res, next) {
  var country = req.swagger.params['country'].value;
  WEA.weaGET(country)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.weaPOST = function weaPOST (req, res, next) {
  var wea = req.swagger.params['wea'].value;
  WEA.weaPOST(wea)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.weaUuidDELETE = function weaUuidDELETE (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  WEA.weaUuidDELETE(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.weaUuidGET = function weaUuidGET (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  WEA.weaUuidGET(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.weaUuidPUT = function weaUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var wea = req.swagger.params['wea'].value;
  WEA.weaUuidPUT(uuid,wea)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
