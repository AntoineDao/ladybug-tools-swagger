'use strict';

var utils = require('../utils/writer.js');
var OpaqueMaterial = require('../service/OpaqueMaterialService');

module.exports.materialOpaquePOST = function materialOpaquePOST (req, res, next) {
  var opaque_material = req.swagger.params['opaque_material'].value;
  OpaqueMaterial.materialOpaquePOST(opaque_material)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.materialOpaqueUuidPUT = function materialOpaqueUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var opaque_material = req.swagger.params['opaque_material'].value;
  OpaqueMaterial.materialOpaqueUuidPUT(uuid,opaque_material)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
