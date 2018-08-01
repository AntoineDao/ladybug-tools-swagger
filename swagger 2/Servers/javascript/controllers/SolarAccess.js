'use strict';

var utils = require('../utils/writer.js');
var SolarAccess = require('../service/SolarAccessService');

module.exports.recipeSolar_accessGridbasedPOST = function recipeSolar_accessGridbasedPOST (req, res, next) {
  var recipe = req.swagger.params['recipe'].value;
  SolarAccess.recipeSolar_accessGridbasedPOST(recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeSolar_accessGridbasedUuidPUT = function recipeSolar_accessGridbasedUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var recipe = req.swagger.params['recipe'].value;
  SolarAccess.recipeSolar_accessGridbasedUuidPUT(uuid,recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
