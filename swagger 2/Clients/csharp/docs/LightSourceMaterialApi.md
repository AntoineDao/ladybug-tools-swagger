# IO.Swagger.Api.LightSourceMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MaterialLightSourcePost**](LightSourceMaterialApi.md#materiallightsourcepost) | **POST** /material/light_source | Create a new light_source material object
[**MaterialLightSourceUuidPut**](LightSourceMaterialApi.md#materiallightsourceuuidput) | **PUT** /material/light_source/{uuid} | Modify an existing light_source material file


<a name="materiallightsourcepost"></a>
# **MaterialLightSourcePost**
> InlineResponse204 MaterialLightSourcePost (LightSourceMaterialSchema lightSourceMaterial)

Create a new light_source material object

Adds a new light_source material object to the database

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MaterialLightSourcePostExample
    {
        public void main()
        {
            var apiInstance = new LightSourceMaterialApi();
            var lightSourceMaterial = new LightSourceMaterialSchema(); // LightSourceMaterialSchema | a light_source material object

            try
            {
                // Create a new light_source material object
                InlineResponse204 result = apiInstance.MaterialLightSourcePost(lightSourceMaterial);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LightSourceMaterialApi.MaterialLightSourcePost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lightSourceMaterial** | [**LightSourceMaterialSchema**](LightSourceMaterialSchema.md)| a light_source material object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="materiallightsourceuuidput"></a>
# **MaterialLightSourceUuidPut**
> void MaterialLightSourceUuidPut (string uuid, LightSourceMaterialSchema lightSourceMaterial)

Modify an existing light_source material file

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
    public class MaterialLightSourceUuidPutExample
    {
        public void main()
        {
            var apiInstance = new LightSourceMaterialApi();
            var uuid = uuid_example;  // string | The unique identifier of the material.
            var lightSourceMaterial = new LightSourceMaterialSchema(); // LightSourceMaterialSchema | a light_source material object

            try
            {
                // Modify an existing light_source material file
                apiInstance.MaterialLightSourceUuidPut(uuid, lightSourceMaterial);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LightSourceMaterialApi.MaterialLightSourceUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the material. | 
 **lightSourceMaterial** | [**LightSourceMaterialSchema**](LightSourceMaterialSchema.md)| a light_source material object | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

