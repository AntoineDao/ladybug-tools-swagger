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
    define(['ApiClient', 'model/DirectReflectionGridBasedSchema', 'model/InlineResponse204', 'model/InlineResponse400'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DirectReflectionGridBasedSchema'), require('../model/InlineResponse204'), require('../model/InlineResponse400'));
  } else {
    // Browser globals (root is window)
    if (!root.HoneybeeServerApi) {
      root.HoneybeeServerApi = {};
    }
    root.HoneybeeServerApi.DirectReflectionRecipeApi = factory(root.HoneybeeServerApi.ApiClient, root.HoneybeeServerApi.DirectReflectionGridBasedSchema, root.HoneybeeServerApi.InlineResponse204, root.HoneybeeServerApi.InlineResponse400);
  }
}(this, function(ApiClient, DirectReflectionGridBasedSchema, InlineResponse204, InlineResponse400) {
  'use strict';

  /**
   * DirectReflectionRecipe service.
   * @module api/DirectReflectionRecipeApi
   * @version 0.0.0
   */

  /**
   * Constructs a new DirectReflectionRecipeApi. 
   * @alias module:api/DirectReflectionRecipeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the recipeDirectReflectionGridbasedPost operation.
     * @callback module:api/DirectReflectionRecipeApi~recipeDirectReflectionGridbasedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse204} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new direct_reflection object
     * Adds a new direct_reflection object to the list
     * @param {module:model/DirectReflectionGridBasedSchema} recipe A direct_reflection JSON objectr with a uuid key.
     * @param {module:api/DirectReflectionRecipeApi~recipeDirectReflectionGridbasedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse204}
     */
    this.recipeDirectReflectionGridbasedPost = function(recipe, callback) {
      var postBody = recipe;

      // verify the required parameter 'recipe' is set
      if (recipe === undefined || recipe === null) {
        throw new Error("Missing the required parameter 'recipe' when calling recipeDirectReflectionGridbasedPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = InlineResponse204;

      return this.apiClient.callApi(
        '/recipe/direct_reflection/gridbased', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recipeDirectReflectionGridbasedUuidPut operation.
     * @callback module:api/DirectReflectionRecipeApi~recipeDirectReflectionGridbasedUuidPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify an existing direct_reflection object
     * Modifies any parameter (except uuid) of a direct_reflection recipe object by completely replacing the definition object. A finer grain method can be set up later.
     * @param {String} uuid The unique identifier of the direct_reflection recipe.
     * @param {module:model/DirectReflectionGridBasedSchema} recipe A analysis_grid JSON objectr with a uuid key.
     * @param {module:api/DirectReflectionRecipeApi~recipeDirectReflectionGridbasedUuidPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.recipeDirectReflectionGridbasedUuidPut = function(uuid, recipe, callback) {
      var postBody = recipe;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling recipeDirectReflectionGridbasedUuidPut");
      }

      // verify the required parameter 'recipe' is set
      if (recipe === undefined || recipe === null) {
        throw new Error("Missing the required parameter 'recipe' when calling recipeDirectReflectionGridbasedUuidPut");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/recipe/direct_reflection/gridbased/{uuid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));