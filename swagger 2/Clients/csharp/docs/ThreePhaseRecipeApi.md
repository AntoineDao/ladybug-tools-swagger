# IO.Swagger.Api.ThreePhaseRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeThreePhaseGridbasedPost**](ThreePhaseRecipeApi.md#recipethreephasegridbasedpost) | **POST** /recipe/three_phase/gridbased | Create a new three_phase object
[**RecipeThreePhaseGridbasedUuidPut**](ThreePhaseRecipeApi.md#recipethreephasegridbaseduuidput) | **PUT** /recipe/three_phase/gridbased/{uuid} | Modify an existing three_phase object


<a name="recipethreephasegridbasedpost"></a>
# **RecipeThreePhaseGridbasedPost**
> InlineResponse204 RecipeThreePhaseGridbasedPost (ThreePhaselGridBasedSchema recipe)

Create a new three_phase object

Adds a new three_phase object to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeThreePhaseGridbasedPostExample
    {
        public void main()
        {
            var apiInstance = new ThreePhaseRecipeApi();
            var recipe = new ThreePhaselGridBasedSchema(); // ThreePhaselGridBasedSchema | A three_phase JSON objectr with a uuid key.

            try
            {
                // Create a new three_phase object
                InlineResponse204 result = apiInstance.RecipeThreePhaseGridbasedPost(recipe);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ThreePhaseRecipeApi.RecipeThreePhaseGridbasedPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**ThreePhaselGridBasedSchema**](ThreePhaselGridBasedSchema.md)| A three_phase JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recipethreephasegridbaseduuidput"></a>
# **RecipeThreePhaseGridbasedUuidPut**
> void RecipeThreePhaseGridbasedUuidPut (string uuid, ThreePhaselGridBasedSchema recipe)

Modify an existing three_phase object

Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeThreePhaseGridbasedUuidPutExample
    {
        public void main()
        {
            var apiInstance = new ThreePhaseRecipeApi();
            var uuid = uuid_example;  // string | The unique identifier of the three_phase recipe.
            var recipe = new ThreePhaselGridBasedSchema(); // ThreePhaselGridBasedSchema | A three_phase JSON objectr with a uuid key.

            try
            {
                // Modify an existing three_phase object
                apiInstance.RecipeThreePhaseGridbasedUuidPut(uuid, recipe);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ThreePhaseRecipeApi.RecipeThreePhaseGridbasedUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the three_phase recipe. | 
 **recipe** | [**ThreePhaselGridBasedSchema**](ThreePhaselGridBasedSchema.md)| A three_phase JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

