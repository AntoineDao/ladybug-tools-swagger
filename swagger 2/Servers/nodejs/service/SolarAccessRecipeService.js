'use strict';


/**
 * Create a new solar_access object
 * Adds a new solar_access object to the list
 *
 * recipe SolarAccessGridBasedSchema A solar_access JSON objectr with a uuid key.
 * returns inline_response_204
 **/
exports.recipeSolar_accessGridbasedPOST = function(recipe) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "uuid" : "1a390fe5-9b53-4c52-9ecb-aa2f9633babd"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify an existing solar_access object
 * Modifies any parameter (except uuid) of a solar_access recipe object by completely replacing the definition object. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the solar_access recipe.
 * recipe SolarAccessGridBasedSchema A solar_access JSON objectr with a uuid key.
 * no response value expected for this operation
 **/
exports.recipeSolar_accessGridbasedUuidPUT = function(uuid,recipe) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

