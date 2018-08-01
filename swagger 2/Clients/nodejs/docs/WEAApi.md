# HoneybeeServerApi.WEAApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**weaGet**](WEAApi.md#weaGet) | **GET** /wea | Get a list of WEA objects
[**weaPost**](WEAApi.md#weaPost) | **POST** /wea | Create a new wea object
[**weaUuidDelete**](WEAApi.md#weaUuidDelete) | **DELETE** /wea/{uuid} | Delete an existing wea object
[**weaUuidGet**](WEAApi.md#weaUuidGet) | **GET** /wea/{uuid} | Get a specific wea object
[**weaUuidPut**](WEAApi.md#weaUuidPut) | **PUT** /wea/{uuid} | Modify an existing wea object


<a name="weaGet"></a>
# **weaGet**
> InlineResponse2009 weaGet(opts)

Get a list of WEA objects

Retrieves a list of wea objects for a given filter.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.WEAApi();

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
apiInstance.weaGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| The countyr the EPW is from | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="weaPost"></a>
# **weaPost**
> InlineResponse204 weaPost(wea)

Create a new wea object

Adds a new wea object to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.WEAApi();

var wea = new HoneybeeServerApi.WeaSchema(); // WeaSchema | a wea object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.weaPost(wea, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wea** | [**WeaSchema**](WeaSchema.md)| a wea object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="weaUuidDelete"></a>
# **weaUuidDelete**
> weaUuidDelete(uuid)

Delete an existing wea object

Delete an wea object in the database specifying the uuid of the object

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.WEAApi();

var uuid = "uuid_example"; // String | The unique identifier of the wea.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.weaUuidDelete(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the wea. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="weaUuidGet"></a>
# **weaUuidGet**
> InlineResponse20010 weaUuidGet(uuid)

Get a specific wea object

Returns a single wea object

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.WEAApi();

var uuid = "uuid_example"; // String | The unique identifier of the wea.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.weaUuidGet(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the wea. | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="weaUuidPut"></a>
# **weaUuidPut**
> weaUuidPut(uuidwea)

Modify an existing wea object

Modifies any parameter (except uuid) of an wea object by completely replacing the wea object. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.WEAApi();

var uuid = "uuid_example"; // String | The unique identifier of the wea.

var wea = new HoneybeeServerApi.WeaSchema(); // WeaSchema | a wea object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.weaUuidPut(uuidwea, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the wea. | 
 **wea** | [**WeaSchema**](WeaSchema.md)| a wea object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

