# IO.Swagger.Api.DirectReflectionRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeDirectReflectionGridbasedPost**](DirectReflectionRecipeApi.md#recipedirectreflectiongridbasedpost) | **POST** /recipe/direct_reflection/gridbased | Create a new direct_reflection object
[**RecipeDirectReflectionGridbasedUuidPut**](DirectReflectionRecipeApi.md#recipedirectreflectiongridbaseduuidput) | **PUT** /recipe/direct_reflection/gridbased/{uuid} | Modify an existing direct_reflection object


<a name="recipedirectreflectiongridbasedpost"></a>
# **RecipeDirectReflectionGridbasedPost**
> InlineResponse204 RecipeDirectReflectionGridbasedPost (DirectReflectionGridBasedSchema recipe)

Create a new direct_reflection object

Adds a new direct_reflection object to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeDirectReflectionGridbasedPostExample
    {
        public void main()
        {
            var apiInstance = new DirectReflectionRecipeApi();
            var recipe = new DirectReflectionGridBasedSchema(); // DirectReflectionGridBasedSchema | A direct_reflection JSON objectr with a uuid key.

            try
            {
                // Create a new direct_reflection object
                InlineResponse204 result = apiInstance.RecipeDirectReflectionGridbasedPost(recipe);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DirectReflectionRecipeApi.RecipeDirectReflectionGridbasedPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**DirectReflectionGridBasedSchema**](DirectReflectionGridBasedSchema.md)| A direct_reflection JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recipedirectreflectiongridbaseduuidput"></a>
# **RecipeDirectReflectionGridbasedUuidPut**
> void RecipeDirectReflectionGridbasedUuidPut (string uuid, DirectReflectionGridBasedSchema recipe)

Modify an existing direct_reflection object

Modifies any parameter (except uuid) of a direct_reflection recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeDirectReflectionGridbasedUuidPutExample
    {
        public void main()
        {
            var apiInstance = new DirectReflectionRecipeApi();
            var uuid = uuid_example;  // string | The unique identifier of the direct_reflection recipe.
            var recipe = new DirectReflectionGridBasedSchema(); // DirectReflectionGridBasedSchema | A analysis_grid JSON objectr with a uuid key.

            try
            {
                // Modify an existing direct_reflection object
                apiInstance.RecipeDirectReflectionGridbasedUuidPut(uuid, recipe);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DirectReflectionRecipeApi.RecipeDirectReflectionGridbasedUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the direct_reflection recipe. | 
 **recipe** | [**DirectReflectionGridBasedSchema**](DirectReflectionGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

