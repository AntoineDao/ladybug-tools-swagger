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
    define(['ApiClient', 'model/InlineResponse2007Results'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2007Results'));
  } else {
    // Browser globals (root is window)
    if (!root.HoneybeeServerApi) {
      root.HoneybeeServerApi = {};
    }
    root.HoneybeeServerApi.InlineResponse2007 = factory(root.HoneybeeServerApi.ApiClient, root.HoneybeeServerApi.InlineResponse2007Results);
  }
}(this, function(ApiClient, InlineResponse2007Results) {
  'use strict';




  /**
   * The InlineResponse2007 model module.
   * @module model/InlineResponse2007
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2007</code>.
   * @alias module:model/InlineResponse2007
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [InlineResponse2007Results]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InlineResponse2007Results>} results
   */
  exports.prototype['results'] = undefined;



  return exports;
}));


