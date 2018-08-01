'use strict';


/**
 * Get a list of EPW objects
 * Retrieves a list of epw objects for a given filter.
 *
 * country String The countyr the EPW is from (optional)
 * returns inline_response_200_2
 **/
exports.epwGET = function(country) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "results" : [ {
    "uuid" : "uuid",
    "epw" : {
      "data" : [ {
        "data" : [ {
          "standard" : "SI",
          "nickname" : "null"
        }, {
          "standard" : "SI",
          "nickname" : "null"
        } ],
        "header" : "{}"
      }, {
        "data" : [ {
          "standard" : "SI",
          "nickname" : "null"
        }, {
          "standard" : "SI",
          "nickname" : "null"
        } ],
        "header" : "{}"
      } ],
      "header" : [ "header", "header", "header", "header", "header", "header", "header", "header" ],
      "location" : {
        "elevation" : 1.46581298050294517310021547018550336360931396484375,
        "city" : "city",
        "latitude" : -75.5850925717017929628127603791654109954833984375,
        "time_zone" : "time_zone",
        "longitude" : 36.98842259053452607986400835216045379638671875
      }
    }
  }, {
    "uuid" : "uuid",
    "epw" : {
      "data" : [ {
        "data" : [ {
          "standard" : "SI",
          "nickname" : "null"
        }, {
          "standard" : "SI",
          "nickname" : "null"
        } ],
        "header" : "{}"
      }, {
        "data" : [ {
          "standard" : "SI",
          "nickname" : "null"
        }, {
          "standard" : "SI",
          "nickname" : "null"
        } ],
        "header" : "{}"
      } ],
      "header" : [ "header", "header", "header", "header", "header", "header", "header", "header" ],
      "location" : {
        "elevation" : 1.46581298050294517310021547018550336360931396484375,
        "city" : "city",
        "latitude" : -75.5850925717017929628127603791654109954833984375,
        "time_zone" : "time_zone",
        "longitude" : 36.98842259053452607986400835216045379638671875
      }
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
 * Create a new epw file
 * Adds a new epw file to the list
 *
 * epw EpwSchema The location of the epw.
 * returns inline_response_204
 **/
exports.epwPOST = function(epw) {
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
 * Delete an existing epw file
 * Delete an epw file in the database specifying the uuid of the file
 *
 * uuid String The unique identifier of the epw.
 * no response value expected for this operation
 **/
exports.epwUuidDELETE = function(uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a specific epw file
 * Returns a single epw file
 *
 * uuid String The unique identifier of the epw.
 * returns inline_response_200_3
 **/
exports.epwUuidGET = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "uuid" : "uuid",
  "epw" : {
    "data" : [ {
      "data" : [ {
        "standard" : "SI",
        "nickname" : "null"
      }, {
        "standard" : "SI",
        "nickname" : "null"
      } ],
      "header" : "{}"
    }, {
      "data" : [ {
        "standard" : "SI",
        "nickname" : "null"
      }, {
        "standard" : "SI",
        "nickname" : "null"
      } ],
      "header" : "{}"
    } ],
    "header" : [ "header", "header", "header", "header", "header", "header", "header", "header" ],
    "location" : {
      "elevation" : 1.46581298050294517310021547018550336360931396484375,
      "city" : "city",
      "latitude" : -75.5850925717017929628127603791654109954833984375,
      "time_zone" : "time_zone",
      "longitude" : 36.98842259053452607986400835216045379638671875
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify an existing epw file
 * Modifies any parameter (except uuid) of an epw file by completely replacing the EPW file. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the epw.
 * epw EpwSchema The location of the epw.
 * no response value expected for this operation
 **/
exports.epwUuidPUT = function(uuid,epw) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

