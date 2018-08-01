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
    public interface IBSDFMaterialApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Create a new bsdf material object
        /// </summary>
        /// <remarks>
        /// Adds a new bsdf material object to the database
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>InlineResponse204</returns>
        InlineResponse204 MaterialBsdfPost (BSDFMaterialSchema bsdfMaterial);

        /// <summary>
        /// Create a new bsdf material object
        /// </summary>
        /// <remarks>
        /// Adds a new bsdf material object to the database
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>ApiResponse of InlineResponse204</returns>
        ApiResponse<InlineResponse204> MaterialBsdfPostWithHttpInfo (BSDFMaterialSchema bsdfMaterial);
        /// <summary>
        /// Modify an existing bsdf material file
        /// </summary>
        /// <remarks>
        /// Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the material.</param>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns></returns>
        void MaterialBsdfUuidPut (string uuid, BSDFMaterialSchema bsdfMaterial);

        /// <summary>
        /// Modify an existing bsdf material file
        /// </summary>
        /// <remarks>
        /// Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the material.</param>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>ApiResponse of Object(void)</returns>
        ApiResponse<Object> MaterialBsdfUuidPutWithHttpInfo (string uuid, BSDFMaterialSchema bsdfMaterial);
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// Create a new bsdf material object
        /// </summary>
        /// <remarks>
        /// Adds a new bsdf material object to the database
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>Task of InlineResponse204</returns>
        System.Threading.Tasks.Task<InlineResponse204> MaterialBsdfPostAsync (BSDFMaterialSchema bsdfMaterial);

        /// <summary>
        /// Create a new bsdf material object
        /// </summary>
        /// <remarks>
        /// Adds a new bsdf material object to the database
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>Task of ApiResponse (InlineResponse204)</returns>
        System.Threading.Tasks.Task<ApiResponse<InlineResponse204>> MaterialBsdfPostAsyncWithHttpInfo (BSDFMaterialSchema bsdfMaterial);
        /// <summary>
        /// Modify an existing bsdf material file
        /// </summary>
        /// <remarks>
        /// Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the material.</param>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>Task of void</returns>
        System.Threading.Tasks.Task MaterialBsdfUuidPutAsync (string uuid, BSDFMaterialSchema bsdfMaterial);

        /// <summary>
        /// Modify an existing bsdf material file
        /// </summary>
        /// <remarks>
        /// Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the material.</param>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>Task of ApiResponse</returns>
        System.Threading.Tasks.Task<ApiResponse<Object>> MaterialBsdfUuidPutAsyncWithHttpInfo (string uuid, BSDFMaterialSchema bsdfMaterial);
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class BSDFMaterialApi : IBSDFMaterialApi
    {
        private IO.Swagger.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="BSDFMaterialApi"/> class.
        /// </summary>
        /// <returns></returns>
        public BSDFMaterialApi(String basePath)
        {
            this.Configuration = new Configuration { BasePath = basePath };

            ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="BSDFMaterialApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public BSDFMaterialApi(Configuration configuration = null)
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
        /// Create a new bsdf material object Adds a new bsdf material object to the database
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>InlineResponse204</returns>
        public InlineResponse204 MaterialBsdfPost (BSDFMaterialSchema bsdfMaterial)
        {
             ApiResponse<InlineResponse204> localVarResponse = MaterialBsdfPostWithHttpInfo(bsdfMaterial);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Create a new bsdf material object Adds a new bsdf material object to the database
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>ApiResponse of InlineResponse204</returns>
        public ApiResponse< InlineResponse204 > MaterialBsdfPostWithHttpInfo (BSDFMaterialSchema bsdfMaterial)
        {
            // verify the required parameter 'bsdfMaterial' is set
            if (bsdfMaterial == null)
                throw new ApiException(400, "Missing required parameter 'bsdfMaterial' when calling BSDFMaterialApi->MaterialBsdfPost");

            var localVarPath = "/material/bsdf";
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

            if (bsdfMaterial != null && bsdfMaterial.GetType() != typeof(byte[]))
            {
                localVarPostBody = Configuration.ApiClient.Serialize(bsdfMaterial); // http body (model) parameter
            }
            else
            {
                localVarPostBody = bsdfMaterial; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("MaterialBsdfPost", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<InlineResponse204>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (InlineResponse204) Configuration.ApiClient.Deserialize(localVarResponse, typeof(InlineResponse204)));
        }

        /// <summary>
        /// Create a new bsdf material object Adds a new bsdf material object to the database
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>Task of InlineResponse204</returns>
        public async System.Threading.Tasks.Task<InlineResponse204> MaterialBsdfPostAsync (BSDFMaterialSchema bsdfMaterial)
        {
             ApiResponse<InlineResponse204> localVarResponse = await MaterialBsdfPostAsyncWithHttpInfo(bsdfMaterial);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Create a new bsdf material object Adds a new bsdf material object to the database
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>Task of ApiResponse (InlineResponse204)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<InlineResponse204>> MaterialBsdfPostAsyncWithHttpInfo (BSDFMaterialSchema bsdfMaterial)
        {
            // verify the required parameter 'bsdfMaterial' is set
            if (bsdfMaterial == null)
                throw new ApiException(400, "Missing required parameter 'bsdfMaterial' when calling BSDFMaterialApi->MaterialBsdfPost");

            var localVarPath = "/material/bsdf";
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

            if (bsdfMaterial != null && bsdfMaterial.GetType() != typeof(byte[]))
            {
                localVarPostBody = Configuration.ApiClient.Serialize(bsdfMaterial); // http body (model) parameter
            }
            else
            {
                localVarPostBody = bsdfMaterial; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("MaterialBsdfPost", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<InlineResponse204>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (InlineResponse204) Configuration.ApiClient.Deserialize(localVarResponse, typeof(InlineResponse204)));
        }

        /// <summary>
        /// Modify an existing bsdf material file Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the material.</param>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns></returns>
        public void MaterialBsdfUuidPut (string uuid, BSDFMaterialSchema bsdfMaterial)
        {
             MaterialBsdfUuidPutWithHttpInfo(uuid, bsdfMaterial);
        }

        /// <summary>
        /// Modify an existing bsdf material file Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the material.</param>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>ApiResponse of Object(void)</returns>
        public ApiResponse<Object> MaterialBsdfUuidPutWithHttpInfo (string uuid, BSDFMaterialSchema bsdfMaterial)
        {
            // verify the required parameter 'uuid' is set
            if (uuid == null)
                throw new ApiException(400, "Missing required parameter 'uuid' when calling BSDFMaterialApi->MaterialBsdfUuidPut");
            // verify the required parameter 'bsdfMaterial' is set
            if (bsdfMaterial == null)
                throw new ApiException(400, "Missing required parameter 'bsdfMaterial' when calling BSDFMaterialApi->MaterialBsdfUuidPut");

            var localVarPath = "/material/bsdf/{uuid}";
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
            if (bsdfMaterial != null && bsdfMaterial.GetType() != typeof(byte[]))
            {
                localVarPostBody = Configuration.ApiClient.Serialize(bsdfMaterial); // http body (model) parameter
            }
            else
            {
                localVarPostBody = bsdfMaterial; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) Configuration.ApiClient.CallApi(localVarPath,
                Method.PUT, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("MaterialBsdfUuidPut", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Object>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                null);
        }

        /// <summary>
        /// Modify an existing bsdf material file Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the material.</param>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>Task of void</returns>
        public async System.Threading.Tasks.Task MaterialBsdfUuidPutAsync (string uuid, BSDFMaterialSchema bsdfMaterial)
        {
             await MaterialBsdfUuidPutAsyncWithHttpInfo(uuid, bsdfMaterial);

        }

        /// <summary>
        /// Modify an existing bsdf material file Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="uuid">The unique identifier of the material.</param>
        /// <param name="bsdfMaterial">a bsdf material object</param>
        /// <returns>Task of ApiResponse</returns>
        public async System.Threading.Tasks.Task<ApiResponse<Object>> MaterialBsdfUuidPutAsyncWithHttpInfo (string uuid, BSDFMaterialSchema bsdfMaterial)
        {
            // verify the required parameter 'uuid' is set
            if (uuid == null)
                throw new ApiException(400, "Missing required parameter 'uuid' when calling BSDFMaterialApi->MaterialBsdfUuidPut");
            // verify the required parameter 'bsdfMaterial' is set
            if (bsdfMaterial == null)
                throw new ApiException(400, "Missing required parameter 'bsdfMaterial' when calling BSDFMaterialApi->MaterialBsdfUuidPut");

            var localVarPath = "/material/bsdf/{uuid}";
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
            if (bsdfMaterial != null && bsdfMaterial.GetType() != typeof(byte[]))
            {
                localVarPostBody = Configuration.ApiClient.Serialize(bsdfMaterial); // http body (model) parameter
            }
            else
            {
                localVarPostBody = bsdfMaterial; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.PUT, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("MaterialBsdfUuidPut", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Object>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                null);
        }

    }
}
