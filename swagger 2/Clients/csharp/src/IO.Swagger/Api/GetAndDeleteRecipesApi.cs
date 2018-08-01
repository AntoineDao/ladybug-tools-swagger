/* 
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * OpenAPI spec version: 0.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using RestSharp;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace IO.Swagger.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IGetAndDeleteRecipesApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Get a list of daylight recipe objects
        /// </summary>
        /// <remarks>
        /// Retrieves a list of daylight recipe objects for a given filter.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="size">Number of files returned (optional)</param>
        /// <param name="country">Country where definitions should be from (optional)</param>
        /// <returns>InlineResponse200</returns>
        InlineResponse200 RecipeGet (int? size = null, string country = null);

        /// <summary>
        /// Get a list of daylight recipe objects
        /// </summary>
        /// <remarks>
        /// Retrieves a list of daylight recipe objects for a given filter.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="size">Number of files returned (optional)</param>
        /// <param name="country">Country where definitions should be from (optional)</param>
        /// <returns>ApiResponse of InlineResponse200</returns>
        ApiResponse<InlineResponse200> RecipeGetWithHttpInfo (int? size = null, string country = null);
        /// <summary>
        /// Delete an existing recipe object
        /// </summary>
        /// <remarks>
        /// Delete an recipe object in the database specifying the uuid of the file
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the recipe.</param>
        /// <returns></returns>
        void RecipeUuidDelete (string uuid);

        /// <summary>
        /// Delete an existing recipe object
        /// </summary>
        /// <remarks>
        /// Delete an recipe object in the database specifying the uuid of the file
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the recipe.</param>
        /// <returns>ApiResponse of Object(void)</returns>
        ApiResponse<Object> RecipeUuidDeleteWithHttpInfo (string uuid);
        /// <summary>
        /// Get a specific analysis_grid file
        /// </summary>
        /// <remarks>
        /// Returns a single analysis_grid file
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the analysis_grid.</param>
        /// <returns>GridBasedRecipeSchema</returns>
        GridBasedRecipeSchema RecipeUuidGet (string uuid);

        /// <summary>
        /// Get a specific analysis_grid file
        /// </summary>
        /// <remarks>
        /// Returns a single analysis_grid file
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the analysis_grid.</param>
        /// <returns>ApiResponse of GridBasedRecipeSchema</returns>
        ApiResponse<GridBasedRecipeSchema> RecipeUuidGetWithHttpInfo (string uuid);
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// Get a list of daylight recipe objects
        /// </summary>
        /// <remarks>
        /// Retrieves a list of daylight recipe objects for a given filter.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="size">Number of files returned (optional)</param>
        /// <param name="country">Country where definitions should be from (optional)</param>
        /// <returns>Task of InlineResponse200</returns>
        System.Threading.Tasks.Task<InlineResponse200> RecipeGetAsync (int? size = null, string country = null);

        /// <summary>
        /// Get a list of daylight recipe objects
        /// </summary>
        /// <remarks>
        /// Retrieves a list of daylight recipe objects for a given filter.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="size">Number of files returned (optional)</param>
        /// <param name="country">Country where definitions should be from (optional)</param>
        /// <returns>Task of ApiResponse (InlineResponse200)</returns>
        System.Threading.Tasks.Task<ApiResponse<InlineResponse200>> RecipeGetAsyncWithHttpInfo (int? size = null, string country = null);
        /// <summary>
        /// Delete an existing recipe object
        /// </summary>
        /// <remarks>
        /// Delete an recipe object in the database specifying the uuid of the file
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the recipe.</param>
        /// <returns>Task of void</returns>
        System.Threading.Tasks.Task RecipeUuidDeleteAsync (string uuid);

        /// <summary>
        /// Delete an existing recipe object
        /// </summary>
        /// <remarks>
        /// Delete an recipe object in the database specifying the uuid of the file
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the recipe.</param>
        /// <returns>Task of ApiResponse</returns>
        System.Threading.Tasks.Task<ApiResponse<Object>> RecipeUuidDeleteAsyncWithHttpInfo (string uuid);
        /// <summary>
        /// Get a specific analysis_grid file
        /// </summary>
        /// <remarks>
        /// Returns a single analysis_grid file
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the analysis_grid.</param>
        /// <returns>Task of GridBasedRecipeSchema</returns>
        System.Threading.Tasks.Task<GridBasedRecipeSchema> RecipeUuidGetAsync (string uuid);

        /// <summary>
        /// Get a specific analysis_grid file
        /// </summary>
        /// <remarks>
        /// Returns a single analysis_grid file
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the analysis_grid.</param>
        /// <returns>Task of ApiResponse (GridBasedRecipeSchema)</returns>
        System.Threading.Tasks.Task<ApiResponse<GridBasedRecipeSchema>> RecipeUuidGetAsyncWithHttpInfo (string uuid);
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class GetAndDeleteRecipesApi : IGetAndDeleteRecipesApi
    {
        private IO.Swagger.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="GetAndDeleteRecipesApi"/> class.
        /// </summary>
        /// <returns></returns>
        public GetAndDeleteRecipesApi(String basePath)
        {
            this.Configuration = new Configuration { BasePath = basePath };

            ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="GetAndDeleteRecipesApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public GetAndDeleteRecipesApi(Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = Configuration.Default;
            else
                this.Configuration = configuration;

            ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.ApiClient.RestClient.BaseUrl.ToString();
        }

        /// <summary>
        /// Sets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        [Obsolete("SetBasePath is deprecated, please do 'Configuration.ApiClient = new ApiClient(\"http://new-path\")' instead.")]
        public void SetBasePath(String basePath)
        {
            // do nothing
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public Configuration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public IO.Swagger.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Gets the default header.
        /// </summary>
        /// <returns>Dictionary of HTTP header</returns>
        [Obsolete("DefaultHeader is deprecated, please use Configuration.DefaultHeader instead.")]
        public IDictionary<String, String> DefaultHeader()
        {
            return new ReadOnlyDictionary<string, string>(this.Configuration.DefaultHeader);
        }

        /// <summary>
        /// Add default header.
        /// </summary>
        /// <param name="key">Header field name.</param>
        /// <param name="value">Header field value.</param>
        /// <returns></returns>
        [Obsolete("AddDefaultHeader is deprecated, please use Configuration.AddDefaultHeader instead.")]
        public void AddDefaultHeader(string key, string value)
        {
            this.Configuration.AddDefaultHeader(key, value);
        }

        /// <summary>
        /// Get a list of daylight recipe objects Retrieves a list of daylight recipe objects for a given filter.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="size">Number of files returned (optional)</param>
        /// <param name="country">Country where definitions should be from (optional)</param>
        /// <returns>InlineResponse200</returns>
        public InlineResponse200 RecipeGet (int? size = null, string country = null)
        {
             ApiResponse<InlineResponse200> localVarResponse = RecipeGetWithHttpInfo(size, country);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Get a list of daylight recipe objects Retrieves a list of daylight recipe objects for a given filter.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="size">Number of files returned (optional)</param>
        /// <param name="country">Country where definitions should be from (optional)</param>
        /// <returns>ApiResponse of InlineResponse200</returns>
        public ApiResponse< InlineResponse200 > RecipeGetWithHttpInfo (int? size = null, string country = null)
        {

            var localVarPath = "/recipe/";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
            };
            String localVarHttpHeaderAccept = Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (size != null) localVarQueryParams.AddRange(Configuration.ApiClient.ParameterToKeyValuePairs("", "size", size)); // query parameter
            if (country != null) localVarQueryParams.AddRange(Configuration.ApiClient.ParameterToKeyValuePairs("", "country", country)); // query parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) Configuration.ApiClient.CallApi(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("RecipeGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<InlineResponse200>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (InlineResponse200) Configuration.ApiClient.Deserialize(localVarResponse, typeof(InlineResponse200)));
        }

        /// <summary>
        /// Get a list of daylight recipe objects Retrieves a list of daylight recipe objects for a given filter.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="size">Number of files returned (optional)</param>
        /// <param name="country">Country where definitions should be from (optional)</param>
        /// <returns>Task of InlineResponse200</returns>
        public async System.Threading.Tasks.Task<InlineResponse200> RecipeGetAsync (int? size = null, string country = null)
        {
             ApiResponse<InlineResponse200> localVarResponse = await RecipeGetAsyncWithHttpInfo(size, country);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Get a list of daylight recipe objects Retrieves a list of daylight recipe objects for a given filter.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="size">Number of files returned (optional)</param>
        /// <param name="country">Country where definitions should be from (optional)</param>
        /// <returns>Task of ApiResponse (InlineResponse200)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<InlineResponse200>> RecipeGetAsyncWithHttpInfo (int? size = null, string country = null)
        {

            var localVarPath = "/recipe/";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
            };
            String localVarHttpHeaderAccept = Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (size != null) localVarQueryParams.AddRange(Configuration.ApiClient.ParameterToKeyValuePairs("", "size", size)); // query parameter
            if (country != null) localVarQueryParams.AddRange(Configuration.ApiClient.ParameterToKeyValuePairs("", "country", country)); // query parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("RecipeGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<InlineResponse200>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (InlineResponse200) Configuration.ApiClient.Deserialize(localVarResponse, typeof(InlineResponse200)));
        }

        /// <summary>
        /// Delete an existing recipe object Delete an recipe object in the database specifying the uuid of the file
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the recipe.</param>
        /// <returns></returns>
        public void RecipeUuidDelete (string uuid)
        {
             RecipeUuidDeleteWithHttpInfo(uuid);
        }

        /// <summary>
        /// Delete an existing recipe object Delete an recipe object in the database specifying the uuid of the file
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the recipe.</param>
        /// <returns>ApiResponse of Object(void)</returns>
        public ApiResponse<Object> RecipeUuidDeleteWithHttpInfo (string uuid)
        {
            // verify the required parameter 'uuid' is set
            if (uuid == null)
                throw new ApiException(400, "Missing required parameter 'uuid' when calling GetAndDeleteRecipesApi->RecipeUuidDelete");

            var localVarPath = "/recipe/{uuid}";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
            };
            String localVarHttpHeaderAccept = Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (uuid != null) localVarPathParams.Add("uuid", Configuration.ApiClient.ParameterToString(uuid)); // path parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) Configuration.ApiClient.CallApi(localVarPath,
                Method.DELETE, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("RecipeUuidDelete", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Object>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                null);
        }

        /// <summary>
        /// Delete an existing recipe object Delete an recipe object in the database specifying the uuid of the file
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the recipe.</param>
        /// <returns>Task of void</returns>
        public async System.Threading.Tasks.Task RecipeUuidDeleteAsync (string uuid)
        {
             await RecipeUuidDeleteAsyncWithHttpInfo(uuid);

        }

        /// <summary>
        /// Delete an existing recipe object Delete an recipe object in the database specifying the uuid of the file
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the recipe.</param>
        /// <returns>Task of ApiResponse</returns>
        public async System.Threading.Tasks.Task<ApiResponse<Object>> RecipeUuidDeleteAsyncWithHttpInfo (string uuid)
        {
            // verify the required parameter 'uuid' is set
            if (uuid == null)
                throw new ApiException(400, "Missing required parameter 'uuid' when calling GetAndDeleteRecipesApi->RecipeUuidDelete");

            var localVarPath = "/recipe/{uuid}";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
            };
            String localVarHttpHeaderAccept = Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (uuid != null) localVarPathParams.Add("uuid", Configuration.ApiClient.ParameterToString(uuid)); // path parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.DELETE, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("RecipeUuidDelete", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Object>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                null);
        }

        /// <summary>
        /// Get a specific analysis_grid file Returns a single analysis_grid file
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the analysis_grid.</param>
        /// <returns>GridBasedRecipeSchema</returns>
        public GridBasedRecipeSchema RecipeUuidGet (string uuid)
        {
             ApiResponse<GridBasedRecipeSchema> localVarResponse = RecipeUuidGetWithHttpInfo(uuid);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Get a specific analysis_grid file Returns a single analysis_grid file
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the analysis_grid.</param>
        /// <returns>ApiResponse of GridBasedRecipeSchema</returns>
        public ApiResponse< GridBasedRecipeSchema > RecipeUuidGetWithHttpInfo (string uuid)
        {
            // verify the required parameter 'uuid' is set
            if (uuid == null)
                throw new ApiException(400, "Missing required parameter 'uuid' when calling GetAndDeleteRecipesApi->RecipeUuidGet");

            var localVarPath = "/recipe/{uuid}";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
            };
            String localVarHttpHeaderAccept = Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (uuid != null) localVarPathParams.Add("uuid", Configuration.ApiClient.ParameterToString(uuid)); // path parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) Configuration.ApiClient.CallApi(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("RecipeUuidGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<GridBasedRecipeSchema>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (GridBasedRecipeSchema) Configuration.ApiClient.Deserialize(localVarResponse, typeof(GridBasedRecipeSchema)));
        }

        /// <summary>
        /// Get a specific analysis_grid file Returns a single analysis_grid file
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the analysis_grid.</param>
        /// <returns>Task of GridBasedRecipeSchema</returns>
        public async System.Threading.Tasks.Task<GridBasedRecipeSchema> RecipeUuidGetAsync (string uuid)
        {
             ApiResponse<GridBasedRecipeSchema> localVarResponse = await RecipeUuidGetAsyncWithHttpInfo(uuid);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Get a specific analysis_grid file Returns a single analysis_grid file
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the analysis_grid.</param>
        /// <returns>Task of ApiResponse (GridBasedRecipeSchema)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<GridBasedRecipeSchema>> RecipeUuidGetAsyncWithHttpInfo (string uuid)
        {
            // verify the required parameter 'uuid' is set
            if (uuid == null)
                throw new ApiException(400, "Missing required parameter 'uuid' when calling GetAndDeleteRecipesApi->RecipeUuidGet");

            var localVarPath = "/recipe/{uuid}";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
            };
            String localVarHttpHeaderAccept = Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (uuid != null) localVarPathParams.Add("uuid", Configuration.ApiClient.ParameterToString(uuid)); // path parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("RecipeUuidGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<GridBasedRecipeSchema>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (GridBasedRecipeSchema) Configuration.ApiClient.Deserialize(localVarResponse, typeof(GridBasedRecipeSchema)));
        }

    }
}
