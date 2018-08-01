'use strict';

var utils = require('../utils/writer.js');
var DirectReflectionRecipe = require('../service/DirectReflectionRecipeService');

module.exports.recipeDirect_reflectionGridbasedPOST = function recipeDirect_reflectionGridbasedPOST (req, res, next) {
  var recipe = req.swagger.params['recipe'].value;
  DirectReflectionRecipe.recipeDirect_reflectionGridbasedPOST(recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeDirect_reflectionGridbasedUuidPUT = function recipeDirect_reflectionGridbasedUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var recipe = req.swagger.params['recipe'].value;
  DirectReflectionRecipe.recipeDirect_reflectionGridbasedUuidPUT(uuid,recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
