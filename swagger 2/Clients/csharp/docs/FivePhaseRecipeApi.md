# IO.Swagger.Api.FivePhaseRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeFivePhaseGridbasedPost**](FivePhaseRecipeApi.md#recipefivephasegridbasedpost) | **POST** /recipe/five_phase/gridbased | Create a new five_phase object
[**RecipeFivePhaseGridbasedUuidPut**](FivePhaseRecipeApi.md#recipefivephasegridbaseduuidput) | **PUT** /recipe/five_phase/gridbased/{uuid} | Modify an existing five_phase object


<a name="recipefivephasegridbasedpost"></a>
# **RecipeFivePhaseGridbasedPost**
> InlineResponse204 RecipeFivePhaseGridbasedPost (FivePhaselGridBasedSchema recipe)

Create a new five_phase object

Adds a new five_phase object to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeFivePhaseGridbasedPostExample
    {
        public void main()
        {
            var apiInstance = new FivePhaseRecipeApi();
            var recipe = new FivePhaselGridBasedSchema(); // FivePhaselGridBasedSchema | A five_phase JSON objectr with a uuid key.

            try
            {
                // Create a new five_phase object
                InlineResponse204 result = apiInstance.RecipeFivePhaseGridbasedPost(recipe);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FivePhaseRecipeApi.RecipeFivePhaseGridbasedPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**FivePhaselGridBasedSchema**](FivePhaselGridBasedSchema.md)| A five_phase JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recipefivephasegridbaseduuidput"></a>
# **RecipeFivePhaseGridbasedUuidPut**
> void RecipeFivePhaseGridbasedUuidPut (string uuid, FivePhaselGridBasedSchema recipe)

Modify an existing five_phase object

Modifies any parameter (except uuid) of a five_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeFivePhaseGridbasedUuidPutExample
    {
        public void main()
        {
            var apiInstance = new FivePhaseRecipeApi();
            var uuid = uuid_example;  // string | The unique identifier of the five_phase recipe.
            var recipe = new FivePhaselGridBasedSchema(); // FivePhaselGridBasedSchema | A five_phase JSON objectr with a uuid key.

            try
            {
                // Modify an existing five_phase object
                apiInstance.RecipeFivePhaseGridbasedUuidPut(uuid, recipe);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FivePhaseRecipeApi.RecipeFivePhaseGridbasedUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the five_phase recipe. | 
 **recipe** | [**FivePhaselGridBasedSchema**](FivePhaselGridBasedSchema.md)| A five_phase JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

