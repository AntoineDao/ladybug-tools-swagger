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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnalysisSurfaceSchemaRadProperties', 'model/SurfaceStateSchema', 'model/VertexSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalysisSurfaceSchemaRadProperties'), require('./SurfaceStateSchema'), require('./VertexSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.HoneybeeServerApi) {
      root.HoneybeeServerApi = {};
    }
    root.HoneybeeServerApi.AnalysisSurfaceSchema = factory(root.HoneybeeServerApi.ApiClient, root.HoneybeeServerApi.AnalysisSurfaceSchemaRadProperties, root.HoneybeeServerApi.SurfaceStateSchema, root.HoneybeeServerApi.VertexSchema);
  }
}(this, function(ApiClient, AnalysisSurfaceSchemaRadProperties, SurfaceStateSchema, VertexSchema) {
  'use strict';




  /**
   * The AnalysisSurfaceSchema model module.
   * @module model/AnalysisSurfaceSchema
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>AnalysisSurfaceSchema</code>.
   * @alias module:model/AnalysisSurfaceSchema
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AnalysisSurfaceSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalysisSurfaceSchema} obj Optional instance to populate.
   * @return {module:model/AnalysisSurfaceSchema} The populated <code>AnalysisSurfaceSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('surface_type')) {
        obj['surface_type'] = ApiClient.convertToType(data['surface_type'], 'Number');
      }
      if (data.hasOwnProperty('vertices')) {
        obj['vertices'] = ApiClient.convertToType(data['vertices'], [VertexSchema]);
      }
      if (data.hasOwnProperty('rad_properties')) {
        obj['rad_properties'] = AnalysisSurfaceSchemaRadProperties.constructFromObject(data['rad_properties']);
      }
      if (data.hasOwnProperty('surface_states')) {
        obj['surface_states'] = ApiClient.convertToType(data['surface_states'], [SurfaceStateSchema]);
      }
    }
    return obj;
  }

  /**
   * The name of the surface
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 0.0=Wall, 0.5=UndergroundWall, 1.0=Roof, 1.5=UndergroundCeiling, 2.0=Floor, 2.5=SlabOnGrade, 2.75=ExposedFloor, 3.0=Ceiling, 5.0=Window, 6.0=Context
   * @member {Number} surface_type
   */
  exports.prototype['surface_type'] = undefined;
  /**
   * @member {Array.<module:model/VertexSchema>} vertices
   */
  exports.prototype['vertices'] = undefined;
  /**
   * @member {module:model/AnalysisSurfaceSchemaRadProperties} rad_properties
   */
  exports.prototype['rad_properties'] = undefined;
  /**
   * @member {Array.<module:model/SurfaceStateSchema>} surface_states
   */
  exports.prototype['surface_states'] = undefined;



  return exports;
}));


