'use strict';

var utils = require('../utils/writer.js');
var GetAndDeleteMaterials = require('../service/GetAndDeleteMaterialsService');

module.exports.materialGET = function materialGET (req, res, next) {
  var material_type = req.swagger.params['material_type'].value;
  var rgb_transmittance = req.swagger.params['rgb_transmittance'].value;
  var rgb_reflectance = req.swagger.params['rgb_reflectance'].value;
  GetAndDeleteMaterials.materialGET(material_type,rgb_transmittance,rgb_reflectance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.materialUuidDELETE = function materialUuidDELETE (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  GetAndDeleteMaterials.materialUuidDELETE(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.materialUuidGET = function materialUuidGET (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  GetAndDeleteMaterials.materialUuidGET(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
