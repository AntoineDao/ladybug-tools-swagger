# IO.Swagger.Api.DaylightFactorApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipeDaylightFactorGridbasedPost**](DaylightFactorApi.md#recipedaylightfactorgridbasedpost) | **POST** /recipe/daylight_factor/gridbased | Create a new analysis_grid file
[**RecipeDaylightFactorGridbasedUuidPut**](DaylightFactorApi.md#recipedaylightfactorgridbaseduuidput) | **PUT** /recipe/daylight_factor/gridbased/{uuid} | Modify an existing analysis_grid file


<a name="recipedaylightfactorgridbasedpost"></a>
# **RecipeDaylightFactorGridbasedPost**
> InlineResponse204 RecipeDaylightFactorGridbasedPost (DaylightFactorGridBasedSchema recipe)

Create a new analysis_grid file

Adds a new analysis_grid file to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeDaylightFactorGridbasedPostExample
    {
        public void main()
        {
            var apiInstance = new DaylightFactorApi();
            var recipe = new DaylightFactorGridBasedSchema(); // DaylightFactorGridBasedSchema | A analysis_grid JSON filer with a uuid key.

            try
            {
                // Create a new analysis_grid file
                InlineResponse204 result = apiInstance.RecipeDaylightFactorGridbasedPost(recipe);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DaylightFactorApi.RecipeDaylightFactorGridbasedPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**DaylightFactorGridBasedSchema**](DaylightFactorGridBasedSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recipedaylightfactorgridbaseduuidput"></a>
# **RecipeDaylightFactorGridbasedUuidPut**
> void RecipeDaylightFactorGridbasedUuidPut (string uuid, DaylightFactorGridBasedSchema recipe)

Modify an existing analysis_grid file

Modifies any parameter (except uuid) of a daylight_factor recipe object by completely replacing the definition file. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RecipeDaylightFactorGridbasedUuidPutExample
    {
        public void main()
        {
            var apiInstance = new DaylightFactorApi();
            var uuid = uuid_example;  // string | The unique identifier of the daylight_factor recipe.
            var recipe = new DaylightFactorGridBasedSchema(); // DaylightFactorGridBasedSchema | A analysis_grid JSON filer with a uuid key.

            try
            {
                // Modify an existing analysis_grid file
                apiInstance.RecipeDaylightFactorGridbasedUuidPut(uuid, recipe);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DaylightFactorApi.RecipeDaylightFactorGridbasedUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the daylight_factor recipe. | 
 **recipe** | [**DaylightFactorGridBasedSchema**](DaylightFactorGridBasedSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

