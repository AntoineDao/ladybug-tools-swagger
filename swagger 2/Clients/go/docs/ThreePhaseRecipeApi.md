# \ThreePhaseRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeThreePhaseGridbasedPost**](ThreePhaseRecipeApi.md#RecipeThreePhaseGridbasedPost) | **Post** /recipe/three_phase/gridbased | Create a new three_phase object
[**RecipeThreePhaseGridbasedUuidPut**](ThreePhaseRecipeApi.md#RecipeThreePhaseGridbasedUuidPut) | **Put** /recipe/three_phase/gridbased/{uuid} | Modify an existing three_phase object


# **RecipeThreePhaseGridbasedPost**
> InlineResponse204 RecipeThreePhaseGridbasedPost(ctx, recipe)
Create a new three_phase object

Adds a new three_phase object to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **recipe** | [**ThreePhaselGridBasedSchema**](ThreePhaselGridBasedSchema.md)| A three_phase JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipeThreePhaseGridbasedUuidPut**
> RecipeThreePhaseGridbasedUuidPut(ctx, uuid, recipe)
Modify an existing three_phase object

Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the three_phase recipe. | 
  **recipe** | [**ThreePhaselGridBasedSchema**](ThreePhaselGridBasedSchema.md)| A three_phase JSON objectr with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

