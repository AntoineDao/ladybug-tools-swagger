'use strict';


/**
 * Create a new point_in_time object
 * Adds a new point_in_time object to the list
 *
 * recipe PointInTimeGridBasedSchema A point_in_time JSON objectr with a uuid key.
 * returns inline_response_204
 **/
exports.recipePoint_in_timeGridbasedPOST = function(recipe) {
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
 * Modify an existing point_in_time object
 * Modifies any parameter (except uuid) of a point_in_time recipe object by completely replacing the definition object. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the point_in_time recipe.
 * recipe PointInTimeGridBasedSchema A analysis_grid JSON objectr with a uuid key.
 * no response value expected for this operation
 **/
exports.recipePoint_in_timeGridbasedUuidPUT = function(uuid,recipe) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

