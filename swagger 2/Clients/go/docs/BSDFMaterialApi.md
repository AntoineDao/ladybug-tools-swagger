# \BSDFMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MaterialBsdfPost**](BSDFMaterialApi.md#MaterialBsdfPost) | **Post** /material/bsdf | Create a new bsdf material object
[**MaterialBsdfUuidPut**](BSDFMaterialApi.md#MaterialBsdfUuidPut) | **Put** /material/bsdf/{uuid} | Modify an existing bsdf material file


# **MaterialBsdfPost**
> InlineResponse204 MaterialBsdfPost(ctx, bsdfMaterial)
Create a new bsdf material object

Adds a new bsdf material object to the database

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **bsdfMaterial** | [**BsdfMaterialSchema**](BsdfMaterialSchema.md)| a bsdf material object | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MaterialBsdfUuidPut**
> MaterialBsdfUuidPut(ctx, uuid, bsdfMaterial)
Modify an existing bsdf material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the material. | 
  **bsdfMaterial** | [**BsdfMaterialSchema**](BsdfMaterialSchema.md)| a bsdf material object | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

