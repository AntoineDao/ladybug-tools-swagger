# IO.Swagger.Api.TranslucentMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MaterialTranslucentPost**](TranslucentMaterialApi.md#materialtranslucentpost) | **POST** /material/translucent | Create a new translucent material object
[**MaterialTranslucentUuidPut**](TranslucentMaterialApi.md#materialtranslucentuuidput) | **PUT** /material/translucent/{uuid} | Modify an existing translucent material file


<a name="materialtranslucentpost"></a>
# **MaterialTranslucentPost**
> InlineResponse204 MaterialTranslucentPost (TranslucentMaterialSchema translucentMaterial)

Create a new translucent material object

Adds a new translucent material object to the database

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MaterialTranslucentPostExample
    {
        public void main()
        {
            var apiInstance = new TranslucentMaterialApi();
            var translucentMaterial = new TranslucentMaterialSchema(); // TranslucentMaterialSchema | a translucent material object

            try
            {
                // Create a new translucent material object
                InlineResponse204 result = apiInstance.MaterialTranslucentPost(translucentMaterial);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TranslucentMaterialApi.MaterialTranslucentPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translucentMaterial** | [**TranslucentMaterialSchema**](TranslucentMaterialSchema.md)| a translucent material object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="materialtranslucentuuidput"></a>
# **MaterialTranslucentUuidPut**
> void MaterialTranslucentUuidPut (string uuid, TranslucentMaterialSchema translucentMaterial)

Modify an existing translucent material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MaterialTranslucentUuidPutExample
    {
        public void main()
        {
            var apiInstance = new TranslucentMaterialApi();
            var uuid = uuid_example;  // string | The unique identifier of the material.
            var translucentMaterial = new TranslucentMaterialSchema(); // TranslucentMaterialSchema | a translucent material object

            try
            {
                // Modify an existing translucent material file
                apiInstance.MaterialTranslucentUuidPut(uuid, translucentMaterial);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TranslucentMaterialApi.MaterialTranslucentUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the material. | 
 **translucentMaterial** | [**TranslucentMaterialSchema**](TranslucentMaterialSchema.md)| a translucent material object | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

