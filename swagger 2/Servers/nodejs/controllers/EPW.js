'use strict';

var utils = require('../utils/writer.js');
var EPW = require('../service/EPWService');

module.exports.epwGET = function epwGET (req, res, next) {
  var country = req.swagger.params['country'].value;
  EPW.epwGET(country)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epwPOST = function epwPOST (req, res, next) {
  var epw = req.swagger.params['epw'].value;
  EPW.epwPOST(epw)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epwUuidDELETE = function epwUuidDELETE (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  EPW.epwUuidDELETE(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epwUuidGET = function epwUuidGET (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  EPW.epwUuidGET(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epwUuidPUT = function epwUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var epw = req.swagger.params['epw'].value;
  EPW.epwUuidPUT(uuid,epw)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
