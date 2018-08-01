'use strict';


/**
 * Create a new opaque material object
 * Adds a new opaque material object to the database
 *
 * opaque_material OpaqueMaterialSchema an opaque material object
 * returns inline_response_204
 **/
exports.materialOpaquePOST = function(opaque_material) {
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
 * Modify an existing opaque material file
 * Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the material.
 * opaque_material OpaqueMaterialSchema an opaque material object
 * no response value expected for this operation
 **/
exports.materialOpaqueUuidPUT = function(uuid,opaque_material) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

