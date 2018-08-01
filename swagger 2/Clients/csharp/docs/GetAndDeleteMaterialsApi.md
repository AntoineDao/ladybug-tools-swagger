# IO.Swagger.Api.GetAndDeleteMaterialsApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MaterialGet**](GetAndDeleteMaterialsApi.md#materialget) | **GET** /material | Get a list of material objects
[**MaterialUuidDelete**](GetAndDeleteMaterialsApi.md#materialuuiddelete) | **DELETE** /material/{uuid} | Delete an existing material file
[**MaterialUuidGet**](GetAndDeleteMaterialsApi.md#materialuuidget) | **GET** /material/{uuid} | Get a specific material object


<a name="materialget"></a>
# **MaterialGet**
> InlineResponse2004 MaterialGet (string materialType = null, decimal? rgbTransmittance = null, decimal? rgbReflectance = null)

Get a list of material objects

Retrieves a list of material uuids for a given filter.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MaterialGetExample
    {
        public void main()
        {
            var apiInstance = new GetAndDeleteMaterialsApi();
            var materialType = materialType_example;  // string | The type of the material to be queried (optional) 
            var rgbTransmittance = 8.14;  // decimal? | The RGB average transmittance value (will only return translucent material) (optional) 
            var rgbReflectance = 8.14;  // decimal? | The RGB average reflectance value (will only return opaque material) (optional) 

            try
            {
                // Get a list of material objects
                InlineResponse2004 result = apiInstance.MaterialGet(materialType, rgbTransmittance, rgbReflectance);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GetAndDeleteMaterialsApi.MaterialGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **materialType** | **string**| The type of the material to be queried | [optional] 
 **rgbTransmittance** | **decimal?**| The RGB average transmittance value (will only return translucent material) | [optional] 
 **rgbReflectance** | **decimal?**| The RGB average reflectance value (will only return opaque material) | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="materialuuiddelete"></a>
# **MaterialUuidDelete**
> void MaterialUuidDelete (string uuid)

Delete an existing material file

Delete an material file in the database specifying the uuid of the file

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MaterialUuidDeleteExample
    {
        public void main()
        {
            var apiInstance = new GetAndDeleteMaterialsApi();
            var uuid = uuid_example;  // string | The unique identifier of the material.

            try
            {
                // Delete an existing material file
                apiInstance.MaterialUuidDelete(uuid);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GetAndDeleteMaterialsApi.MaterialUuidDelete: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the material. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="materialuuidget"></a>
# **MaterialUuidGet**
> InlineResponse2005 MaterialUuidGet (string uuid)

Get a specific material object

Returns a single material object

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MaterialUuidGetExample
    {
        public void main()
        {
            var apiInstance = new GetAndDeleteMaterialsApi();
            var uuid = uuid_example;  // string | The unique identifier of the material.

            try
            {
                // Get a specific material object
                InlineResponse2005 result = apiInstance.MaterialUuidGet(uuid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GetAndDeleteMaterialsApi.MaterialUuidGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the material. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

