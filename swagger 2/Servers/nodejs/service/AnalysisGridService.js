'use strict';


/**
 * Get a list of analysis_grid objects
 * Retrieves a list of analysis grids for a given filter.
 *
 * grid_name String The name of the grid (optional)
 * min_points Integer The minimum amount of points the analysis grid has (optional)
 * max_points Integer The maximum amount of points the analysis grid has (optional)
 * returns inline_response_200
 **/
exports.analysis_gridGET = function(grid_name,min_points,max_points) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "results" : [ {
    "uuid" : "uuid",
    "analysis_grid" : {
      "analysis_points" : [ {
        "values" : [ {
          "source_id" : "source_id",
          "source" : [ {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          }, {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          } ]
        }, {
          "source_id" : "source_id",
          "source" : [ {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          }, {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          } ]
        } ],
        "location" : {
          "x" : 0.80082819046101150206595775671303272247314453125,
          "y" : 6.02745618307040320615897144307382404804229736328125,
          "z" : 1.46581298050294517310021547018550336360931396484375
        },
        "direction" : {
          "x" : 5.962133916683182377482808078639209270477294921875,
          "y" : 5.63737665663332876420099637471139430999755859375,
          "z" : 2.3021358869347654518833223846741020679473876953125
        }
      }, {
        "values" : [ {
          "source_id" : "source_id",
          "source" : [ {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          }, {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          } ]
        }, {
          "source_id" : "source_id",
          "source" : [ {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          }, {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          } ]
        } ],
        "location" : {
          "x" : 0.80082819046101150206595775671303272247314453125,
          "y" : 6.02745618307040320615897144307382404804229736328125,
          "z" : 1.46581298050294517310021547018550336360931396484375
        },
        "direction" : {
          "x" : 5.962133916683182377482808078639209270477294921875,
          "y" : 5.63737665663332876420099637471139430999755859375,
          "z" : 2.3021358869347654518833223846741020679473876953125
        }
      } ],
      "name" : "name",
      "window_groups" : [ "window_groups", "window_groups" ]
    }
  }, {
    "uuid" : "uuid",
    "analysis_grid" : {
      "analysis_points" : [ {
        "values" : [ {
          "source_id" : "source_id",
          "source" : [ {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          }, {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          } ]
        }, {
          "source_id" : "source_id",
          "source" : [ {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          }, {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          } ]
        } ],
        "location" : {
          "x" : 0.80082819046101150206595775671303272247314453125,
          "y" : 6.02745618307040320615897144307382404804229736328125,
          "z" : 1.46581298050294517310021547018550336360931396484375
        },
        "direction" : {
          "x" : 5.962133916683182377482808078639209270477294921875,
          "y" : 5.63737665663332876420099637471139430999755859375,
          "z" : 2.3021358869347654518833223846741020679473876953125
        }
      }, {
        "values" : [ {
          "source_id" : "source_id",
          "source" : [ {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          }, {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          } ]
        }, {
          "source_id" : "source_id",
          "source" : [ {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          }, {
            "state_id" : "state_id",
            "state" : [ {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            }, {
              "hoy" : {
                "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
                "direct_value" : 9.301444243932575517419536481611430644989013671875
              },
              "hoy_id" : 7
            } ]
          } ]
        } ],
        "location" : {
          "x" : 0.80082819046101150206595775671303272247314453125,
          "y" : 6.02745618307040320615897144307382404804229736328125,
          "z" : 1.46581298050294517310021547018550336360931396484375
        },
        "direction" : {
          "x" : 5.962133916683182377482808078639209270477294921875,
          "y" : 5.63737665663332876420099637471139430999755859375,
          "z" : 2.3021358869347654518833223846741020679473876953125
        }
      } ],
      "name" : "name",
      "window_groups" : [ "window_groups", "window_groups" ]
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
 * Create a new analysis_grid file
 * Adds a new analysis_grid file to the list
 *
 * analysis_grid AnalysisGridSchema A analysis_grid JSON filer with a uuid key.
 * returns inline_response_204
 **/
exports.analysis_gridPOST = function(analysis_grid) {
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
 * Delete an existing analysis_grid file
 * Delete an analysis_grid file in the database specifying the uuid of the file
 *
 * uuid String The unique identifier of the analysis_grid.
 * no response value expected for this operation
 **/
exports.analysis_gridUuidDELETE = function(uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an analysis_grid object
 * Returns a single analysis_grid object based on the provided uuid
 *
 * uuid String The unique identifier of the analysis_grid.
 * returns inline_response_200_1
 **/
exports.analysis_gridUuidGET = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "uuid" : "1a390fe5-9b53-4c52-9ecb-aa2f9633babd",
  "analysis_grid" : {
    "analysis_points" : [ {
      "values" : [ {
        "source_id" : "source_id",
        "source" : [ {
          "state_id" : "state_id",
          "state" : [ {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          }, {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          } ]
        }, {
          "state_id" : "state_id",
          "state" : [ {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          }, {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          } ]
        } ]
      }, {
        "source_id" : "source_id",
        "source" : [ {
          "state_id" : "state_id",
          "state" : [ {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          }, {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          } ]
        }, {
          "state_id" : "state_id",
          "state" : [ {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          }, {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          } ]
        } ]
      } ],
      "location" : {
        "x" : 0.80082819046101150206595775671303272247314453125,
        "y" : 6.02745618307040320615897144307382404804229736328125,
        "z" : 1.46581298050294517310021547018550336360931396484375
      },
      "direction" : {
        "x" : 5.962133916683182377482808078639209270477294921875,
        "y" : 5.63737665663332876420099637471139430999755859375,
        "z" : 2.3021358869347654518833223846741020679473876953125
      }
    }, {
      "values" : [ {
        "source_id" : "source_id",
        "source" : [ {
          "state_id" : "state_id",
          "state" : [ {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          }, {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          } ]
        }, {
          "state_id" : "state_id",
          "state" : [ {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          }, {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          } ]
        } ]
      }, {
        "source_id" : "source_id",
        "source" : [ {
          "state_id" : "state_id",
          "state" : [ {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          }, {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          } ]
        }, {
          "state_id" : "state_id",
          "state" : [ {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          }, {
            "hoy" : {
              "indirect_value" : 3.61607674925191080461672754609026014804840087890625,
              "direct_value" : 9.301444243932575517419536481611430644989013671875
            },
            "hoy_id" : 7
          } ]
        } ]
      } ],
      "location" : {
        "x" : 0.80082819046101150206595775671303272247314453125,
        "y" : 6.02745618307040320615897144307382404804229736328125,
        "z" : 1.46581298050294517310021547018550336360931396484375
      },
      "direction" : {
        "x" : 5.962133916683182377482808078639209270477294921875,
        "y" : 5.63737665663332876420099637471139430999755859375,
        "z" : 2.3021358869347654518833223846741020679473876953125
      }
    } ],
    "name" : "name",
    "window_groups" : [ "window_groups", "window_groups" ]
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
 * Modify an existing analysis_grid file
 * Modifies any parameter (except uuid) of an analysis_grid file by completely replacing the definition file. A finer grain method can be set up later.
 *
 * uuid String The unique identifier of the analysis_grid.
 * analysis_grid AnalysisGridSchema A analysis_grid JSON filer with a uuid key.
 * no response value expected for this operation
 **/
exports.analysis_gridUuidPUT = function(uuid,analysis_grid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

