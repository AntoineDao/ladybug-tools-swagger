/**
 * Honeybee Server API
 * A sample API definition for a honeybee server
 *
 * OpenAPI spec version: 0.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HoneybeeServerApi);
  }
}(this, function(expect, HoneybeeServerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HoneybeeServerApi.ThreePhaselGridBasedSchema();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ThreePhaselGridBasedSchema', function() {
    it('should create an instance of ThreePhaselGridBasedSchema', function() {
      // uncomment below and update the code to test ThreePhaselGridBasedSchema
      //var instane = new HoneybeeServerApi.ThreePhaselGridBasedSchema();
      //expect(instance).to.be.a(HoneybeeServerApi.ThreePhaselGridBasedSchema);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HoneybeeServerApi.ThreePhaselGridBasedSchema();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new HoneybeeServerApi.ThreePhaselGridBasedSchema();
      //expect(instance).to.be();
    });

    it('should have the property skyMtx (base name: "sky_mtx")', function() {
      // uncomment below and update the code to test the property skyMtx
      //var instane = new HoneybeeServerApi.ThreePhaselGridBasedSchema();
      //expect(instance).to.be();
    });

    it('should have the property analysisGrids (base name: "analysis_grids")', function() {
      // uncomment below and update the code to test the property analysisGrids
      //var instane = new HoneybeeServerApi.ThreePhaselGridBasedSchema();
      //expect(instance).to.be();
    });

    it('should have the property surfaces (base name: "surfaces")', function() {
      // uncomment below and update the code to test the property surfaces
      //var instane = new HoneybeeServerApi.ThreePhaselGridBasedSchema();
      //expect(instance).to.be();
    });

    it('should have the property analysisType (base name: "analysis_type")', function() {
      // uncomment below and update the code to test the property analysisType
      //var instane = new HoneybeeServerApi.ThreePhaselGridBasedSchema();
      //expect(instance).to.be();
    });

    it('should have the property viewMtxParameters (base name: "view_mtx_parameters")', function() {
      // uncomment below and update the code to test the property viewMtxParameters
      //var instane = new HoneybeeServerApi.ThreePhaselGridBasedSchema();
      //expect(instance).to.be();
    });

    it('should have the property daylightMtxParameters (base name: "daylight_mtx_parameters")', function() {
      // uncomment below and update the code to test the property daylightMtxParameters
      //var instane = new HoneybeeServerApi.ThreePhaselGridBasedSchema();
      //expect(instance).to.be();
    });

  });

}));
