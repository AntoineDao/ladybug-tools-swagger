# \HoneybeeSurfaceApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**HbsurfaceGet**](HoneybeeSurfaceApi.md#HbsurfaceGet) | **Get** /hbsurface | Get a list of hbsurface objects
[**HbsurfacePost**](HoneybeeSurfaceApi.md#HbsurfacePost) | **Post** /hbsurface | Create a new hbsurface object
[**HbsurfaceUuidDelete**](HoneybeeSurfaceApi.md#HbsurfaceUuidDelete) | **Delete** /hbsurface/{uuid} | Delete an existing hbsurface object
[**HbsurfaceUuidGet**](HoneybeeSurfaceApi.md#HbsurfaceUuidGet) | **Get** /hbsurface/{uuid} | Get a specific hbsurface object
[**HbsurfaceUuidPut**](HoneybeeSurfaceApi.md#HbsurfaceUuidPut) | **Put** /hbsurface/{uuid} | Modify an existing hbsurface object


# **HbsurfaceGet**
> InlineResponse2007 HbsurfaceGet(ctx, optional)
Get a list of hbsurface objects

Retrieves a list of HoneyBee Surface objects for a given filter.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surfaceType** | **string**| The type of the surface to be queried | 
 **surfaceMaterial** | **string**| retrieve surfaces based on the name of their main material definiton (not materials in a given surface state) | 
 **surfaceState** | **string**| retrieve a surface using the name of a given state it contains | 

### Return type

[**InlineResponse2007**](inline_response_200_7.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **HbsurfacePost**
> InlineResponse204 HbsurfacePost(ctx, hbsurface)
Create a new hbsurface object

Adds a new hbsurface object to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **hbsurface** | [**HbSurfaceSchema**](HbSurfaceSchema.md)| A hbsurface JSON object | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **HbsurfaceUuidDelete**
> HbsurfaceUuidDelete(ctx, uuid)
Delete an existing hbsurface object

Delete an hbsurface object in the database specifying the uuid of the object

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the hbsurface. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **HbsurfaceUuidGet**
> InlineResponse2008 HbsurfaceUuidGet(ctx, uuid)
Get a specific hbsurface object

Returns a single hbsurface object

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the hbsurface. | 

### Return type

[**InlineResponse2008**](inline_response_200_8.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **HbsurfaceUuidPut**
> HbsurfaceUuidPut(ctx, uuid, hbsurface)
Modify an existing hbsurface object

Modifies any parameter (except uuid) of an hbsurface object by completely replacing the definition object. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the hbsurface. | 
  **hbsurface** | [**HbSurfaceSchema**](HbSurfaceSchema.md)| A hbsurface JSON objectr with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

