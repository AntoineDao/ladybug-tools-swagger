'use strict';

var utils = require('../utils/writer.js');
var Annual = require('../service/AnnualService');

module.exports.recipeAnnualGridbasedPOST = function recipeAnnualGridbasedPOST (req, res, next) {
  var recipe = req.swagger.params['recipe'].value;
  Annual.recipeAnnualGridbasedPOST(recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recipeAnnualGridbasedUuidPUT = function recipeAnnualGridbasedUuidPUT (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var recipe = req.swagger.params['recipe'].value;
  Annual.recipeAnnualGridbasedUuidPUT(uuid,recipe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
