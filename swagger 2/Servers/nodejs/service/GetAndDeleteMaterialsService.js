'use strict';


/**
 * Get a list of material objects
 * Retrieves a list of material uuids for a given filter.
 *
 * material_type String The type of the material to be queried (optional)
 * rgb_transmittance BigDecimal The RGB average transmittance value (will only return translucent material) (optional)
 * rgb_reflectance BigDecimal The RGB average reflectance value (will only return opaque material) (optional)
 * returns inline_response_200_4
 **/
exports.materialGET = function(material_type,rgb_transmittance,rgb_reflectance) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "results" : [ {
    "material" : {
      "type" : "opaque",
      "material" : {
        "name" : "HoneyComb",
        "type" : "plastic",
        "r_reflectance" : 0.4,
        "g_reflectance" : 0.5,
        "b_reflectance" : 0.2,
        "refraction" : 0.4,
        "specularity" : 0.01,
        "roughness" : 0.03,
        "modifier" : "void"
      }
    },
    "uuid" : "1a390fe5-9b53-4c52-9ecb-aa2f9633babd"
  }, {
    "material" : {
      "type" : "opaque",
      "material" : {
        "name" : "HoneyComb",
        "type" : "plastic",
        "r_reflectance" : 0.4,
        "g_reflectance" : 0.5,
        "b_reflectance" : 0.2,
        "refraction" : 0.4,
        "specularity" : 0.01,
        "roughness" : 0.03,
        "modifier" : "void"
      }
    },
    "uuid" : "1a390fe5-9b53-4c52-9ecb-aa2f9633babd"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an existing material file
 * Delete an material file in the database specifying the uuid of the file
 *
 * uuid String The unique identifier of the material.
 * no response value expected for this operation
 **/
exports.materialUuidDELETE = function(uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a specific material object
 * Returns a single material object
 *
 * uuid String The unique identifier of the material.
 * returns inline_response_200_5
 **/
exports.materialUuidGET = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "material" : {
    "type" : "opaque",
    "material" : {
      "name" : "HoneyComb",
      "type" : "plastic",
      "r_reflectance" : 0.4,
      "g_reflectance" : 0.5,
      "b_reflectance" : 0.2,
      "refraction" : 0.4,
      "specularity" : 0.01,
      "roughness" : 0.03,
      "modifier" : "void"
    }
  },
  "uuid" : "1a390fe5-9b53-4c52-9ecb-aa2f9633babd"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

