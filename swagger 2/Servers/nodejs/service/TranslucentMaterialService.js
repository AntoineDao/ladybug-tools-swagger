'use strict';


/**
 * Create a new translucent material object
 * Adds a new translucent material object to the database
 *
 * translucent_material TranslucentMaterialSchema a translucent material object
 * returns inline_response_204
 **/
exports.materialTranslucentPOST = function(translucent_material) {
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
 * Modify an existing translucent material file
 * Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the material.
 * translucent_material TranslucentMaterialSchema a translucent material object
 * no response value expected for this operation
 **/
exports.materialTranslucentUuidPUT = function(uuid,translucent_material) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

