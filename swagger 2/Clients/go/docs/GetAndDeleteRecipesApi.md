# \GetAndDeleteRecipesApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeGet**](GetAndDeleteRecipesApi.md#RecipeGet) | **Get** /recipe/ | Get a list of daylight recipe objects
[**RecipeUuidDelete**](GetAndDeleteRecipesApi.md#RecipeUuidDelete) | **Delete** /recipe/{uuid} | Delete an existing recipe object
[**RecipeUuidGet**](GetAndDeleteRecipesApi.md#RecipeUuidGet) | **Get** /recipe/{uuid} | Get a specific analysis_grid object


# **RecipeGet**
> InlineResponse2006 RecipeGet(ctx, optional)
Get a list of daylight recipe objects

Retrieves a list of daylight recipe objects for a given filter.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type_** | **string**| The type of recipe to be retrieved | 
 **location** | **string**| The location where the weather sky is generated from (can be country or city, will only work for climate based recipes) | 
 **state** | **string**| The state of the recipe on the server (whether it has run, is running, has failed or is on hold) | 

### Return type

[**InlineResponse2006**](inline_response_200_6.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipeUuidDelete**
> RecipeUuidDelete(ctx, uuid)
Delete an existing recipe object

Delete an recipe object in the database specifying the uuid of the object

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the analysis_grid. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipeUuidGet**
> GridBasedRecipeSchema RecipeUuidGet(ctx, uuid)
Get a specific analysis_grid object

Returns a single analysis_grid object

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the analysis_grid. | 

### Return type

[**GridBasedRecipeSchema**](GridBasedRecipeSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

