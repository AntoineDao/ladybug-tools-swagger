# IO.Swagger.Api.AnalysisGridApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AnalysisGridGet**](AnalysisGridApi.md#analysisgridget) | **GET** /analysis_grid | Get a list of analysis_grid objects
[**AnalysisGridPost**](AnalysisGridApi.md#analysisgridpost) | **POST** /analysis_grid | Create a new analysis_grid file
[**AnalysisGridUuidDelete**](AnalysisGridApi.md#analysisgriduuiddelete) | **DELETE** /analysis_grid/{uuid} | Delete an existing analysis_grid file
[**AnalysisGridUuidGet**](AnalysisGridApi.md#analysisgriduuidget) | **GET** /analysis_grid/{uuid} | Get an analysis_grid object
[**AnalysisGridUuidPut**](AnalysisGridApi.md#analysisgriduuidput) | **PUT** /analysis_grid/{uuid} | Modify an existing analysis_grid file


<a name="analysisgridget"></a>
# **AnalysisGridGet**
> InlineResponse200 AnalysisGridGet (string gridName = null, int? minPoints = null, int? maxPoints = null)

Get a list of analysis_grid objects

Retrieves a list of analysis grids for a given filter.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class AnalysisGridGetExample
    {
        public void main()
        {
            var apiInstance = new AnalysisGridApi();
            var gridName = gridName_example;  // string | The name of the grid (optional) 
            var minPoints = 56;  // int? | The minimum amount of points the analysis grid has (optional) 
            var maxPoints = 56;  // int? | The maximum amount of points the analysis grid has (optional) 

            try
            {
                // Get a list of analysis_grid objects
                InlineResponse200 result = apiInstance.AnalysisGridGet(gridName, minPoints, maxPoints);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AnalysisGridApi.AnalysisGridGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridName** | **string**| The name of the grid | [optional] 
 **minPoints** | **int?**| The minimum amount of points the analysis grid has | [optional] 
 **maxPoints** | **int?**| The maximum amount of points the analysis grid has | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="analysisgridpost"></a>
# **AnalysisGridPost**
> InlineResponse204 AnalysisGridPost (AnalysisGridSchema analysisGrid)

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
    public class AnalysisGridPostExample
    {
        public void main()
        {
            var apiInstance = new AnalysisGridApi();
            var analysisGrid = new AnalysisGridSchema(); // AnalysisGridSchema | A analysis_grid JSON filer with a uuid key.

            try
            {
                // Create a new analysis_grid file
                InlineResponse204 result = apiInstance.AnalysisGridPost(analysisGrid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AnalysisGridApi.AnalysisGridPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisGrid** | [**AnalysisGridSchema**](AnalysisGridSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="analysisgriduuiddelete"></a>
# **AnalysisGridUuidDelete**
> void AnalysisGridUuidDelete (string uuid)

Delete an existing analysis_grid file

Delete an analysis_grid file in the database specifying the uuid of the file

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class AnalysisGridUuidDeleteExample
    {
        public void main()
        {
            var apiInstance = new AnalysisGridApi();
            var uuid = uuid_example;  // string | The unique identifier of the analysis_grid.

            try
            {
                // Delete an existing analysis_grid file
                apiInstance.AnalysisGridUuidDelete(uuid);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AnalysisGridApi.AnalysisGridUuidDelete: " + e.Message );
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

<a name="analysisgriduuidget"></a>
# **AnalysisGridUuidGet**
> InlineResponse2001 AnalysisGridUuidGet (string uuid)

Get an analysis_grid object

Returns a single analysis_grid object based on the provided uuid

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class AnalysisGridUuidGetExample
    {
        public void main()
        {
            var apiInstance = new AnalysisGridApi();
            var uuid = uuid_example;  // string | The unique identifier of the analysis_grid.

            try
            {
                // Get an analysis_grid object
                InlineResponse2001 result = apiInstance.AnalysisGridUuidGet(uuid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AnalysisGridApi.AnalysisGridUuidGet: " + e.Message );
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="analysisgriduuidput"></a>
# **AnalysisGridUuidPut**
> void AnalysisGridUuidPut (string uuid, AnalysisGridSchema analysisGrid)

Modify an existing analysis_grid file

Modifies any parameter (except uuid) of an analysis_grid file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class AnalysisGridUuidPutExample
    {
        public void main()
        {
            var apiInstance = new AnalysisGridApi();
            var uuid = uuid_example;  // string | The unique identifier of the analysis_grid.
            var analysisGrid = new AnalysisGridSchema(); // AnalysisGridSchema | A analysis_grid JSON filer with a uuid key.

            try
            {
                // Modify an existing analysis_grid file
                apiInstance.AnalysisGridUuidPut(uuid, analysisGrid);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AnalysisGridApi.AnalysisGridUuidPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The unique identifier of the analysis_grid. | 
 **analysisGrid** | [**AnalysisGridSchema**](AnalysisGridSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

