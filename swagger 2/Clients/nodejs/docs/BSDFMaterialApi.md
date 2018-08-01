# HoneybeeServerApi.BSDFMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**materialBsdfPost**](BSDFMaterialApi.md#materialBsdfPost) | **POST** /material/bsdf | Create a new bsdf material object
[**materialBsdfUuidPut**](BSDFMaterialApi.md#materialBsdfUuidPut) | **PUT** /material/bsdf/{uuid} | Modify an existing bsdf material file


<a name="materialBsdfPost"></a>
# **materialBsdfPost**
> InlineResponse204 materialBsdfPost(bsdfMaterial)

Create a new bsdf material object

Adds a new bsdf material object to the database

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.BSDFMaterialApi();

var bsdfMaterial = new HoneybeeServerApi.BSDFMaterialSchema(); // BSDFMaterialSchema | a bsdf material object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.materialBsdfPost(bsdfMaterial, callback);
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

<a name="materialBsdfUuidPut"></a>
# **materialBsdfUuidPut**
> materialBsdfUuidPut(uuid, bsdfMaterial)

Modify an existing bsdf material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.BSDFMaterialApi();

var uuid = "uuid_example"; // String | The unique identifier of the material.

var bsdfMaterial = new HoneybeeServerApi.BSDFMaterialSchema(); // BSDFMaterialSchema | a bsdf material object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.materialBsdfUuidPut(uuid, bsdfMaterial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the material. | 
 **bsdfMaterial** | [**BSDFMaterialSchema**](BSDFMaterialSchema.md)| a bsdf material object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

