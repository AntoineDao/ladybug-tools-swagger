# \FivePhaseApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeFivePhaseGridbasedPost**](FivePhaseApi.md#RecipeFivePhaseGridbasedPost) | **Post** /recipe/five_phase/gridbased | Create a new five_phase file
[**RecipeFivePhaseGridbasedUuidPut**](FivePhaseApi.md#RecipeFivePhaseGridbasedUuidPut) | **Put** /recipe/five_phase/gridbased/{uuid} | Modify an existing five_phase file


# **RecipeFivePhaseGridbasedPost**
> InlineResponse204 RecipeFivePhaseGridbasedPost(ctx, recipe)
Create a new five_phase file

Adds a new five_phase file to the list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **recipe** | [**FivePhaselGridBasedSchema**](FivePhaselGridBasedSchema.md)| A five_phase JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipeFivePhaseGridbasedUuidPut**
> RecipeFivePhaseGridbasedUuidPut(ctx, uuid, recipe)
Modify an existing five_phase file

Modifies any parameter (except uuid) of a five_phase recipe object by completely replacing the definition file. A finer grain method can be set up later.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **uuid** | **string**| The unique identifier of the five_phase recipe. | 
  **recipe** | [**FivePhaselGridBasedSchema**](FivePhaselGridBasedSchema.md)| A five_phase JSON filer with a uuid key. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

