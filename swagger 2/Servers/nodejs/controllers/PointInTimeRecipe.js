'use strict';

var utils = require('../utils/writer.js');
var PointInTimeRecipe = require('../service/PointInTimeRecipeService');

module.exports.recipePoint_in_timeGridbasedPOST = function recipePoint_in_timeGridbasedPOST (req, res, next) {
  var recipe = req.swagger.params['recipe'].value;
  PointInTimeRecipe.recipePoint_in_timeGridbasedPOST(recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipePoint_in_timeGridbasedUuidPUT = function recipePoint_in_timeGridbasedUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var recipe = req.swagger.params['recipe'].value;
  PointInTimeRecipe.recipePoint_in_timeGridbasedUuidPUT(uuid,recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
