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
    instance = new HoneybeeServerApi.LightSourceMaterialSchema();
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

  describe('LightSourceMaterialSchema', function() {
    it('should create an instance of LightSourceMaterialSchema', function() {
      // uncomment below and update the code to test LightSourceMaterialSchema
      //var instane = new HoneybeeServerApi.LightSourceMaterialSchema();
      //expect(instance).to.be.a(HoneybeeServerApi.LightSourceMaterialSchema);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new HoneybeeServerApi.LightSourceMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property red (base name: "red")', function() {
      // uncomment below and update the code to test the property red
      //var instane = new HoneybeeServerApi.LightSourceMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property green (base name: "green")', function() {
      // uncomment below and update the code to test the property green
      //var instane = new HoneybeeServerApi.LightSourceMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property blue (base name: "blue")', function() {
      // uncomment below and update the code to test the property blue
      //var instane = new HoneybeeServerApi.LightSourceMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property radius (base name: "radius")', function() {
      // uncomment below and update the code to test the property radius
      //var instane = new HoneybeeServerApi.LightSourceMaterialSchema();
      //expect(instance).to.be();
    });

    it('should have the property modifier (base name: "modifier")', function() {
      // uncomment below and update the code to test the property modifier
      //var instane = new HoneybeeServerApi.LightSourceMaterialSchema();
      //expect(instance).to.be();
    });

  });

}));
