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
    define(['ApiClient', 'model/StateSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StateSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.HoneybeeServerApi) {
      root.HoneybeeServerApi = {};
    }
    root.HoneybeeServerApi.SourceSchema = factory(root.HoneybeeServerApi.ApiClient, root.HoneybeeServerApi.StateSchema);
  }
}(this, function(ApiClient, StateSchema) {
  'use strict';




  /**
   * The SourceSchema model module.
   * @module model/SourceSchema
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>SourceSchema</code>.
   * @alias module:model/SourceSchema
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SourceSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SourceSchema} obj Optional instance to populate.
   * @return {module:model/SourceSchema} The populated <code>SourceSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('source_id')) {
        obj['source_id'] = ApiClient.convertToType(data['source_id'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], [StateSchema]);
      }
    }
    return obj;
  }

  /**
   * The id of a source of light
   * @member {String} source_id
   */
  exports.prototype['source_id'] = undefined;
  /**
   * @member {Array.<module:model/StateSchema>} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));

