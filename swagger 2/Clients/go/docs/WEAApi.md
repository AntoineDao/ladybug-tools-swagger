# \WEAApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**WeaGet**](WEAApi.md#WeaGet) | **Get** /wea | Get a list of WEA objects
[**WeaPost**](WEAApi.md#WeaPost) | **Post** /wea | Create a new wea object
[**WeaUuidDelete**](WEAApi.md#WeaUuidDelete) | **Delete** /wea/{uuid} | Delete an existing wea object
[**WeaUuidGet**](WEAApi.md#WeaUuidGet) | **Get** /wea/{uuid} | Get a specific wea object
[**WeaUuidPut**](WEAApi.md#WeaUuidPut) | **Put** /wea/{uuid} | Modify an existing wea object


# **WeaGet**
> InlineResponse2009 WeaGet(ctx, optional)
Get a list of WEA objects

Retrieves a list of wea objects for a given filter.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **string**| The countyr the EPW is from | 

### Return type

[**InlineResponse2009**](inline_response_200_9.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WeaPost**
> InlineResponse204 WeaPost(ctx, wea)
Create a new wea object

Adds a new wea object to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **wea** | [**WeaSchema**](WeaSchema.md)| a wea object | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WeaUuidDelete**
> WeaUuidDelete(ctx, uuid)
Delete an existing wea object

Delete an wea object in the database specifying the uuid of the object

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the wea. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WeaUuidGet**
> InlineResponse20010 WeaUuidGet(ctx, uuid)
Get a specific wea object

Returns a single wea object

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the wea. | 

### Return type

[**InlineResponse20010**](inline_response_200_10.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WeaUuidPut**
> WeaUuidPut(ctx, uuid, wea)
Modify an existing wea object

Modifies any parameter (except uuid) of an wea object by completely replacing the wea object. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the wea. | 
  **wea** | [**WeaSchema**](WeaSchema.md)| a wea object | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

