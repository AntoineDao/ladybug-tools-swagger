'use strict';

var utils = require('../utils/writer.js');
var DaylightFactorRecipe = require('../service/DaylightFactorRecipeService');

module.exports.recipeDaylight_factorGridbasedPOST = function recipeDaylight_factorGridbasedPOST (req, res, next) {
  var recipe = req.swagger.params['recipe'].value;
  DaylightFactorRecipe.recipeDaylight_factorGridbasedPOST(recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeDaylight_factorGridbasedUuidPUT = function recipeDaylight_factorGridbasedUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var recipe = req.swagger.params['recipe'].value;
  DaylightFactorRecipe.recipeDaylight_factorGridbasedUuidPUT(uuid,recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
