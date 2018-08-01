# HoneybeeServerApi.HoneybeeSurfaceApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hbsurfaceGet**](HoneybeeSurfaceApi.md#hbsurfaceGet) | **GET** /hbsurface | Get a list of hbsurface objects
[**hbsurfacePost**](HoneybeeSurfaceApi.md#hbsurfacePost) | **POST** /hbsurface | Create a new hbsurface object
[**hbsurfaceUuidDelete**](HoneybeeSurfaceApi.md#hbsurfaceUuidDelete) | **DELETE** /hbsurface/{uuid} | Delete an existing hbsurface object
[**hbsurfaceUuidGet**](HoneybeeSurfaceApi.md#hbsurfaceUuidGet) | **GET** /hbsurface/{uuid} | Get a specific hbsurface object
[**hbsurfaceUuidPut**](HoneybeeSurfaceApi.md#hbsurfaceUuidPut) | **PUT** /hbsurface/{uuid} | Modify an existing hbsurface object


<a name="hbsurfaceGet"></a>
# **hbsurfaceGet**
> InlineResponse2007 hbsurfaceGet(opts)

Get a list of hbsurface objects

Retrieves a list of HoneyBee Surface objects for a given filter.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.HoneybeeSurfaceApi();

var opts = { 
  'surfaceType': "surfaceType_example", // String | The type of the surface to be queried
  'surfaceMaterial': "surfaceMaterial_example", // String | retrieve surfaces based on the name of their main material definiton (not materials in a given surface state)
  'surfaceState': "surfaceState_example" // String | retrieve a surface using the name of a given state it contains
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.hbsurfaceGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surfaceType** | **String**| The type of the surface to be queried | [optional] 
 **surfaceMaterial** | **String**| retrieve surfaces based on the name of their main material definiton (not materials in a given surface state) | [optional] 
 **surfaceState** | **String**| retrieve a surface using the name of a given state it contains | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="hbsurfacePost"></a>
# **hbsurfacePost**
> InlineResponse204 hbsurfacePost(hbsurface)

Create a new hbsurface object

Adds a new hbsurface object to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.HoneybeeSurfaceApi();

var hbsurface = new HoneybeeServerApi.HBSurfaceSchema(); // HBSurfaceSchema | A hbsurface JSON object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.hbsurfacePost(hbsurface, callback);
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

<a name="hbsurfaceUuidDelete"></a>
# **hbsurfaceUuidDelete**
> hbsurfaceUuidDelete(uuid)

Delete an existing hbsurface object

Delete an hbsurface object in the database specifying the uuid of the object

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.HoneybeeSurfaceApi();

var uuid = "uuid_example"; // String | The unique identifier of the hbsurface.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.hbsurfaceUuidDelete(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the hbsurface. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="hbsurfaceUuidGet"></a>
# **hbsurfaceUuidGet**
> InlineResponse2008 hbsurfaceUuidGet(uuid)

Get a specific hbsurface object

Returns a single hbsurface object

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.HoneybeeSurfaceApi();

var uuid = "uuid_example"; // String | The unique identifier of the hbsurface.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.hbsurfaceUuidGet(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the hbsurface. | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="hbsurfaceUuidPut"></a>
# **hbsurfaceUuidPut**
> hbsurfaceUuidPut(uuidhbsurface)

Modify an existing hbsurface object

Modifies any parameter (except uuid) of an hbsurface object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.HoneybeeSurfaceApi();

var uuid = "uuid_example"; // String | The unique identifier of the hbsurface.

var hbsurface = new HoneybeeServerApi.HBSurfaceSchema(); // HBSurfaceSchema | A hbsurface JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.hbsurfaceUuidPut(uuidhbsurface, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the hbsurface. | 
 **hbsurface** | [**HBSurfaceSchema**](HBSurfaceSchema.md)| A hbsurface JSON objectr with a uuid key. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

