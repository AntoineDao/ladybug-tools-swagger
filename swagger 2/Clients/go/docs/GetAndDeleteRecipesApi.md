# \GetAndDeleteRecipesApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeGet**](GetAndDeleteRecipesApi.md#RecipeGet) | **Get** /recipe/ | Get a list of daylight recipe objects
[**RecipeUuidDelete**](GetAndDeleteRecipesApi.md#RecipeUuidDelete) | **Delete** /recipe/{uuid} | Delete an existing recipe object
[**RecipeUuidGet**](GetAndDeleteRecipesApi.md#RecipeUuidGet) | **Get** /recipe/{uuid} | Get a specific analysis_grid file


# **RecipeGet**
> InlineResponse200 RecipeGet(ctx, optional)
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
 **size** | **int32**| Number of files returned | 
 **country** | **string**| Country where definitions should be from | 

### Return type

[**InlineResponse200**](inline_response_200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipeUuidDelete**
> RecipeUuidDelete(ctx, uuid)
Delete an existing recipe object

Delete an recipe object in the database specifying the uuid of the file

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the recipe. | 

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
Get a specific analysis_grid file

Returns a single analysis_grid file

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

