'use strict';


/**
 * Create a new light_source material object
 * Adds a new light_source material object to the database
 *
 * light_source_material LightSourceMaterialSchema a light_source material object
 * returns inline_response_204
 **/
exports.materialLight_sourcePOST = function(light_source_material) {
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
 * Modify an existing light_source material file
 * Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the material.
 * light_source_material LightSourceMaterialSchema a light_source material object
 * no response value expected for this operation
 **/
exports.materialLight_sourceUuidPUT = function(uuid,light_source_material) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

