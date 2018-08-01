# IO.Swagger.Api.WEAApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**WeaGet**](WEAApi.md#weaget) | **GET** /wea | Get a list of WEA objects
[**WeaPost**](WEAApi.md#weapost) | **POST** /wea | Create a new wea object
[**WeaUuidDelete**](WEAApi.md#weauuiddelete) | **DELETE** /wea/{uuid} | Delete an existing wea object
[**WeaUuidGet**](WEAApi.md#weauuidget) | **GET** /wea/{uuid} | Get a specific wea object
[**WeaUuidPut**](WEAApi.md#weauuidput) | **PUT** /wea/{uuid} | Modify an existing wea object


<a name="weaget"></a>
# **WeaGet**
> InlineResponse2009 WeaGet (string country = null)

Get a list of WEA objects

Retrieves a list of wea objects for a given filter.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class WeaGetExample
    {
        public void main()
        {
            var apiInstance = new WEAApi();
            var country = country_example;  // string | The countyr the EPW is from (optional) 

            try
            {
                // Get a list of WEA objects
                InlineResponse2009 result = apiInstance.WeaGet(country);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling WEAApi.WeaGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **string**| The countyr the EPW is from | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="weapost"></a>
# **WeaPost**
> InlineResponse204 WeaPost (WeaSchema wea)

Create a new wea object

Adds a new wea object to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class WeaPostExample
    {
        public void main()
        {
            var apiInstance = new WEAApi();
            var wea = new WeaSchema(); // WeaSchema | a wea object

            try
            {
                // Create a new wea object
                InlineResponse204 result = apiInstance.WeaPost(wea);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling WEAApi.WeaPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wea** | [**WeaSchema**](WeaSchema.md)| a wea object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="weauuiddelete"></a>
# **WeaUuidDelete**
> void WeaUuidDelete (string uuid)

Delete an existing wea object

Delete an wea object in the database specifying the uuid of the object

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class WeaUuidDeleteExample
    {
        public void main()
        {
            var apiInstance = new WEAApi();
            var uuid = uuid_example;  // string | The unique identifier of the wea.

            try
            {
                // Delete an existing wea object
                apiInstance.WeaUuidDelete(uuid);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling WEAApi.WeaUuidDelete: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the wea. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="weauuidget"></a>
# **WeaUuidGet**
> InlineResponse20010 WeaUuidGet (string uuid)

Get a specific wea object

Returns a single wea object

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class WeaUuidGetExample
    {
        public void main()
        {
            var apiInstance = new WEAApi();
            var uuid = uuid_example;  // string | The unique identifier of the wea.

            try
            {
                // Get a specific wea object
                InlineResponse20010 result = apiInstance.WeaUuidGet(uuid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling WEAApi.WeaUuidGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the wea. | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="weauuidput"></a>
# **WeaUuidPut**
> void WeaUuidPut (string uuid, WeaSchema wea)

Modify an existing wea object

Modifies any parameter (except uuid) of an wea object by completely replacing the wea object. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class WeaUuidPutExample
    {
        public void main()
        {
            var apiInstance = new WEAApi();
            var uuid = uuid_example;  // string | The unique identifier of the wea.
            var wea = new WeaSchema(); // WeaSchema | a wea object

            try
            {
                // Modify an existing wea object
                apiInstance.WeaUuidPut(uuid, wea);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling WEAApi.WeaUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the wea. | 
 **wea** | [**WeaSchema**](WeaSchema.md)| a wea object | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

