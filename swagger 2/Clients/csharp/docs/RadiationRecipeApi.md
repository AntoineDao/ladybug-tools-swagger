# IO.Swagger.Api.RadiationRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeRadiationGridbasedPost**](RadiationRecipeApi.md#reciperadiationgridbasedpost) | **POST** /recipe/radiation/gridbased | Create a new radiation object
[**RecipeRadiationGridbasedUuidPut**](RadiationRecipeApi.md#reciperadiationgridbaseduuidput) | **PUT** /recipe/radiation/gridbased/{uuid} | Modify an existing radiation object


<a name="reciperadiationgridbasedpost"></a>
# **RecipeRadiationGridbasedPost**
> InlineResponse204 RecipeRadiationGridbasedPost (RadiationGridBasedSchema recipe)

Create a new radiation object

Adds a new radiation object to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeRadiationGridbasedPostExample
    {
        public void main()
        {
            var apiInstance = new RadiationRecipeApi();
            var recipe = new RadiationGridBasedSchema(); // RadiationGridBasedSchema | A radiation JSON objectr with a uuid key.

            try
            {
                // Create a new radiation object
                InlineResponse204 result = apiInstance.RecipeRadiationGridbasedPost(recipe);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RadiationRecipeApi.RecipeRadiationGridbasedPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**RadiationGridBasedSchema**](RadiationGridBasedSchema.md)| A radiation JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="reciperadiationgridbaseduuidput"></a>
# **RecipeRadiationGridbasedUuidPut**
> void RecipeRadiationGridbasedUuidPut (string uuid, RadiationGridBasedSchema recipe)

Modify an existing radiation object

Modifies any parameter (except uuid) of a radiation recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeRadiationGridbasedUuidPutExample
    {
        public void main()
        {
            var apiInstance = new RadiationRecipeApi();
            var uuid = uuid_example;  // string | The unique identifier of the radiation recipe.
            var recipe = new RadiationGridBasedSchema(); // RadiationGridBasedSchema | A radiation JSON objectr with a uuid key.

            try
            {
                // Modify an existing radiation object
                apiInstance.RecipeRadiationGridbasedUuidPut(uuid, recipe);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RadiationRecipeApi.RecipeRadiationGridbasedUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the radiation recipe. | 
 **recipe** | [**RadiationGridBasedSchema**](RadiationGridBasedSchema.md)| A radiation JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

