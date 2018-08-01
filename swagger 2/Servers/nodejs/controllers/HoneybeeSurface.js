'use strict';

var utils = require('../utils/writer.js');
var HoneybeeSurface = require('../service/HoneybeeSurfaceService');

module.exports.hbsurfaceGET = function hbsurfaceGET (req, res, next) {
  var surface_type = req.swagger.params['surface_type'].value;
  var surface_material = req.swagger.params['surface_material'].value;
  var surface_state = req.swagger.params['surface_state'].value;
  HoneybeeSurface.hbsurfaceGET(surface_type,surface_material,surface_state)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hbsurfacePOST = function hbsurfacePOST (req, res, next) {
  var hbsurface = req.swagger.params['hbsurface'].value;
  HoneybeeSurface.hbsurfacePOST(hbsurface)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hbsurfaceUuidDELETE = function hbsurfaceUuidDELETE (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  HoneybeeSurface.hbsurfaceUuidDELETE(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hbsurfaceUuidGET = function hbsurfaceUuidGET (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  HoneybeeSurface.hbsurfaceUuidGET(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hbsurfaceUuidPUT = function hbsurfaceUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var hbsurface = req.swagger.params['hbsurface'].value;
  HoneybeeSurface.hbsurfaceUuidPUT(uuid,hbsurface)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
