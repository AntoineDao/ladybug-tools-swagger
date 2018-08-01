'use strict';


/**
 * Get a list of daylight recipe objects
 * Retrieves a list of daylight recipe objects for a given filter.
 *
 * size Integer Number of files returned (optional)
 * country String Country where definitions should be from (optional)
 * returns inline_response_200
 **/
exports.recipeGET = function(size,country) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "query" : "{}",
  "results" : [ {
    "uuid" : "709116b8-d71e-4d50-bb54-216e83ad9f3f",
    "recipe" : {
      "id" : "annual",
      "type" : "gridbased",
      "sky_mtx" : {
        "wea" : "wea Json file",
        "sky_density" : 1,
        "north" : 0,
        "mode" : 2,
        "suffix" : null
      },
      "analysis_grids" : [ "list of analysis grids" ],
      "surfaces" : [ "list of surfaces" ],
      "analysis_type" : 2,
      "rad_parameters" : "-ab 5 -aa 0.05 -ar 128"
    }
  }, {
    "uuid" : "709116b8-d71e-4d50-bb54-216e83ad9f3f",
    "recipe" : {
      "id" : "annual",
      "type" : "gridbased",
      "sky_mtx" : {
        "wea" : "wea Json file",
        "sky_density" : 1,
        "north" : 0,
        "mode" : 2,
        "suffix" : null
      },
      "analysis_grids" : [ "list of analysis grids" ],
      "surfaces" : [ "list of surfaces" ],
      "analysis_type" : 2,
      "rad_parameters" : "-ab 5 -aa 0.05 -ar 128"
    }
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
 * Delete an existing recipe object
 * Delete an recipe object in the database specifying the uuid of the file
 *
 * uuid String The unique identifier of the recipe.
 * no response value expected for this operation
 **/
exports.recipeUuidDELETE = function(uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a specific analysis_grid file
 * Returns a single analysis_grid file
 *
 * uuid String The unique identifier of the analysis_grid.
 * returns GridBasedRecipeSchema
 **/
exports.recipeUuidGET = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "uuid" : "709116b8-d71e-4d50-bb54-216e83ad9f3f",
  "recipe" : {
    "id" : "annual",
    "type" : "gridbased",
    "sky_mtx" : {
      "wea" : "wea Json file",
      "sky_density" : 1,
      "north" : 0,
      "mode" : 2,
      "suffix" : null
    },
    "analysis_grids" : [ "list of analysis grids" ],
    "surfaces" : [ "list of surfaces" ],
    "analysis_type" : 2,
    "rad_parameters" : "-ab 5 -aa 0.05 -ar 128"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

