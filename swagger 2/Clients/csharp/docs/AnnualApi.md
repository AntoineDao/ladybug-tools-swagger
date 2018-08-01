# IO.Swagger.Api.AnnualApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeAnnualGridbasedPost**](AnnualApi.md#recipeannualgridbasedpost) | **POST** /recipe/annual/gridbased | Create a new annual file
[**RecipeAnnualGridbasedUuidPut**](AnnualApi.md#recipeannualgridbaseduuidput) | **PUT** /recipe/annual/gridbased/{uuid} | Modify an existing annual file


<a name="recipeannualgridbasedpost"></a>
# **RecipeAnnualGridbasedPost**
> InlineResponse204 RecipeAnnualGridbasedPost (AnnualGridBasedSchema recipe)

Create a new annual file

Adds a new annual file to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeAnnualGridbasedPostExample
    {
        public void main()
        {
            var apiInstance = new AnnualApi();
            var recipe = new AnnualGridBasedSchema(); // AnnualGridBasedSchema | A annual JSON filer with a uuid key.

            try
            {
                // Create a new annual file
                InlineResponse204 result = apiInstance.RecipeAnnualGridbasedPost(recipe);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AnnualApi.RecipeAnnualGridbasedPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**AnnualGridBasedSchema**](AnnualGridBasedSchema.md)| A annual JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recipeannualgridbaseduuidput"></a>
# **RecipeAnnualGridbasedUuidPut**
> void RecipeAnnualGridbasedUuidPut (string uuid, AnnualGridBasedSchema recipe)

Modify an existing annual file

Modifies any parameter (except uuid) of a annual recipe object by completely replacing the definition file. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeAnnualGridbasedUuidPutExample
    {
        public void main()
        {
            var apiInstance = new AnnualApi();
            var uuid = uuid_example;  // string | The unique identifier of the annual recipe.
            var recipe = new AnnualGridBasedSchema(); // AnnualGridBasedSchema | A annual JSON filer with a uuid key.

            try
            {
                // Modify an existing annual file
                apiInstance.RecipeAnnualGridbasedUuidPut(uuid, recipe);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AnnualApi.RecipeAnnualGridbasedUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the annual recipe. | 
 **recipe** | [**AnnualGridBasedSchema**](AnnualGridBasedSchema.md)| A annual JSON filer with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

