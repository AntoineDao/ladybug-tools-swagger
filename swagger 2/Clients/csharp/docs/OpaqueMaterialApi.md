# IO.Swagger.Api.OpaqueMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MaterialOpaquePost**](OpaqueMaterialApi.md#materialopaquepost) | **POST** /material/opaque | Create a new opaque material object
[**MaterialOpaqueUuidPut**](OpaqueMaterialApi.md#materialopaqueuuidput) | **PUT** /material/opaque/{uuid} | Modify an existing opaque material file


<a name="materialopaquepost"></a>
# **MaterialOpaquePost**
> InlineResponse204 MaterialOpaquePost (OpaqueMaterialSchema opaqueMaterial)

Create a new opaque material object

Adds a new opaque material object to the database

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MaterialOpaquePostExample
    {
        public void main()
        {
            var apiInstance = new OpaqueMaterialApi();
            var opaqueMaterial = new OpaqueMaterialSchema(); // OpaqueMaterialSchema | an opaque material object

            try
            {
                // Create a new opaque material object
                InlineResponse204 result = apiInstance.MaterialOpaquePost(opaqueMaterial);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling OpaqueMaterialApi.MaterialOpaquePost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opaqueMaterial** | [**OpaqueMaterialSchema**](OpaqueMaterialSchema.md)| an opaque material object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="materialopaqueuuidput"></a>
# **MaterialOpaqueUuidPut**
> void MaterialOpaqueUuidPut (string uuid, OpaqueMaterialSchema opaqueMaterial)

Modify an existing opaque material file

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
    public class MaterialOpaqueUuidPutExample
    {
        public void main()
        {
            var apiInstance = new OpaqueMaterialApi();
            var uuid = uuid_example;  // string | The unique identifier of the material.
            var opaqueMaterial = new OpaqueMaterialSchema(); // OpaqueMaterialSchema | an opaque material object

            try
            {
                // Modify an existing opaque material file
                apiInstance.MaterialOpaqueUuidPut(uuid, opaqueMaterial);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling OpaqueMaterialApi.MaterialOpaqueUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the material. | 
 **opaqueMaterial** | [**OpaqueMaterialSchema**](OpaqueMaterialSchema.md)| an opaque material object | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

