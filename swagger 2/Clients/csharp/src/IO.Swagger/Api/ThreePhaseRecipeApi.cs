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
    public interface IThreePhaseRecipeApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Create a new three_phase object
        /// </summary>
        /// <remarks>
        /// Adds a new three_phase object to the list
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>InlineResponse204</returns>
        InlineResponse204 RecipeThreePhaseGridbasedPost (ThreePhaselGridBasedSchema recipe);

        /// <summary>
        /// Create a new three_phase object
        /// </summary>
        /// <remarks>
        /// Adds a new three_phase object to the list
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>ApiResponse of InlineResponse204</returns>
        ApiResponse<InlineResponse204> RecipeThreePhaseGridbasedPostWithHttpInfo (ThreePhaselGridBasedSchema recipe);
        /// <summary>
        /// Modify an existing three_phase object
        /// </summary>
        /// <remarks>
        /// Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the three_phase recipe.</param>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns></returns>
        void RecipeThreePhaseGridbasedUuidPut (string uuid, ThreePhaselGridBasedSchema recipe);

        /// <summary>
        /// Modify an existing three_phase object
        /// </summary>
        /// <remarks>
        /// Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the three_phase recipe.</param>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>ApiResponse of Object(void)</returns>
        ApiResponse<Object> RecipeThreePhaseGridbasedUuidPutWithHttpInfo (string uuid, ThreePhaselGridBasedSchema recipe);
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// Create a new three_phase object
        /// </summary>
        /// <remarks>
        /// Adds a new three_phase object to the list
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>Task of InlineResponse204</returns>
        System.Threading.Tasks.Task<InlineResponse204> RecipeThreePhaseGridbasedPostAsync (ThreePhaselGridBasedSchema recipe);

        /// <summary>
        /// Create a new three_phase object
        /// </summary>
        /// <remarks>
        /// Adds a new three_phase object to the list
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>Task of ApiResponse (InlineResponse204)</returns>
        System.Threading.Tasks.Task<ApiResponse<InlineResponse204>> RecipeThreePhaseGridbasedPostAsyncWithHttpInfo (ThreePhaselGridBasedSchema recipe);
        /// <summary>
        /// Modify an existing three_phase object
        /// </summary>
        /// <remarks>
        /// Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the three_phase recipe.</param>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>Task of void</returns>
        System.Threading.Tasks.Task RecipeThreePhaseGridbasedUuidPutAsync (string uuid, ThreePhaselGridBasedSchema recipe);

        /// <summary>
        /// Modify an existing three_phase object
        /// </summary>
        /// <remarks>
        /// Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the three_phase recipe.</param>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>Task of ApiResponse</returns>
        System.Threading.Tasks.Task<ApiResponse<Object>> RecipeThreePhaseGridbasedUuidPutAsyncWithHttpInfo (string uuid, ThreePhaselGridBasedSchema recipe);
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class ThreePhaseRecipeApi : IThreePhaseRecipeApi
    {
        private IO.Swagger.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="ThreePhaseRecipeApi"/> class.
        /// </summary>
        /// <returns></returns>
        public ThreePhaseRecipeApi(String basePath)
        {
            this.Configuration = new Configuration { BasePath = basePath };

            ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ThreePhaseRecipeApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public ThreePhaseRecipeApi(Configuration configuration = null)
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
        /// Create a new three_phase object Adds a new three_phase object to the list
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>InlineResponse204</returns>
        public InlineResponse204 RecipeThreePhaseGridbasedPost (ThreePhaselGridBasedSchema recipe)
        {
             ApiResponse<InlineResponse204> localVarResponse = RecipeThreePhaseGridbasedPostWithHttpInfo(recipe);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Create a new three_phase object Adds a new three_phase object to the list
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>ApiResponse of InlineResponse204</returns>
        public ApiResponse< InlineResponse204 > RecipeThreePhaseGridbasedPostWithHttpInfo (ThreePhaselGridBasedSchema recipe)
        {
            // verify the required parameter 'recipe' is set
            if (recipe == null)
                throw new ApiException(400, "Missing required parameter 'recipe' when calling ThreePhaseRecipeApi->RecipeThreePhaseGridbasedPost");

            var localVarPath = "/recipe/three_phase/gridbased";
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

            if (recipe != null && recipe.GetType() != typeof(byte[]))
            {
                localVarPostBody = Configuration.ApiClient.Serialize(recipe); // http body (model) parameter
            }
            else
            {
                localVarPostBody = recipe; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("RecipeThreePhaseGridbasedPost", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<InlineResponse204>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (InlineResponse204) Configuration.ApiClient.Deserialize(localVarResponse, typeof(InlineResponse204)));
        }

        /// <summary>
        /// Create a new three_phase object Adds a new three_phase object to the list
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>Task of InlineResponse204</returns>
        public async System.Threading.Tasks.Task<InlineResponse204> RecipeThreePhaseGridbasedPostAsync (ThreePhaselGridBasedSchema recipe)
        {
             ApiResponse<InlineResponse204> localVarResponse = await RecipeThreePhaseGridbasedPostAsyncWithHttpInfo(recipe);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Create a new three_phase object Adds a new three_phase object to the list
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>Task of ApiResponse (InlineResponse204)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<InlineResponse204>> RecipeThreePhaseGridbasedPostAsyncWithHttpInfo (ThreePhaselGridBasedSchema recipe)
        {
            // verify the required parameter 'recipe' is set
            if (recipe == null)
                throw new ApiException(400, "Missing required parameter 'recipe' when calling ThreePhaseRecipeApi->RecipeThreePhaseGridbasedPost");

            var localVarPath = "/recipe/three_phase/gridbased";
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

            if (recipe != null && recipe.GetType() != typeof(byte[]))
            {
                localVarPostBody = Configuration.ApiClient.Serialize(recipe); // http body (model) parameter
            }
            else
            {
                localVarPostBody = recipe; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("RecipeThreePhaseGridbasedPost", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<InlineResponse204>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (InlineResponse204) Configuration.ApiClient.Deserialize(localVarResponse, typeof(InlineResponse204)));
        }

        /// <summary>
        /// Modify an existing three_phase object Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the three_phase recipe.</param>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns></returns>
        public void RecipeThreePhaseGridbasedUuidPut (string uuid, ThreePhaselGridBasedSchema recipe)
        {
             RecipeThreePhaseGridbasedUuidPutWithHttpInfo(uuid, recipe);
        }

        /// <summary>
        /// Modify an existing three_phase object Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the three_phase recipe.</param>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>ApiResponse of Object(void)</returns>
        public ApiResponse<Object> RecipeThreePhaseGridbasedUuidPutWithHttpInfo (string uuid, ThreePhaselGridBasedSchema recipe)
        {
            // verify the required parameter 'uuid' is set
            if (uuid == null)
                throw new ApiException(400, "Missing required parameter 'uuid' when calling ThreePhaseRecipeApi->RecipeThreePhaseGridbasedUuidPut");
            // verify the required parameter 'recipe' is set
            if (recipe == null)
                throw new ApiException(400, "Missing required parameter 'recipe' when calling ThreePhaseRecipeApi->RecipeThreePhaseGridbasedUuidPut");

            var localVarPath = "/recipe/three_phase/gridbased/{uuid}";
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
            if (recipe != null && recipe.GetType() != typeof(byte[]))
            {
                localVarPostBody = Configuration.ApiClient.Serialize(recipe); // http body (model) parameter
            }
            else
            {
                localVarPostBody = recipe; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) Configuration.ApiClient.CallApi(localVarPath,
                Method.PUT, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("RecipeThreePhaseGridbasedUuidPut", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Object>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                null);
        }

        /// <summary>
        /// Modify an existing three_phase object Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the three_phase recipe.</param>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>Task of void</returns>
        public async System.Threading.Tasks.Task RecipeThreePhaseGridbasedUuidPutAsync (string uuid, ThreePhaselGridBasedSchema recipe)
        {
             await RecipeThreePhaseGridbasedUuidPutAsyncWithHttpInfo(uuid, recipe);

        }

        /// <summary>
        /// Modify an existing three_phase object Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the three_phase recipe.</param>
        /// <param name="recipe">A three_phase JSON objectr with a uuid key.</param>
        /// <returns>Task of ApiResponse</returns>
        public async System.Threading.Tasks.Task<ApiResponse<Object>> RecipeThreePhaseGridbasedUuidPutAsyncWithHttpInfo (string uuid, ThreePhaselGridBasedSchema recipe)
        {
            // verify the required parameter 'uuid' is set
            if (uuid == null)
                throw new ApiException(400, "Missing required parameter 'uuid' when calling ThreePhaseRecipeApi->RecipeThreePhaseGridbasedUuidPut");
            // verify the required parameter 'recipe' is set
            if (recipe == null)
                throw new ApiException(400, "Missing required parameter 'recipe' when calling ThreePhaseRecipeApi->RecipeThreePhaseGridbasedUuidPut");

            var localVarPath = "/recipe/three_phase/gridbased/{uuid}";
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
            if (recipe != null && recipe.GetType() != typeof(byte[]))
            {
                localVarPostBody = Configuration.ApiClient.Serialize(recipe); // http body (model) parameter
            }
            else
            {
                localVarPostBody = recipe; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.PUT, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("RecipeThreePhaseGridbasedUuidPut", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Object>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                null);
        }

    }
}