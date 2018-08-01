'use strict';

var utils = require('../utils/writer.js');
var ThreePhase = require('../service/ThreePhaseService');

module.exports.recipeThree_phaseGridbasedPOST = function recipeThree_phaseGridbasedPOST (req, res, next) {
  var recipe = req.swagger.params['recipe'].value;
  ThreePhase.recipeThree_phaseGridbasedPOST(recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeThree_phaseGridbasedUuidPUT = function recipeThree_phaseGridbasedUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var recipe = req.swagger.params['recipe'].value;
  ThreePhase.recipeThree_phaseGridbasedUuidPUT(uuid,recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
