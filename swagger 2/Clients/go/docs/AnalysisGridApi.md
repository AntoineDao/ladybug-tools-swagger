# \AnalysisGridApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AnalysisGridGet**](AnalysisGridApi.md#AnalysisGridGet) | **Get** /analysis_grid | Get a list of analysis_grid objects
[**AnalysisGridPost**](AnalysisGridApi.md#AnalysisGridPost) | **Post** /analysis_grid | Create a new analysis_grid file
[**AnalysisGridUuidDelete**](AnalysisGridApi.md#AnalysisGridUuidDelete) | **Delete** /analysis_grid/{uuid} | Delete an existing analysis_grid file
[**AnalysisGridUuidGet**](AnalysisGridApi.md#AnalysisGridUuidGet) | **Get** /analysis_grid/{uuid} | Get an analysis_grid object
[**AnalysisGridUuidPut**](AnalysisGridApi.md#AnalysisGridUuidPut) | **Put** /analysis_grid/{uuid} | Modify an existing analysis_grid file


# **AnalysisGridGet**
> InlineResponse200 AnalysisGridGet(ctx, optional)
Get a list of analysis_grid objects

Retrieves a list of analysis grids for a given filter.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridName** | **string**| The name of the grid | 
 **minPoints** | **int32**| The minimum amount of points the analysis grid has | 
 **maxPoints** | **int32**| The maximum amount of points the analysis grid has | 

### Return type

[**InlineResponse200**](inline_response_200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AnalysisGridPost**
> InlineResponse204 AnalysisGridPost(ctx, analysisGrid)
Create a new analysis_grid file

Adds a new analysis_grid file to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **analysisGrid** | [**AnalysisGridSchema**](AnalysisGridSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AnalysisGridUuidDelete**
> AnalysisGridUuidDelete(ctx, uuid)
Delete an existing analysis_grid file

Delete an analysis_grid file in the database specifying the uuid of the file

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

# **AnalysisGridUuidGet**
> InlineResponse2001 AnalysisGridUuidGet(ctx, uuid)
Get an analysis_grid object

Returns a single analysis_grid object based on the provided uuid

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the analysis_grid. | 

### Return type

[**InlineResponse2001**](inline_response_200_1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AnalysisGridUuidPut**
> AnalysisGridUuidPut(ctx, uuid, analysisGrid)
Modify an existing analysis_grid file

Modifies any parameter (except uuid) of an analysis_grid file by completely replacing the definition file. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the analysis_grid. | 
  **analysisGrid** | [**AnalysisGridSchema**](AnalysisGridSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

