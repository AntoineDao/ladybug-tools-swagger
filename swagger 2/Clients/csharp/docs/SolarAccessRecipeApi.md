# IO.Swagger.Api.SolarAccessRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeSolarAccessGridbasedPost**](SolarAccessRecipeApi.md#recipesolaraccessgridbasedpost) | **POST** /recipe/solar_access/gridbased | Create a new solar_access object
[**RecipeSolarAccessGridbasedUuidPut**](SolarAccessRecipeApi.md#recipesolaraccessgridbaseduuidput) | **PUT** /recipe/solar_access/gridbased/{uuid} | Modify an existing solar_access object


<a name="recipesolaraccessgridbasedpost"></a>
# **RecipeSolarAccessGridbasedPost**
> InlineResponse204 RecipeSolarAccessGridbasedPost (SolarAccessGridBasedSchema recipe)

Create a new solar_access object

Adds a new solar_access object to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeSolarAccessGridbasedPostExample
    {
        public void main()
        {
            var apiInstance = new SolarAccessRecipeApi();
            var recipe = new SolarAccessGridBasedSchema(); // SolarAccessGridBasedSchema | A solar_access JSON objectr with a uuid key.

            try
            {
                // Create a new solar_access object
                InlineResponse204 result = apiInstance.RecipeSolarAccessGridbasedPost(recipe);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SolarAccessRecipeApi.RecipeSolarAccessGridbasedPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**SolarAccessGridBasedSchema**](SolarAccessGridBasedSchema.md)| A solar_access JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recipesolaraccessgridbaseduuidput"></a>
# **RecipeSolarAccessGridbasedUuidPut**
> void RecipeSolarAccessGridbasedUuidPut (string uuid, SolarAccessGridBasedSchema recipe)

Modify an existing solar_access object

Modifies any parameter (except uuid) of a solar_access recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeSolarAccessGridbasedUuidPutExample
    {
        public void main()
        {
            var apiInstance = new SolarAccessRecipeApi();
            var uuid = uuid_example;  // string | The unique identifier of the solar_access recipe.
            var recipe = new SolarAccessGridBasedSchema(); // SolarAccessGridBasedSchema | A solar_access JSON objectr with a uuid key.

            try
            {
                // Modify an existing solar_access object
                apiInstance.RecipeSolarAccessGridbasedUuidPut(uuid, recipe);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SolarAccessRecipeApi.RecipeSolarAccessGridbasedUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the solar_access recipe. | 
 **recipe** | [**SolarAccessGridBasedSchema**](SolarAccessGridBasedSchema.md)| A solar_access JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

