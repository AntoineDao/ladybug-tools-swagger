# IO.Swagger.Api.EPWApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EpwGet**](EPWApi.md#epwget) | **GET** /epw | Get a list of EPW objects
[**EpwPost**](EPWApi.md#epwpost) | **POST** /epw | Create a new epw file
[**EpwUuidDelete**](EPWApi.md#epwuuiddelete) | **DELETE** /epw/{uuid} | Delete an existing epw file
[**EpwUuidGet**](EPWApi.md#epwuuidget) | **GET** /epw/{uuid} | Get a specific epw file
[**EpwUuidPut**](EPWApi.md#epwuuidput) | **PUT** /epw/{uuid} | Modify an existing epw file


<a name="epwget"></a>
# **EpwGet**
> InlineResponse2002 EpwGet (string country = null)

Get a list of EPW objects

Retrieves a list of epw objects for a given filter.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EpwGetExample
    {
        public void main()
        {
            var apiInstance = new EPWApi();
            var country = country_example;  // string | The countyr the EPW is from (optional) 

            try
            {
                // Get a list of EPW objects
                InlineResponse2002 result = apiInstance.EpwGet(country);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling EPWApi.EpwGet: " + e.Message );
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="epwpost"></a>
# **EpwPost**
> InlineResponse204 EpwPost (EpwSchema epw)

Create a new epw file

Adds a new epw file to the list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EpwPostExample
    {
        public void main()
        {
            var apiInstance = new EPWApi();
            var epw = new EpwSchema(); // EpwSchema | The location of the epw.

            try
            {
                // Create a new epw file
                InlineResponse204 result = apiInstance.EpwPost(epw);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling EPWApi.EpwPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **epw** | [**EpwSchema**](EpwSchema.md)| The location of the epw. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="epwuuiddelete"></a>
# **EpwUuidDelete**
> void EpwUuidDelete (string uuid)

Delete an existing epw file

Delete an epw file in the database specifying the uuid of the file

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EpwUuidDeleteExample
    {
        public void main()
        {
            var apiInstance = new EPWApi();
            var uuid = uuid_example;  // string | The unique identifier of the epw.

            try
            {
                // Delete an existing epw file
                apiInstance.EpwUuidDelete(uuid);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling EPWApi.EpwUuidDelete: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the epw. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="epwuuidget"></a>
# **EpwUuidGet**
> InlineResponse2003 EpwUuidGet (string uuid)

Get a specific epw file

Returns a single epw file

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EpwUuidGetExample
    {
        public void main()
        {
            var apiInstance = new EPWApi();
            var uuid = uuid_example;  // string | The unique identifier of the epw.

            try
            {
                // Get a specific epw file
                InlineResponse2003 result = apiInstance.EpwUuidGet(uuid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling EPWApi.EpwUuidGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the epw. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="epwuuidput"></a>
# **EpwUuidPut**
> void EpwUuidPut (string uuid, EpwSchema epw)

Modify an existing epw file

Modifies any parameter (except uuid) of an epw file by completely replacing the EPW file. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EpwUuidPutExample
    {
        public void main()
        {
            var apiInstance = new EPWApi();
            var uuid = uuid_example;  // string | The unique identifier of the epw.
            var epw = new EpwSchema(); // EpwSchema | The location of the epw.

            try
            {
                // Modify an existing epw file
                apiInstance.EpwUuidPut(uuid, epw);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling EPWApi.EpwUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the epw. | 
 **epw** | [**EpwSchema**](EpwSchema.md)| The location of the epw. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

