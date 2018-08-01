'use strict';


/**
 * Create a new direct_reflection object
 * Adds a new direct_reflection object to the list
 *
 * recipe DirectReflectionGridBasedSchema A direct_reflection JSON objectr with a uuid key.
 * returns inline_response_204
 **/
exports.recipeDirect_reflectionGridbasedPOST = function(recipe) {
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
 * Modify an existing direct_reflection object
 * Modifies any parameter (except uuid) of a direct_reflection recipe object by completely replacing the definition object. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the direct_reflection recipe.
 * recipe DirectReflectionGridBasedSchema A analysis_grid JSON objectr with a uuid key.
 * no response value expected for this operation
 **/
exports.recipeDirect_reflectionGridbasedUuidPUT = function(uuid,recipe) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

