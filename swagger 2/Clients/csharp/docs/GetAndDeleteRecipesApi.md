# IO.Swagger.Api.GetAndDeleteRecipesApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeGet**](GetAndDeleteRecipesApi.md#recipeget) | **GET** /recipe/ | Get a list of daylight recipe objects
[**RecipeUuidDelete**](GetAndDeleteRecipesApi.md#recipeuuiddelete) | **DELETE** /recipe/{uuid} | Delete an existing recipe object
[**RecipeUuidGet**](GetAndDeleteRecipesApi.md#recipeuuidget) | **GET** /recipe/{uuid} | Get a specific analysis_grid file


<a name="recipeget"></a>
# **RecipeGet**
> InlineResponse200 RecipeGet (int? size = null, string country = null)

Get a list of daylight recipe objects

Retrieves a list of daylight recipe objects for a given filter.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeGetExample
    {
        public void main()
        {
            var apiInstance = new GetAndDeleteRecipesApi();
            var size = 56;  // int? | Number of files returned (optional) 
            var country = country_example;  // string | Country where definitions should be from (optional) 

            try
            {
                // Get a list of daylight recipe objects
                InlineResponse200 result = apiInstance.RecipeGet(size, country);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GetAndDeleteRecipesApi.RecipeGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **int?**| Number of files returned | [optional] 
 **country** | **string**| Country where definitions should be from | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recipeuuiddelete"></a>
# **RecipeUuidDelete**
> void RecipeUuidDelete (string uuid)

Delete an existing recipe object

Delete an recipe object in the database specifying the uuid of the file

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeUuidDeleteExample
    {
        public void main()
        {
            var apiInstance = new GetAndDeleteRecipesApi();
            var uuid = uuid_example;  // string | The unique identifier of the recipe.

            try
            {
                // Delete an existing recipe object
                apiInstance.RecipeUuidDelete(uuid);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GetAndDeleteRecipesApi.RecipeUuidDelete: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the recipe. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recipeuuidget"></a>
# **RecipeUuidGet**
> GridBasedRecipeSchema RecipeUuidGet (string uuid)

Get a specific analysis_grid file

Returns a single analysis_grid file

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeUuidGetExample
    {
        public void main()
        {
            var apiInstance = new GetAndDeleteRecipesApi();
            var uuid = uuid_example;  // string | The unique identifier of the analysis_grid.

            try
            {
                // Get a specific analysis_grid file
                GridBasedRecipeSchema result = apiInstance.RecipeUuidGet(uuid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GetAndDeleteRecipesApi.RecipeUuidGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the analysis_grid. | 

### Return type

[**GridBasedRecipeSchema**](GridBasedRecipeSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

