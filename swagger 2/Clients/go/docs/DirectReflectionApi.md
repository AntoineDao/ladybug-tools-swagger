# \DirectReflectionApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeDirectReflectionGridbasedPost**](DirectReflectionApi.md#RecipeDirectReflectionGridbasedPost) | **Post** /recipe/direct_reflection/gridbased | Create a new direct_reflection file
[**RecipeDirectReflectionGridbasedUuidPut**](DirectReflectionApi.md#RecipeDirectReflectionGridbasedUuidPut) | **Put** /recipe/direct_reflection/gridbased/{uuid} | Modify an existing direct_reflection file


# **RecipeDirectReflectionGridbasedPost**
> InlineResponse204 RecipeDirectReflectionGridbasedPost(ctx, recipe)
Create a new direct_reflection file

Adds a new direct_reflection file to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **recipe** | [**DirectReflectionGridBasedSchema**](DirectReflectionGridBasedSchema.md)| A direct_reflection JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipeDirectReflectionGridbasedUuidPut**
> RecipeDirectReflectionGridbasedUuidPut(ctx, uuid, recipe)
Modify an existing direct_reflection file

Modifies any parameter (except uuid) of a direct_reflection recipe object by completely replacing the definition file. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the direct_reflection recipe. | 
  **recipe** | [**DirectReflectionGridBasedSchema**](DirectReflectionGridBasedSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

