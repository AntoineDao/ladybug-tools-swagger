'use strict';

var utils = require('../utils/writer.js');
var FivePhaseRecipe = require('../service/FivePhaseRecipeService');

module.exports.recipeFive_phaseGridbasedPOST = function recipeFive_phaseGridbasedPOST (req, res, next) {
  var recipe = req.swagger.params['recipe'].value;
  FivePhaseRecipe.recipeFive_phaseGridbasedPOST(recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeFive_phaseGridbasedUuidPUT = function recipeFive_phaseGridbasedUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var recipe = req.swagger.params['recipe'].value;
  FivePhaseRecipe.recipeFive_phaseGridbasedUuidPUT(uuid,recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
