# IO.Swagger.Api.GetAndDeleteRecipesApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeGet**](GetAndDeleteRecipesApi.md#recipeget) | **GET** /recipe/ | Get a list of daylight recipe objects
[**RecipeUuidDelete**](GetAndDeleteRecipesApi.md#recipeuuiddelete) | **DELETE** /recipe/{uuid} | Delete an existing recipe object
[**RecipeUuidGet**](GetAndDeleteRecipesApi.md#recipeuuidget) | **GET** /recipe/{uuid} | Get a specific analysis_grid object


<a name="recipeget"></a>
# **RecipeGet**
> InlineResponse2006 RecipeGet (string type = null, string location = null, string state = null)

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
            var type = type_example;  // string | The type of recipe to be retrieved (optional) 
            var location = location_example;  // string | The location where the weather sky is generated from (can be country or city, will only work for climate based recipes) (optional) 
            var state = state_example;  // string | The state of the recipe on the server (whether it has run, is running, has failed or is on hold) (optional) 

            try
            {
                // Get a list of daylight recipe objects
                InlineResponse2006 result = apiInstance.RecipeGet(type, location, state);
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
 **type** | **string**| The type of recipe to be retrieved | [optional] 
 **location** | **string**| The location where the weather sky is generated from (can be country or city, will only work for climate based recipes) | [optional] 
 **state** | **string**| The state of the recipe on the server (whether it has run, is running, has failed or is on hold) | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

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

Delete an recipe object in the database specifying the uuid of the object

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
            var uuid = uuid_example;  // string | The unique identifier of the analysis_grid.

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
 **uuid** | **string**| The unique identifier of the analysis_grid. | 

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

Get a specific analysis_grid object

Returns a single analysis_grid object

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
                // Get a specific analysis_grid object
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

