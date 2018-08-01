# HoneybeeServerApi.TranslucentMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**materialTranslucentPost**](TranslucentMaterialApi.md#materialTranslucentPost) | **POST** /material/translucent | Create a new translucent material object
[**materialTranslucentUuidPut**](TranslucentMaterialApi.md#materialTranslucentUuidPut) | **PUT** /material/translucent/{uuid} | Modify an existing translucent material file


<a name="materialTranslucentPost"></a>
# **materialTranslucentPost**
> InlineResponse204 materialTranslucentPost(translucentMaterial)

Create a new translucent material object

Adds a new translucent material object to the database

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.TranslucentMaterialApi();

var translucentMaterial = new HoneybeeServerApi.TranslucentMaterialSchema(); // TranslucentMaterialSchema | a translucent material object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.materialTranslucentPost(translucentMaterial, callback);
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

<a name="materialTranslucentUuidPut"></a>
# **materialTranslucentUuidPut**
> materialTranslucentUuidPut(uuid, translucentMaterial)

Modify an existing translucent material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.TranslucentMaterialApi();

var uuid = "uuid_example"; // String | The unique identifier of the material.

var translucentMaterial = new HoneybeeServerApi.TranslucentMaterialSchema(); // TranslucentMaterialSchema | a translucent material object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.materialTranslucentUuidPut(uuid, translucentMaterial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the material. | 
 **translucentMaterial** | [**TranslucentMaterialSchema**](TranslucentMaterialSchema.md)| a translucent material object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

