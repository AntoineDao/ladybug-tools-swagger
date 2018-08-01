# \SolarAccessRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeSolarAccessGridbasedPost**](SolarAccessRecipeApi.md#RecipeSolarAccessGridbasedPost) | **Post** /recipe/solar_access/gridbased | Create a new solar_access object
[**RecipeSolarAccessGridbasedUuidPut**](SolarAccessRecipeApi.md#RecipeSolarAccessGridbasedUuidPut) | **Put** /recipe/solar_access/gridbased/{uuid} | Modify an existing solar_access object


# **RecipeSolarAccessGridbasedPost**
> InlineResponse204 RecipeSolarAccessGridbasedPost(ctx, recipe)
Create a new solar_access object

Adds a new solar_access object to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **recipe** | [**SolarAccessGridBasedSchema**](SolarAccessGridBasedSchema.md)| A solar_access JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipeSolarAccessGridbasedUuidPut**
> RecipeSolarAccessGridbasedUuidPut(ctx, uuid, recipe)
Modify an existing solar_access object

Modifies any parameter (except uuid) of a solar_access recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the solar_access recipe. | 
  **recipe** | [**SolarAccessGridBasedSchema**](SolarAccessGridBasedSchema.md)| A solar_access JSON objectr with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

