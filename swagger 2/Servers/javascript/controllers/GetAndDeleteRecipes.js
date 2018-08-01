'use strict';

var utils = require('../utils/writer.js');
var GetAndDeleteRecipes = require('../service/GetAndDeleteRecipesService');

module.exports.recipeGET = function recipeGET (req, res, next) {
  var size = req.swagger.params['size'].value;
  var country = req.swagger.params['country'].value;
  GetAndDeleteRecipes.recipeGET(size,country)
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
