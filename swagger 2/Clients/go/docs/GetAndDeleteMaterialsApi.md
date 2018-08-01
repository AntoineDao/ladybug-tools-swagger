# \GetAndDeleteMaterialsApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MaterialGet**](GetAndDeleteMaterialsApi.md#MaterialGet) | **Get** /material | Get a list of material objects
[**MaterialUuidDelete**](GetAndDeleteMaterialsApi.md#MaterialUuidDelete) | **Delete** /material/{uuid} | Delete an existing material file
[**MaterialUuidGet**](GetAndDeleteMaterialsApi.md#MaterialUuidGet) | **Get** /material/{uuid} | Get a specific material object


# **MaterialGet**
> InlineResponse2004 MaterialGet(ctx, optional)
Get a list of material objects

Retrieves a list of material uuids for a given filter.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **materialType** | **string**| The type of the material to be queried | 
 **rgbTransmittance** | **float32**| The RGB average transmittance value (will only return translucent material) | 
 **rgbReflectance** | **float32**| The RGB average reflectance value (will only return opaque material) | 

### Return type

[**InlineResponse2004**](inline_response_200_4.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MaterialUuidDelete**
> MaterialUuidDelete(ctx, uuid)
Delete an existing material file

Delete an material file in the database specifying the uuid of the file

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the material. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MaterialUuidGet**
> InlineResponse2005 MaterialUuidGet(ctx, uuid)
Get a specific material object

Returns a single material object

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the material. | 

### Return type

[**InlineResponse2005**](inline_response_200_5.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

