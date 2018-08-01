# HoneybeeServerApi.AnalysisGridApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analysisGridGet**](AnalysisGridApi.md#analysisGridGet) | **GET** /analysis_grid | Get a list of analysis_grid objects
[**analysisGridPost**](AnalysisGridApi.md#analysisGridPost) | **POST** /analysis_grid | Create a new analysis_grid file
[**analysisGridUuidDelete**](AnalysisGridApi.md#analysisGridUuidDelete) | **DELETE** /analysis_grid/{uuid} | Delete an existing analysis_grid file
[**analysisGridUuidGet**](AnalysisGridApi.md#analysisGridUuidGet) | **GET** /analysis_grid/{uuid} | Get an analysis_grid object
[**analysisGridUuidPut**](AnalysisGridApi.md#analysisGridUuidPut) | **PUT** /analysis_grid/{uuid} | Modify an existing analysis_grid file


<a name="analysisGridGet"></a>
# **analysisGridGet**
> InlineResponse200 analysisGridGet(opts)

Get a list of analysis_grid objects

Retrieves a list of analysis grids for a given filter.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.AnalysisGridApi();

var opts = { 
  'gridName': "gridName_example", // String | The name of the grid
  'minPoints': 56, // Number | The minimum amount of points the analysis grid has
  'maxPoints': 56 // Number | The maximum amount of points the analysis grid has
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analysisGridGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridName** | **String**| The name of the grid | [optional] 
 **minPoints** | **Number**| The minimum amount of points the analysis grid has | [optional] 
 **maxPoints** | **Number**| The maximum amount of points the analysis grid has | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="analysisGridPost"></a>
# **analysisGridPost**
> InlineResponse204 analysisGridPost(analysisGrid)

Create a new analysis_grid file

Adds a new analysis_grid file to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.AnalysisGridApi();

var analysisGrid = new HoneybeeServerApi.AnalysisGridSchema(); // AnalysisGridSchema | A analysis_grid JSON filer with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analysisGridPost(analysisGrid, callback);
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

<a name="analysisGridUuidDelete"></a>
# **analysisGridUuidDelete**
> analysisGridUuidDelete(uuid)

Delete an existing analysis_grid file

Delete an analysis_grid file in the database specifying the uuid of the file

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.AnalysisGridApi();

var uuid = "uuid_example"; // String | The unique identifier of the analysis_grid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.analysisGridUuidDelete(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the analysis_grid. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="analysisGridUuidGet"></a>
# **analysisGridUuidGet**
> InlineResponse2001 analysisGridUuidGet(uuid)

Get an analysis_grid object

Returns a single analysis_grid object based on the provided uuid

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.AnalysisGridApi();

var uuid = "uuid_example"; // String | The unique identifier of the analysis_grid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analysisGridUuidGet(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the analysis_grid. | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="analysisGridUuidPut"></a>
# **analysisGridUuidPut**
> analysisGridUuidPut(uuidanalysisGrid)

Modify an existing analysis_grid file

Modifies any parameter (except uuid) of an analysis_grid file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.AnalysisGridApi();

var uuid = "uuid_example"; // String | The unique identifier of the analysis_grid.

var analysisGrid = new HoneybeeServerApi.AnalysisGridSchema(); // AnalysisGridSchema | A analysis_grid JSON filer with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.analysisGridUuidPut(uuidanalysisGrid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the analysis_grid. | 
 **analysisGrid** | [**AnalysisGridSchema**](AnalysisGridSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

