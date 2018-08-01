'use strict';


/**
 * Create a new five_phase object
 * Adds a new five_phase object to the list
 *
 * recipe FivePhaselGridBasedSchema A five_phase JSON objectr with a uuid key.
 * returns inline_response_204
 **/
exports.recipeFive_phaseGridbasedPOST = function(recipe) {
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
 * Modify an existing five_phase object
 * Modifies any parameter (except uuid) of a five_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the five_phase recipe.
 * recipe FivePhaselGridBasedSchema A five_phase JSON objectr with a uuid key.
 * no response value expected for this operation
 **/
exports.recipeFive_phaseGridbasedUuidPUT = function(uuid,recipe) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

