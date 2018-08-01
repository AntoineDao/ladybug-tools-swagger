# IO.Swagger.Api.BSDFMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MaterialBsdfPost**](BSDFMaterialApi.md#materialbsdfpost) | **POST** /material/bsdf | Create a new bsdf material object
[**MaterialBsdfUuidPut**](BSDFMaterialApi.md#materialbsdfuuidput) | **PUT** /material/bsdf/{uuid} | Modify an existing bsdf material file


<a name="materialbsdfpost"></a>
# **MaterialBsdfPost**
> InlineResponse204 MaterialBsdfPost (BSDFMaterialSchema bsdfMaterial)

Create a new bsdf material object

Adds a new bsdf material object to the database

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MaterialBsdfPostExample
    {
        public void main()
        {
            var apiInstance = new BSDFMaterialApi();
            var bsdfMaterial = new BSDFMaterialSchema(); // BSDFMaterialSchema | a bsdf material object

            try
            {
                // Create a new bsdf material object
                InlineResponse204 result = apiInstance.MaterialBsdfPost(bsdfMaterial);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling BSDFMaterialApi.MaterialBsdfPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bsdfMaterial** | [**BSDFMaterialSchema**](BSDFMaterialSchema.md)| a bsdf material object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="materialbsdfuuidput"></a>
# **MaterialBsdfUuidPut**
> void MaterialBsdfUuidPut (string uuid, BSDFMaterialSchema bsdfMaterial)

Modify an existing bsdf material file

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
    public class MaterialBsdfUuidPutExample
    {
        public void main()
        {
            var apiInstance = new BSDFMaterialApi();
            var uuid = uuid_example;  // string | The unique identifier of the material.
            var bsdfMaterial = new BSDFMaterialSchema(); // BSDFMaterialSchema | a bsdf material object

            try
            {
                // Modify an existing bsdf material file
                apiInstance.MaterialBsdfUuidPut(uuid, bsdfMaterial);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling BSDFMaterialApi.MaterialBsdfUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the material. | 
 **bsdfMaterial** | [**BSDFMaterialSchema**](BSDFMaterialSchema.md)| a bsdf material object | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

