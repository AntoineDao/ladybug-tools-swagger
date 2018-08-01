# \PointInTimeRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipePointInTimeGridbasedPost**](PointInTimeRecipeApi.md#RecipePointInTimeGridbasedPost) | **Post** /recipe/point_in_time/gridbased | Create a new point_in_time object
[**RecipePointInTimeGridbasedUuidPut**](PointInTimeRecipeApi.md#RecipePointInTimeGridbasedUuidPut) | **Put** /recipe/point_in_time/gridbased/{uuid} | Modify an existing point_in_time object


# **RecipePointInTimeGridbasedPost**
> InlineResponse204 RecipePointInTimeGridbasedPost(ctx, recipe)
Create a new point_in_time object

Adds a new point_in_time object to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **recipe** | [**PointInTimeGridBasedSchema**](PointInTimeGridBasedSchema.md)| A point_in_time JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipePointInTimeGridbasedUuidPut**
> RecipePointInTimeGridbasedUuidPut(ctx, uuid, recipe)
Modify an existing point_in_time object

Modifies any parameter (except uuid) of a point_in_time recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the point_in_time recipe. | 
  **recipe** | [**PointInTimeGridBasedSchema**](PointInTimeGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

