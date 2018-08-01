# \EPWApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EpwGet**](EPWApi.md#EpwGet) | **Get** /epw | Get a list of EPW objects
[**EpwPost**](EPWApi.md#EpwPost) | **Post** /epw | Create a new epw file
[**EpwUuidDelete**](EPWApi.md#EpwUuidDelete) | **Delete** /epw/{uuid} | Delete an existing epw file
[**EpwUuidGet**](EPWApi.md#EpwUuidGet) | **Get** /epw/{uuid} | Get a specific epw file
[**EpwUuidPut**](EPWApi.md#EpwUuidPut) | **Put** /epw/{uuid} | Modify an existing epw file


# **EpwGet**
> InlineResponse2002 EpwGet(ctx, optional)
Get a list of EPW objects

Retrieves a list of epw objects for a given filter.

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

[**InlineResponse2002**](inline_response_200_2.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **EpwPost**
> InlineResponse204 EpwPost(ctx, epw)
Create a new epw file

Adds a new epw file to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **epw** | [**EpwSchema**](EpwSchema.md)| The location of the epw. | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **EpwUuidDelete**
> EpwUuidDelete(ctx, uuid)
Delete an existing epw file

Delete an epw file in the database specifying the uuid of the file

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the epw. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **EpwUuidGet**
> InlineResponse2003 EpwUuidGet(ctx, uuid)
Get a specific epw file

Returns a single epw file

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the epw. | 

### Return type

[**InlineResponse2003**](inline_response_200_3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **EpwUuidPut**
> EpwUuidPut(ctx, uuid, epw)
Modify an existing epw file

Modifies any parameter (except uuid) of an epw file by completely replacing the EPW file. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the epw. | 
  **epw** | [**EpwSchema**](EpwSchema.md)| The location of the epw. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

