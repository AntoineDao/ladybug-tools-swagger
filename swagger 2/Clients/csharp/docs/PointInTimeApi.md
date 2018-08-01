# IO.Swagger.Api.PointInTimeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipePointInTimeGridbasedPost**](PointInTimeApi.md#recipepointintimegridbasedpost) | **POST** /recipe/point_in_time/gridbased | Create a new point_in_time file
[**RecipePointInTimeGridbasedUuidPut**](PointInTimeApi.md#recipepointintimegridbaseduuidput) | **PUT** /recipe/point_in_time/gridbased/{uuid} | Modify an existing point_in_time file


<a name="recipepointintimegridbasedpost"></a>
# **RecipePointInTimeGridbasedPost**
> InlineResponse204 RecipePointInTimeGridbasedPost (PointInTimeGridBasedSchema recipe)

Create a new point_in_time file

Adds a new point_in_time file to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipePointInTimeGridbasedPostExample
    {
        public void main()
        {
            var apiInstance = new PointInTimeApi();
            var recipe = new PointInTimeGridBasedSchema(); // PointInTimeGridBasedSchema | A point_in_time JSON filer with a uuid key.

            try
            {
                // Create a new point_in_time file
                InlineResponse204 result = apiInstance.RecipePointInTimeGridbasedPost(recipe);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PointInTimeApi.RecipePointInTimeGridbasedPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**PointInTimeGridBasedSchema**](PointInTimeGridBasedSchema.md)| A point_in_time JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recipepointintimegridbaseduuidput"></a>
# **RecipePointInTimeGridbasedUuidPut**
> void RecipePointInTimeGridbasedUuidPut (string uuid, PointInTimeGridBasedSchema recipe)

Modify an existing point_in_time file

Modifies any parameter (except uuid) of a point_in_time recipe object by completely replacing the definition file. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipePointInTimeGridbasedUuidPutExample
    {
        public void main()
        {
            var apiInstance = new PointInTimeApi();
            var uuid = uuid_example;  // string | The unique identifier of the point_in_time recipe.
            var recipe = new PointInTimeGridBasedSchema(); // PointInTimeGridBasedSchema | A analysis_grid JSON filer with a uuid key.

            try
            {
                // Modify an existing point_in_time file
                apiInstance.RecipePointInTimeGridbasedUuidPut(uuid, recipe);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PointInTimeApi.RecipePointInTimeGridbasedUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the point_in_time recipe. | 
 **recipe** | [**PointInTimeGridBasedSchema**](PointInTimeGridBasedSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

