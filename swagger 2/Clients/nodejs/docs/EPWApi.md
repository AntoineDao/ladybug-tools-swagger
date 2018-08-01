# HoneybeeServerApi.EPWApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**epwGet**](EPWApi.md#epwGet) | **GET** /epw | Get a list of EPW objects
[**epwPost**](EPWApi.md#epwPost) | **POST** /epw | Create a new epw file
[**epwUuidDelete**](EPWApi.md#epwUuidDelete) | **DELETE** /epw/{uuid} | Delete an existing epw file
[**epwUuidGet**](EPWApi.md#epwUuidGet) | **GET** /epw/{uuid} | Get a specific epw file
[**epwUuidPut**](EPWApi.md#epwUuidPut) | **PUT** /epw/{uuid} | Modify an existing epw file


<a name="epwGet"></a>
# **epwGet**
> InlineResponse2002 epwGet(opts)

Get a list of EPW objects

Retrieves a list of epw objects for a given filter.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.EPWApi();

var opts = { 
  'country': "country_example" // String | The countyr the EPW is from
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.epwGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| The countyr the EPW is from | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="epwPost"></a>
# **epwPost**
> InlineResponse204 epwPost(epw)

Create a new epw file

Adds a new epw file to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.EPWApi();

var epw = new HoneybeeServerApi.EpwSchema(); // EpwSchema | The location of the epw.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.epwPost(epw, callback);
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

<a name="epwUuidDelete"></a>
# **epwUuidDelete**
> epwUuidDelete(uuid)

Delete an existing epw file

Delete an epw file in the database specifying the uuid of the file

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.EPWApi();

var uuid = "uuid_example"; // String | The unique identifier of the epw.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.epwUuidDelete(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the epw. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="epwUuidGet"></a>
# **epwUuidGet**
> InlineResponse2003 epwUuidGet(uuid)

Get a specific epw file

Returns a single epw file

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.EPWApi();

var uuid = "uuid_example"; // String | The unique identifier of the epw.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.epwUuidGet(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the epw. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="epwUuidPut"></a>
# **epwUuidPut**
> epwUuidPut(uuidepw)

Modify an existing epw file

Modifies any parameter (except uuid) of an epw file by completely replacing the EPW file. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.EPWApi();

var uuid = "uuid_example"; // String | The unique identifier of the epw.

var epw = new HoneybeeServerApi.EpwSchema(); // EpwSchema | The location of the epw.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.epwUuidPut(uuidepw, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the epw. | 
 **epw** | [**EpwSchema**](EpwSchema.md)| The location of the epw. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

