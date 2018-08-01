'use strict';


/**
 * Get a list of WEA objects
 * Retrieves a list of wea objects for a given filter.
 *
 * country String The countyr the EPW is from (optional)
 * returns inline_response_200_9
 **/
exports.weaGET = function(country) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "results" : [ {
    "hbsurface" : {
      "diffuse_horizontal_radiation" : {
        "data" : [ {
          "standard" : "SI",
          "nickname" : "null"
        }, {
          "standard" : "SI",
          "nickname" : "null"
        } ],
        "header" : "{}"
      },
      "header" : [ "header", "header", "header", "header", "header", "header", "header", "header" ],
      "direct_normal_radiation" : {
        "data" : [ {
          "standard" : "SI",
          "nickname" : "null"
        }, {
          "standard" : "SI",
          "nickname" : "null"
        } ],
        "header" : "{}"
      },
      "location" : {
        "elevation" : 1.46581298050294517310021547018550336360931396484375,
        "city" : "city",
        "latitude" : -75.5850925717017929628127603791654109954833984375,
        "time_zone" : "time_zone",
        "longitude" : 36.98842259053452607986400835216045379638671875
      }
    },
    "uuid" : "uuid"
  }, {
    "hbsurface" : {
      "diffuse_horizontal_radiation" : {
        "data" : [ {
          "standard" : "SI",
          "nickname" : "null"
        }, {
          "standard" : "SI",
          "nickname" : "null"
        } ],
        "header" : "{}"
      },
      "header" : [ "header", "header", "header", "header", "header", "header", "header", "header" ],
      "direct_normal_radiation" : {
        "data" : [ {
          "standard" : "SI",
          "nickname" : "null"
        }, {
          "standard" : "SI",
          "nickname" : "null"
        } ],
        "header" : "{}"
      },
      "location" : {
        "elevation" : 1.46581298050294517310021547018550336360931396484375,
        "city" : "city",
        "latitude" : -75.5850925717017929628127603791654109954833984375,
        "time_zone" : "time_zone",
        "longitude" : 36.98842259053452607986400835216045379638671875
      }
    },
    "uuid" : "uuid"
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
 * Create a new wea object
 * Adds a new wea object to the list
 *
 * wea WeaSchema a wea object
 * returns inline_response_204
 **/
exports.weaPOST = function(wea) {
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
 * Delete an existing wea object
 * Delete an wea object in the database specifying the uuid of the object
 *
 * uuid String The unique identifier of the wea.
 * no response value expected for this operation
 **/
exports.weaUuidDELETE = function(uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a specific wea object
 * Returns a single wea object
 *
 * uuid String The unique identifier of the wea.
 * returns inline_response_200_10
 **/
exports.weaUuidGET = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "wea" : {
    "diffuse_horizontal_radiation" : {
      "data" : [ {
        "standard" : "SI",
        "nickname" : "null"
      }, {
        "standard" : "SI",
        "nickname" : "null"
      } ],
      "header" : "{}"
    },
    "header" : [ "header", "header", "header", "header", "header", "header", "header", "header" ],
    "direct_normal_radiation" : {
      "data" : [ {
        "standard" : "SI",
        "nickname" : "null"
      }, {
        "standard" : "SI",
        "nickname" : "null"
      } ],
      "header" : "{}"
    },
    "location" : {
      "elevation" : 1.46581298050294517310021547018550336360931396484375,
      "city" : "city",
      "latitude" : -75.5850925717017929628127603791654109954833984375,
      "time_zone" : "time_zone",
      "longitude" : 36.98842259053452607986400835216045379638671875
    }
  },
  "uuid" : "uuid"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify an existing wea object
 * Modifies any parameter (except uuid) of an wea object by completely replacing the wea object. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the wea.
 * wea WeaSchema a wea object
 * no response value expected for this operation
 **/
exports.weaUuidPUT = function(uuid,wea) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

