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
    root.HoneybeeServerApi.GridBasedRecipeSchema = factory(root.HoneybeeServerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GridBasedRecipeSchema model module.
   * @module model/GridBasedRecipeSchema
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>GridBasedRecipeSchema</code>.
   * @alias module:model/GridBasedRecipeSchema
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GridBasedRecipeSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GridBasedRecipeSchema} obj Optional instance to populate.
   * @return {module:model/GridBasedRecipeSchema} The populated <code>GridBasedRecipeSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique identifier of the recipe
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;



  return exports;
}));

