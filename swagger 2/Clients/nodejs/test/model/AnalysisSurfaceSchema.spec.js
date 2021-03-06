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
    instance = new HoneybeeServerApi.AnalysisSurfaceSchema();
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

  describe('AnalysisSurfaceSchema', function() {
    it('should create an instance of AnalysisSurfaceSchema', function() {
      // uncomment below and update the code to test AnalysisSurfaceSchema
      //var instane = new HoneybeeServerApi.AnalysisSurfaceSchema();
      //expect(instance).to.be.a(HoneybeeServerApi.AnalysisSurfaceSchema);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new HoneybeeServerApi.AnalysisSurfaceSchema();
      //expect(instance).to.be();
    });

    it('should have the property surfaceType (base name: "surface_type")', function() {
      // uncomment below and update the code to test the property surfaceType
      //var instane = new HoneybeeServerApi.AnalysisSurfaceSchema();
      //expect(instance).to.be();
    });

    it('should have the property vertices (base name: "vertices")', function() {
      // uncomment below and update the code to test the property vertices
      //var instane = new HoneybeeServerApi.AnalysisSurfaceSchema();
      //expect(instance).to.be();
    });

    it('should have the property radProperties (base name: "rad_properties")', function() {
      // uncomment below and update the code to test the property radProperties
      //var instane = new HoneybeeServerApi.AnalysisSurfaceSchema();
      //expect(instance).to.be();
    });

    it('should have the property surfaceStates (base name: "surface_states")', function() {
      // uncomment below and update the code to test the property surfaceStates
      //var instane = new HoneybeeServerApi.AnalysisSurfaceSchema();
      //expect(instance).to.be();
    });

  });

}));
