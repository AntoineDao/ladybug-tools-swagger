# \RadiationApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeRadiationGridbasedPost**](RadiationApi.md#RecipeRadiationGridbasedPost) | **Post** /recipe/radiation/gridbased | Create a new radiation file
[**RecipeRadiationGridbasedUuidPut**](RadiationApi.md#RecipeRadiationGridbasedUuidPut) | **Put** /recipe/radiation/gridbased/{uuid} | Modify an existing radiation file


# **RecipeRadiationGridbasedPost**
> InlineResponse204 RecipeRadiationGridbasedPost(ctx, recipe)
Create a new radiation file

Adds a new radiation file to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **recipe** | [**RadiationGridBasedSchema**](RadiationGridBasedSchema.md)| A radiation JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipeRadiationGridbasedUuidPut**
> RecipeRadiationGridbasedUuidPut(ctx, uuid, recipe)
Modify an existing radiation file

Modifies any parameter (except uuid) of a radiation recipe object by completely replacing the definition file. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the radiation recipe. | 
  **recipe** | [**RadiationGridBasedSchema**](RadiationGridBasedSchema.md)| A radiation JSON filer with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

