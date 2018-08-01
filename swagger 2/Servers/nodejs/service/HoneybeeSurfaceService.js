'use strict';


/**
 * Get a list of hbsurface objects
 * Retrieves a list of HoneyBee Surface objects for a given filter.
 *
 * surface_type String The type of the surface to be queried (optional)
 * surface_material String retrieve surfaces based on the name of their main material definiton (not materials in a given surface state) (optional)
 * surface_state String retrieve a surface using the name of a given state it contains (optional)
 * returns inline_response_200_7
 **/
exports.hbsurfaceGET = function(surface_type,surface_material,surface_state) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "results" : [ {
    "hbsurface" : {
      "parent_surface" : {
        "rad_properties" : {
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
          "uuid" : "uuid"
        },
        "vertices" : [ "", "" ],
        "name" : "name",
        "surface_states" : [ {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        }, {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        } ],
        "surface_type" : 0.48049691427660690123957465402781963348388671875
      },
      "child_surfaces" : [ {
        "rad_properties" : {
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
          "uuid" : "uuid"
        },
        "vertices" : [ "", "" ],
        "name" : "name",
        "surface_states" : [ {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        }, {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        } ],
        "surface_type" : 0.48049691427660690123957465402781963348388671875
      }, {
        "rad_properties" : {
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
          "uuid" : "uuid"
        },
        "vertices" : [ "", "" ],
        "name" : "name",
        "surface_states" : [ {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        }, {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        } ],
        "surface_type" : 0.48049691427660690123957465402781963348388671875
      } ]
    },
    "uuid" : "uuid"
  }, {
    "hbsurface" : {
      "parent_surface" : {
        "rad_properties" : {
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
          "uuid" : "uuid"
        },
        "vertices" : [ "", "" ],
        "name" : "name",
        "surface_states" : [ {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        }, {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        } ],
        "surface_type" : 0.48049691427660690123957465402781963348388671875
      },
      "child_surfaces" : [ {
        "rad_properties" : {
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
          "uuid" : "uuid"
        },
        "vertices" : [ "", "" ],
        "name" : "name",
        "surface_states" : [ {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        }, {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        } ],
        "surface_type" : 0.48049691427660690123957465402781963348388671875
      }, {
        "rad_properties" : {
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
          "uuid" : "uuid"
        },
        "vertices" : [ "", "" ],
        "name" : "name",
        "surface_states" : [ {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        }, {
          "surface_properties" : {
            "rad_properties" : {
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
            "surface_type" : 3.61647370984224192369538286584429442882537841796875
          },
          "name" : "name"
        } ],
        "surface_type" : 0.48049691427660690123957465402781963348388671875
      } ]
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
 * Create a new hbsurface object
 * Adds a new hbsurface object to the list
 *
 * hbsurface HBSurfaceSchema A hbsurface JSON object
 * returns inline_response_204
 **/
exports.hbsurfacePOST = function(hbsurface) {
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
 * Delete an existing hbsurface object
 * Delete an hbsurface object in the database specifying the uuid of the object
 *
 * uuid String The unique identifier of the hbsurface.
 * no response value expected for this operation
 **/
exports.hbsurfaceUuidDELETE = function(uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a specific hbsurface object
 * Returns a single hbsurface object
 *
 * uuid String The unique identifier of the hbsurface.
 * returns inline_response_200_8
 **/
exports.hbsurfaceUuidGET = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "hbsurface" : {
    "parent_surface" : {
      "rad_properties" : {
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
        "uuid" : "uuid"
      },
      "vertices" : [ "", "" ],
      "name" : "name",
      "surface_states" : [ {
        "surface_properties" : {
          "rad_properties" : {
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
          "surface_type" : 3.61647370984224192369538286584429442882537841796875
        },
        "name" : "name"
      }, {
        "surface_properties" : {
          "rad_properties" : {
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
          "surface_type" : 3.61647370984224192369538286584429442882537841796875
        },
        "name" : "name"
      } ],
      "surface_type" : 0.48049691427660690123957465402781963348388671875
    },
    "child_surfaces" : [ {
      "rad_properties" : {
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
        "uuid" : "uuid"
      },
      "vertices" : [ "", "" ],
      "name" : "name",
      "surface_states" : [ {
        "surface_properties" : {
          "rad_properties" : {
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
          "surface_type" : 3.61647370984224192369538286584429442882537841796875
        },
        "name" : "name"
      }, {
        "surface_properties" : {
          "rad_properties" : {
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
          "surface_type" : 3.61647370984224192369538286584429442882537841796875
        },
        "name" : "name"
      } ],
      "surface_type" : 0.48049691427660690123957465402781963348388671875
    }, {
      "rad_properties" : {
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
        "uuid" : "uuid"
      },
      "vertices" : [ "", "" ],
      "name" : "name",
      "surface_states" : [ {
        "surface_properties" : {
          "rad_properties" : {
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
          "surface_type" : 3.61647370984224192369538286584429442882537841796875
        },
        "name" : "name"
      }, {
        "surface_properties" : {
          "rad_properties" : {
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
          "surface_type" : 3.61647370984224192369538286584429442882537841796875
        },
        "name" : "name"
      } ],
      "surface_type" : 0.48049691427660690123957465402781963348388671875
    } ]
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
 * Modify an existing hbsurface object
 * Modifies any parameter (except uuid) of an hbsurface object by completely replacing the definition object. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the hbsurface.
 * hbsurface HBSurfaceSchema A hbsurface JSON objectr with a uuid key.
 * no response value expected for this operation
 **/
exports.hbsurfaceUuidPUT = function(uuid,hbsurface) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

