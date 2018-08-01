# \LightSourceMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MaterialLightSourcePost**](LightSourceMaterialApi.md#MaterialLightSourcePost) | **Post** /material/light_source | Create a new light_source material object
[**MaterialLightSourceUuidPut**](LightSourceMaterialApi.md#MaterialLightSourceUuidPut) | **Put** /material/light_source/{uuid} | Modify an existing light_source material file


# **MaterialLightSourcePost**
> InlineResponse204 MaterialLightSourcePost(ctx, lightSourceMaterial)
Create a new light_source material object

Adds a new light_source material object to the database

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **lightSourceMaterial** | [**LightSourceMaterialSchema**](LightSourceMaterialSchema.md)| a light_source material object | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MaterialLightSourceUuidPut**
> MaterialLightSourceUuidPut(ctx, uuid, lightSourceMaterial)
Modify an existing light_source material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the material. | 
  **lightSourceMaterial** | [**LightSourceMaterialSchema**](LightSourceMaterialSchema.md)| a light_source material object | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

