'use strict';

var utils = require('../utils/writer.js');
var AnalysisGrid = require('../service/AnalysisGridService');

module.exports.analysis_gridGET = function analysis_gridGET (req, res, next) {
  var grid_name = req.swagger.params['grid_name'].value;
  var min_points = req.swagger.params['min_points'].value;
  var max_points = req.swagger.params['max_points'].value;
  AnalysisGrid.analysis_gridGET(grid_name,min_points,max_points)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.analysis_gridPOST = function analysis_gridPOST (req, res, next) {
  var analysis_grid = req.swagger.params['analysis_grid'].value;
  AnalysisGrid.analysis_gridPOST(analysis_grid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.analysis_gridUuidDELETE = function analysis_gridUuidDELETE (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  AnalysisGrid.analysis_gridUuidDELETE(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.analysis_gridUuidGET = function analysis_gridUuidGET (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  AnalysisGrid.analysis_gridUuidGET(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.analysis_gridUuidPUT = function analysis_gridUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var analysis_grid = req.swagger.params['analysis_grid'].value;
  AnalysisGrid.analysis_gridUuidPUT(uuid,analysis_grid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
