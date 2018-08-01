# HoneybeeServerApi.OpaqueMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**materialOpaquePost**](OpaqueMaterialApi.md#materialOpaquePost) | **POST** /material/opaque | Create a new opaque material object
[**materialOpaqueUuidPut**](OpaqueMaterialApi.md#materialOpaqueUuidPut) | **PUT** /material/opaque/{uuid} | Modify an existing opaque material file


<a name="materialOpaquePost"></a>
# **materialOpaquePost**
> InlineResponse204 materialOpaquePost(opaqueMaterial)

Create a new opaque material object

Adds a new opaque material object to the database

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.OpaqueMaterialApi();

var opaqueMaterial = new HoneybeeServerApi.OpaqueMaterialSchema(); // OpaqueMaterialSchema | an opaque material object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.materialOpaquePost(opaqueMaterial, callback);
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

<a name="materialOpaqueUuidPut"></a>
# **materialOpaqueUuidPut**
> materialOpaqueUuidPut(uuid, opaqueMaterial)

Modify an existing opaque material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.OpaqueMaterialApi();

var uuid = "uuid_example"; // String | The unique identifier of the material.

var opaqueMaterial = new HoneybeeServerApi.OpaqueMaterialSchema(); // OpaqueMaterialSchema | an opaque material object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.materialOpaqueUuidPut(uuid, opaqueMaterial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the material. | 
 **opaqueMaterial** | [**OpaqueMaterialSchema**](OpaqueMaterialSchema.md)| an opaque material object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

