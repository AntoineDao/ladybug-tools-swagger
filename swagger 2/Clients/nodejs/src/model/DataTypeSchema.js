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
    root.HoneybeeServerApi.DataTypeSchema = factory(root.HoneybeeServerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DataTypeSchema model module.
   * @module model/DataTypeSchema
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>DataTypeSchema</code>.
   * @alias module:model/DataTypeSchema
   * @class
   * @param standard {module:model/DataTypeSchema.StandardEnum} 
   * @param nickname {String} 
   */
  var exports = function(standard, nickname) {
    var _this = this;

    _this['standard'] = standard;
    _this['nickname'] = nickname;
  };

  /**
   * Constructs a <code>DataTypeSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataTypeSchema} obj Optional instance to populate.
   * @return {module:model/DataTypeSchema} The populated <code>DataTypeSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('standard')) {
        obj['standard'] = ApiClient.convertToType(data['standard'], 'String');
      }
      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DataTypeSchema.StandardEnum} standard
   */
  exports.prototype['standard'] = undefined;
  /**
   * @member {String} nickname
   * @default 'null'
   */
  exports.prototype['nickname'] = 'null';


  /**
   * Allowed values for the <code>standard</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StandardEnum = {
    /**
     * value: "SI"
     * @const
     */
    "SI": "SI",
    /**
     * value: "IP"
     * @const
     */
    "IP": "IP"  };


  return exports;
}));

