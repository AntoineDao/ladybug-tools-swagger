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
    define(['ApiClient', 'model/AnalysisGridSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalysisGridSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.HoneybeeServerApi) {
      root.HoneybeeServerApi = {};
    }
    root.HoneybeeServerApi.InlineResponse200Results = factory(root.HoneybeeServerApi.ApiClient, root.HoneybeeServerApi.AnalysisGridSchema);
  }
}(this, function(ApiClient, AnalysisGridSchema) {
  'use strict';




  /**
   * The InlineResponse200Results model module.
   * @module model/InlineResponse200Results
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>InlineResponse200Results</code>.
   * @alias module:model/InlineResponse200Results
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse200Results</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200Results} obj Optional instance to populate.
   * @return {module:model/InlineResponse200Results} The populated <code>InlineResponse200Results</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('analysis_grid')) {
        obj['analysis_grid'] = AnalysisGridSchema.constructFromObject(data['analysis_grid']);
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {module:model/AnalysisGridSchema} analysis_grid
   */
  exports.prototype['analysis_grid'] = undefined;



  return exports;
}));

