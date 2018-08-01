'use strict';

var utils = require('../utils/writer.js');
var LightSourceMaterial = require('../service/LightSourceMaterialService');

module.exports.materialLight_sourcePOST = function materialLight_sourcePOST (req, res, next) {
  var light_source_material = req.swagger.params['light_source_material'].value;
  LightSourceMaterial.materialLight_sourcePOST(light_source_material)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.materialLight_sourceUuidPUT = function materialLight_sourceUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var light_source_material = req.swagger.params['light_source_material'].value;
  LightSourceMaterial.materialLight_sourceUuidPUT(uuid,light_source_material)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
