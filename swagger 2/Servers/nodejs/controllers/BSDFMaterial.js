'use strict';

var utils = require('../utils/writer.js');
var BSDFMaterial = require('../service/BSDFMaterialService');

module.exports.materialBsdfPOST = function materialBsdfPOST (req, res, next) {
  var bsdf_material = req.swagger.params['bsdf_material'].value;
  BSDFMaterial.materialBsdfPOST(bsdf_material)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.materialBsdfUuidPUT = function materialBsdfUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var bsdf_material = req.swagger.params['bsdf_material'].value;
  BSDFMaterial.materialBsdfUuidPUT(uuid,bsdf_material)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
