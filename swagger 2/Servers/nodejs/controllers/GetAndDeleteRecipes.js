'use strict';

var utils = require('../utils/writer.js');
var GetAndDeleteRecipes = require('../service/GetAndDeleteRecipesService');

module.exports.recipeGET = function recipeGET (req, res, next) {
  var type = req.swagger.params['type'].value;
  var location = req.swagger.params['location'].value;
  var state = req.swagger.params['state'].value;
  GetAndDeleteRecipes.recipeGET(type,location,state)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeUuidDELETE = function recipeUuidDELETE (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  GetAndDeleteRecipes.recipeUuidDELETE(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeUuidGET = function recipeUuidGET (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  GetAndDeleteRecipes.recipeUuidGET(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
