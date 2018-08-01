# IO.Swagger.Api.HoneybeeSurfaceApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**HbsurfaceGet**](HoneybeeSurfaceApi.md#hbsurfaceget) | **GET** /hbsurface | Get a list of hbsurface objects
[**HbsurfacePost**](HoneybeeSurfaceApi.md#hbsurfacepost) | **POST** /hbsurface | Create a new hbsurface object
[**HbsurfaceUuidDelete**](HoneybeeSurfaceApi.md#hbsurfaceuuiddelete) | **DELETE** /hbsurface/{uuid} | Delete an existing hbsurface object
[**HbsurfaceUuidGet**](HoneybeeSurfaceApi.md#hbsurfaceuuidget) | **GET** /hbsurface/{uuid} | Get a specific hbsurface object
[**HbsurfaceUuidPut**](HoneybeeSurfaceApi.md#hbsurfaceuuidput) | **PUT** /hbsurface/{uuid} | Modify an existing hbsurface object


<a name="hbsurfaceget"></a>
# **HbsurfaceGet**
> InlineResponse2007 HbsurfaceGet (string surfaceType = null, string surfaceMaterial = null, string surfaceState = null)

Get a list of hbsurface objects

Retrieves a list of HoneyBee Surface objects for a given filter.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class HbsurfaceGetExample
    {
        public void main()
        {
            var apiInstance = new HoneybeeSurfaceApi();
            var surfaceType = surfaceType_example;  // string | The type of the surface to be queried (optional) 
            var surfaceMaterial = surfaceMaterial_example;  // string | retrieve surfaces based on the name of their main material definiton (not materials in a given surface state) (optional) 
            var surfaceState = surfaceState_example;  // string | retrieve a surface using the name of a given state it contains (optional) 

            try
            {
                // Get a list of hbsurface objects
                InlineResponse2007 result = apiInstance.HbsurfaceGet(surfaceType, surfaceMaterial, surfaceState);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HoneybeeSurfaceApi.HbsurfaceGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surfaceType** | **string**| The type of the surface to be queried | [optional] 
 **surfaceMaterial** | **string**| retrieve surfaces based on the name of their main material definiton (not materials in a given surface state) | [optional] 
 **surfaceState** | **string**| retrieve a surface using the name of a given state it contains | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="hbsurfacepost"></a>
# **HbsurfacePost**
> InlineResponse204 HbsurfacePost (HBSurfaceSchema hbsurface)

Create a new hbsurface object

Adds a new hbsurface object to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class HbsurfacePostExample
    {
        public void main()
        {
            var apiInstance = new HoneybeeSurfaceApi();
            var hbsurface = new HBSurfaceSchema(); // HBSurfaceSchema | A hbsurface JSON object

            try
            {
                // Create a new hbsurface object
                InlineResponse204 result = apiInstance.HbsurfacePost(hbsurface);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HoneybeeSurfaceApi.HbsurfacePost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hbsurface** | [**HBSurfaceSchema**](HBSurfaceSchema.md)| A hbsurface JSON object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="hbsurfaceuuiddelete"></a>
# **HbsurfaceUuidDelete**
> void HbsurfaceUuidDelete (string uuid)

Delete an existing hbsurface object

Delete an hbsurface object in the database specifying the uuid of the object

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class HbsurfaceUuidDeleteExample
    {
        public void main()
        {
            var apiInstance = new HoneybeeSurfaceApi();
            var uuid = uuid_example;  // string | The unique identifier of the hbsurface.

            try
            {
                // Delete an existing hbsurface object
                apiInstance.HbsurfaceUuidDelete(uuid);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HoneybeeSurfaceApi.HbsurfaceUuidDelete: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the hbsurface. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="hbsurfaceuuidget"></a>
# **HbsurfaceUuidGet**
> InlineResponse2008 HbsurfaceUuidGet (string uuid)

Get a specific hbsurface object

Returns a single hbsurface object

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class HbsurfaceUuidGetExample
    {
        public void main()
        {
            var apiInstance = new HoneybeeSurfaceApi();
            var uuid = uuid_example;  // string | The unique identifier of the hbsurface.

            try
            {
                // Get a specific hbsurface object
                InlineResponse2008 result = apiInstance.HbsurfaceUuidGet(uuid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HoneybeeSurfaceApi.HbsurfaceUuidGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the hbsurface. | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="hbsurfaceuuidput"></a>
# **HbsurfaceUuidPut**
> void HbsurfaceUuidPut (string uuid, HBSurfaceSchema hbsurface)

Modify an existing hbsurface object

Modifies any parameter (except uuid) of an hbsurface object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class HbsurfaceUuidPutExample
    {
        public void main()
        {
            var apiInstance = new HoneybeeSurfaceApi();
            var uuid = uuid_example;  // string | The unique identifier of the hbsurface.
            var hbsurface = new HBSurfaceSchema(); // HBSurfaceSchema | A hbsurface JSON objectr with a uuid key.

            try
            {
                // Modify an existing hbsurface object
                apiInstance.HbsurfaceUuidPut(uuid, hbsurface);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HoneybeeSurfaceApi.HbsurfaceUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the hbsurface. | 
 **hbsurface** | [**HBSurfaceSchema**](HBSurfaceSchema.md)| A hbsurface JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

