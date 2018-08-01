'use strict';

var utils = require('../utils/writer.js');
var TranslucentMaterial = require('../service/TranslucentMaterialService');

module.exports.materialTranslucentPOST = function materialTranslucentPOST (req, res, next) {
  var translucent_material = req.swagger.params['translucent_material'].value;
  TranslucentMaterial.materialTranslucentPOST(translucent_material)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.materialTranslucentUuidPUT = function materialTranslucentUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var translucent_material = req.swagger.params['translucent_material'].value;
  TranslucentMaterial.materialTranslucentUuidPUT(uuid,translucent_material)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
