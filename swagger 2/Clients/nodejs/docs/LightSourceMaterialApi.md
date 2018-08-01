# HoneybeeServerApi.LightSourceMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**materialLightSourcePost**](LightSourceMaterialApi.md#materialLightSourcePost) | **POST** /material/light_source | Create a new light_source material object
[**materialLightSourceUuidPut**](LightSourceMaterialApi.md#materialLightSourceUuidPut) | **PUT** /material/light_source/{uuid} | Modify an existing light_source material file


<a name="materialLightSourcePost"></a>
# **materialLightSourcePost**
> InlineResponse204 materialLightSourcePost(lightSourceMaterial)

Create a new light_source material object

Adds a new light_source material object to the database

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.LightSourceMaterialApi();

var lightSourceMaterial = new HoneybeeServerApi.LightSourceMaterialSchema(); // LightSourceMaterialSchema | a light_source material object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.materialLightSourcePost(lightSourceMaterial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lightSourceMaterial** | [**LightSourceMaterialSchema**](LightSourceMaterialSchema.md)| a light_source material object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="materialLightSourceUuidPut"></a>
# **materialLightSourceUuidPut**
> materialLightSourceUuidPut(uuid, lightSourceMaterial)

Modify an existing light_source material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.LightSourceMaterialApi();

var uuid = "uuid_example"; // String | The unique identifier of the material.

var lightSourceMaterial = new HoneybeeServerApi.LightSourceMaterialSchema(); // LightSourceMaterialSchema | a light_source material object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.materialLightSourceUuidPut(uuid, lightSourceMaterial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the material. | 
 **lightSourceMaterial** | [**LightSourceMaterialSchema**](LightSourceMaterialSchema.md)| a light_source material object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

