# \DaylightFactorRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeDaylightFactorGridbasedPost**](DaylightFactorRecipeApi.md#RecipeDaylightFactorGridbasedPost) | **Post** /recipe/daylight_factor/gridbased | Create a new analysis_grid object
[**RecipeDaylightFactorGridbasedUuidPut**](DaylightFactorRecipeApi.md#RecipeDaylightFactorGridbasedUuidPut) | **Put** /recipe/daylight_factor/gridbased/{uuid} | Modify an existing analysis_grid object


# **RecipeDaylightFactorGridbasedPost**
> InlineResponse204 RecipeDaylightFactorGridbasedPost(ctx, recipe)
Create a new analysis_grid object

Adds a new analysis_grid object to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **recipe** | [**DaylightFactorGridBasedSchema**](DaylightFactorGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipeDaylightFactorGridbasedUuidPut**
> RecipeDaylightFactorGridbasedUuidPut(ctx, uuid, recipe)
Modify an existing analysis_grid object

Modifies any parameter (except uuid) of a daylight_factor recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the daylight_factor recipe. | 
  **recipe** | [**DaylightFactorGridBasedSchema**](DaylightFactorGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

