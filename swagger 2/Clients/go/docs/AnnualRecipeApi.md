# \AnnualRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeAnnualGridbasedPost**](AnnualRecipeApi.md#RecipeAnnualGridbasedPost) | **Post** /recipe/annual/gridbased | Create a new annual object
[**RecipeAnnualGridbasedUuidPut**](AnnualRecipeApi.md#RecipeAnnualGridbasedUuidPut) | **Put** /recipe/annual/gridbased/{uuid} | Modify an existing annual object


# **RecipeAnnualGridbasedPost**
> InlineResponse204 RecipeAnnualGridbasedPost(ctx, recipe)
Create a new annual object

Adds a new annual object to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **recipe** | [**AnnualGridBasedSchema**](AnnualGridBasedSchema.md)| A annual JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipeAnnualGridbasedUuidPut**
> RecipeAnnualGridbasedUuidPut(ctx, uuid, recipe)
Modify an existing annual object

Modifies any parameter (except uuid) of a annual recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the annual recipe. | 
  **recipe** | [**AnnualGridBasedSchema**](AnnualGridBasedSchema.md)| A annual JSON objectr with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

