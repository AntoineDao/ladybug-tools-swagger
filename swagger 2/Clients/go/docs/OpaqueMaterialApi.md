# \OpaqueMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MaterialOpaquePost**](OpaqueMaterialApi.md#MaterialOpaquePost) | **Post** /material/opaque | Create a new opaque material object
[**MaterialOpaqueUuidPut**](OpaqueMaterialApi.md#MaterialOpaqueUuidPut) | **Put** /material/opaque/{uuid} | Modify an existing opaque material file


# **MaterialOpaquePost**
> InlineResponse204 MaterialOpaquePost(ctx, opaqueMaterial)
Create a new opaque material object

Adds a new opaque material object to the database

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **opaqueMaterial** | [**OpaqueMaterialSchema**](OpaqueMaterialSchema.md)| an opaque material object | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MaterialOpaqueUuidPut**
> MaterialOpaqueUuidPut(ctx, uuid, opaqueMaterial)
Modify an existing opaque material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the material. | 
  **opaqueMaterial** | [**OpaqueMaterialSchema**](OpaqueMaterialSchema.md)| an opaque material object | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

