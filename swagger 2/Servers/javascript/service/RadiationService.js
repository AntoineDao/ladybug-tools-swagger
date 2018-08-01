'use strict';


/**
 * Create a new radiation file
 * Adds a new radiation file to the list
 *
 * recipe RadiationGridBasedSchema A radiation JSON filer with a uuid key.
 * returns inline_response_204
 **/
exports.recipeRadiationGridbasedPOST = function(recipe) {
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
 * Modify an existing radiation file
 * Modifies any parameter (except uuid) of a radiation recipe object by completely replacing the definition file. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the radiation recipe.
 * recipe RadiationGridBasedSchema A radiation JSON filer with a uuid key.
 * no response value expected for this operation
 **/
exports.recipeRadiationGridbasedUuidPUT = function(uuid,recipe) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

