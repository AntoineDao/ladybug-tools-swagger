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
    instance = new HoneybeeServerApi.OpaqueMaterialSchema();
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

  describe('OpaqueMaterialSchema', function() {
    it('should create an instance of OpaqueMaterialSchema', function() {
      // uncomment below and update the code to test OpaqueMaterialSchema
      //var instane = new HoneybeeServerApi.OpaqueMaterialSchema();
      //expect(instance).to.be.a(HoneybeeServerApi.OpaqueMaterialSchema);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new HoneybeeServerApi.OpaqueMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new HoneybeeServerApi.OpaqueMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property rReflectance (base name: "r_reflectance")', function() {
      // uncomment below and update the code to test the property rReflectance
      //var instane = new HoneybeeServerApi.OpaqueMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property gReflectance (base name: "g_reflectance")', function() {
      // uncomment below and update the code to test the property gReflectance
      //var instane = new HoneybeeServerApi.OpaqueMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property bReflectance (base name: "b_reflectance")', function() {
      // uncomment below and update the code to test the property bReflectance
      //var instane = new HoneybeeServerApi.OpaqueMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property refraction (base name: "refraction")', function() {
      // uncomment below and update the code to test the property refraction
      //var instane = new HoneybeeServerApi.OpaqueMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property specularity (base name: "specularity")', function() {
      // uncomment below and update the code to test the property specularity
      //var instane = new HoneybeeServerApi.OpaqueMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property roughness (base name: "roughness")', function() {
      // uncomment below and update the code to test the property roughness
      //var instane = new HoneybeeServerApi.OpaqueMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property modifier (base name: "modifier")', function() {
      // uncomment below and update the code to test the property modifier
      //var instane = new HoneybeeServerApi.OpaqueMaterialSchema();
      //expect(instance).to.be();
    });

  });

}));
