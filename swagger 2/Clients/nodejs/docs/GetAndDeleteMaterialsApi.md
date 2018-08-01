# HoneybeeServerApi.GetAndDeleteMaterialsApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**materialGet**](GetAndDeleteMaterialsApi.md#materialGet) | **GET** /material | Get a list of material objects
[**materialUuidDelete**](GetAndDeleteMaterialsApi.md#materialUuidDelete) | **DELETE** /material/{uuid} | Delete an existing material file
[**materialUuidGet**](GetAndDeleteMaterialsApi.md#materialUuidGet) | **GET** /material/{uuid} | Get a specific material object


<a name="materialGet"></a>
# **materialGet**
> InlineResponse2004 materialGet(opts)

Get a list of material objects

Retrieves a list of material uuids for a given filter.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.GetAndDeleteMaterialsApi();

var opts = { 
  'materialType': "materialType_example", // String | The type of the material to be queried
  'rgbTransmittance': 8.14, // Number | The RGB average transmittance value (will only return translucent material)
  'rgbReflectance': 8.14 // Number | The RGB average reflectance value (will only return opaque material)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.materialGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **materialType** | **String**| The type of the material to be queried | [optional] 
 **rgbTransmittance** | **Number**| The RGB average transmittance value (will only return translucent material) | [optional] 
 **rgbReflectance** | **Number**| The RGB average reflectance value (will only return opaque material) | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="materialUuidDelete"></a>
# **materialUuidDelete**
> materialUuidDelete(uuid)

Delete an existing material file

Delete an material file in the database specifying the uuid of the file

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.GetAndDeleteMaterialsApi();

var uuid = "uuid_example"; // String | The unique identifier of the material.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.materialUuidDelete(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the material. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="materialUuidGet"></a>
# **materialUuidGet**
> InlineResponse2005 materialUuidGet(uuid)

Get a specific material object

Returns a single material object

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.GetAndDeleteMaterialsApi();

var uuid = "uuid_example"; // String | The unique identifier of the material.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.materialUuidGet(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the material. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

