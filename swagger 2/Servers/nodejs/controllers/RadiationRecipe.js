'use strict';

var utils = require('../utils/writer.js');
var RadiationRecipe = require('../service/RadiationRecipeService');

module.exports.recipeRadiationGridbasedPOST = function recipeRadiationGridbasedPOST (req, res, next) {
  var recipe = req.swagger.params['recipe'].value;
  RadiationRecipe.recipeRadiationGridbasedPOST(recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeRadiationGridbasedUuidPUT = function recipeRadiationGridbasedUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var recipe = req.swagger.params['recipe'].value;
  RadiationRecipe.recipeRadiationGridbasedUuidPUT(uuid,recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
