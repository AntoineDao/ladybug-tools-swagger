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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HoneybeeServerApi) {
      root.HoneybeeServerApi = {};
    }
    root.HoneybeeServerApi.OpaqueMaterialSchema = factory(root.HoneybeeServerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OpaqueMaterialSchema model module.
   * @module model/OpaqueMaterialSchema
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>OpaqueMaterialSchema</code>.
   * @alias module:model/OpaqueMaterialSchema
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>OpaqueMaterialSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OpaqueMaterialSchema} obj Optional instance to populate.
   * @return {module:model/OpaqueMaterialSchema} The populated <code>OpaqueMaterialSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('r_reflectance')) {
        obj['r_reflectance'] = ApiClient.convertToType(data['r_reflectance'], 'Number');
      }
      if (data.hasOwnProperty('g_reflectance')) {
        obj['g_reflectance'] = ApiClient.convertToType(data['g_reflectance'], 'Number');
      }
      if (data.hasOwnProperty('b_reflectance')) {
        obj['b_reflectance'] = ApiClient.convertToType(data['b_reflectance'], 'Number');
      }
      if (data.hasOwnProperty('refraction')) {
        obj['refraction'] = ApiClient.convertToType(data['refraction'], 'Number');
      }
      if (data.hasOwnProperty('specularity')) {
        obj['specularity'] = ApiClient.convertToType(data['specularity'], 'Number');
      }
      if (data.hasOwnProperty('roughness')) {
        obj['roughness'] = ApiClient.convertToType(data['roughness'], 'Number');
      }
      if (data.hasOwnProperty('modifier')) {
        obj['modifier'] = ApiClient.convertToType(data['modifier'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the material
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Material type
   * @member {module:model/OpaqueMaterialSchema.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Reflectance for red
   * @member {Number} r_reflectance
   */
  exports.prototype['r_reflectance'] = undefined;
  /**
   * Reflectance for green
   * @member {Number} g_reflectance
   */
  exports.prototype['g_reflectance'] = undefined;
  /**
   * Reflectance for blue
   * @member {Number} b_reflectance
   */
  exports.prototype['b_reflectance'] = undefined;
  /**
   * Index of refraction
   * @member {Number} refraction
   */
  exports.prototype['refraction'] = undefined;
  /**
   * Material specularity
   * @member {Number} specularity
   */
  exports.prototype['specularity'] = undefined;
  /**
   * Material roughness
   * @member {Number} roughness
   */
  exports.prototype['roughness'] = undefined;
  /**
   * @member {String} modifier
   * @default 'void'
   */
  exports.prototype['modifier'] = 'void';


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "metal"
     * @const
     */
    "metal": "metal",
    /**
     * value: "plastic"
     * @const
     */
    "plastic": "plastic"  };


  return exports;
}));

