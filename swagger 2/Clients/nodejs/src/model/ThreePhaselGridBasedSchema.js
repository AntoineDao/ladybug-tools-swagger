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
    define(['ApiClient', 'model/AnalysisGridSchema', 'model/AnalysisType', 'model/HBSurfaceSchema', 'model/RadianceParameters', 'model/SkyMtxSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalysisGridSchema'), require('./AnalysisType'), require('./HBSurfaceSchema'), require('./RadianceParameters'), require('./SkyMtxSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.HoneybeeServerApi) {
      root.HoneybeeServerApi = {};
    }
    root.HoneybeeServerApi.ThreePhaselGridBasedSchema = factory(root.HoneybeeServerApi.ApiClient, root.HoneybeeServerApi.AnalysisGridSchema, root.HoneybeeServerApi.AnalysisType, root.HoneybeeServerApi.HBSurfaceSchema, root.HoneybeeServerApi.RadianceParameters, root.HoneybeeServerApi.SkyMtxSchema);
  }
}(this, function(ApiClient, AnalysisGridSchema, AnalysisType, HBSurfaceSchema, RadianceParameters, SkyMtxSchema) {
  'use strict';




  /**
   * The ThreePhaselGridBasedSchema model module.
   * @module model/ThreePhaselGridBasedSchema
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>ThreePhaselGridBasedSchema</code>.
   * @alias module:model/ThreePhaselGridBasedSchema
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ThreePhaselGridBasedSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreePhaselGridBasedSchema} obj Optional instance to populate.
   * @return {module:model/ThreePhaselGridBasedSchema} The populated <code>ThreePhaselGridBasedSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('sky_mtx')) {
        obj['sky_mtx'] = SkyMtxSchema.constructFromObject(data['sky_mtx']);
      }
      if (data.hasOwnProperty('analysis_grids')) {
        obj['analysis_grids'] = ApiClient.convertToType(data['analysis_grids'], [AnalysisGridSchema]);
      }
      if (data.hasOwnProperty('surfaces')) {
        obj['surfaces'] = ApiClient.convertToType(data['surfaces'], [HBSurfaceSchema]);
      }
      if (data.hasOwnProperty('analysis_type')) {
        obj['analysis_type'] = AnalysisType.constructFromObject(data['analysis_type']);
      }
      if (data.hasOwnProperty('view_mtx_parameters')) {
        obj['view_mtx_parameters'] = RadianceParameters.constructFromObject(data['view_mtx_parameters']);
      }
      if (data.hasOwnProperty('daylight_mtx_parameters')) {
        obj['daylight_mtx_parameters'] = RadianceParameters.constructFromObject(data['daylight_mtx_parameters']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ThreePhaselGridBasedSchema.IdEnum} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/ThreePhaselGridBasedSchema.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/SkyMtxSchema} sky_mtx
   */
  exports.prototype['sky_mtx'] = undefined;
  /**
   * @member {Array.<module:model/AnalysisGridSchema>} analysis_grids
   */
  exports.prototype['analysis_grids'] = undefined;
  /**
   * @member {Array.<module:model/HBSurfaceSchema>} surfaces
   */
  exports.prototype['surfaces'] = undefined;
  /**
   * @member {module:model/AnalysisType} analysis_type
   */
  exports.prototype['analysis_type'] = undefined;
  /**
   * @member {module:model/RadianceParameters} view_mtx_parameters
   */
  exports.prototype['view_mtx_parameters'] = undefined;
  /**
   * @member {module:model/RadianceParameters} daylight_mtx_parameters
   */
  exports.prototype['daylight_mtx_parameters'] = undefined;


  /**
   * Allowed values for the <code>id</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IdEnum = {
    /**
     * value: "three_phase"
     * @const
     */
    "phase": "three_phase"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "gridbased"
     * @const
     */
    "gridbased": "gridbased"  };


  return exports;
}));


