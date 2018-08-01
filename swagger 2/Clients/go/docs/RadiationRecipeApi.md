# \RadiationRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeRadiationGridbasedPost**](RadiationRecipeApi.md#RecipeRadiationGridbasedPost) | **Post** /recipe/radiation/gridbased | Create a new radiation object
[**RecipeRadiationGridbasedUuidPut**](RadiationRecipeApi.md#RecipeRadiationGridbasedUuidPut) | **Put** /recipe/radiation/gridbased/{uuid} | Modify an existing radiation object


# **RecipeRadiationGridbasedPost**
> InlineResponse204 RecipeRadiationGridbasedPost(ctx, recipe)
Create a new radiation object

Adds a new radiation object to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **recipe** | [**RadiationGridBasedSchema**](RadiationGridBasedSchema.md)| A radiation JSON objectr with a uuid key. | 

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
Modify an existing radiation object

Modifies any parameter (except uuid) of a radiation recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the radiation recipe. | 
  **recipe** | [**RadiationGridBasedSchema**](RadiationGridBasedSchema.md)| A radiation JSON objectr with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

