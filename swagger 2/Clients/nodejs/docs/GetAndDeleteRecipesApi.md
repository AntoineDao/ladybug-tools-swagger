# HoneybeeServerApi.GetAndDeleteRecipesApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeGet**](GetAndDeleteRecipesApi.md#recipeGet) | **GET** /recipe/ | Get a list of daylight recipe objects
[**recipeUuidDelete**](GetAndDeleteRecipesApi.md#recipeUuidDelete) | **DELETE** /recipe/{uuid} | Delete an existing recipe object
[**recipeUuidGet**](GetAndDeleteRecipesApi.md#recipeUuidGet) | **GET** /recipe/{uuid} | Get a specific analysis_grid object


<a name="recipeGet"></a>
# **recipeGet**
> InlineResponse2006 recipeGet(opts)

Get a list of daylight recipe objects

Retrieves a list of daylight recipe objects for a given filter.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.GetAndDeleteRecipesApi();

var opts = { 
  'type': "type_example", // String | The type of recipe to be retrieved
  'location': "location_example", // String | The location where the weather sky is generated from (can be country or city, will only work for climate based recipes)
  'state': "state_example" // String | The state of the recipe on the server (whether it has run, is running, has failed or is on hold)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipeGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The type of recipe to be retrieved | [optional] 
 **location** | **String**| The location where the weather sky is generated from (can be country or city, will only work for climate based recipes) | [optional] 
 **state** | **String**| The state of the recipe on the server (whether it has run, is running, has failed or is on hold) | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="recipeUuidDelete"></a>
# **recipeUuidDelete**
> recipeUuidDelete(uuid)

Delete an existing recipe object

Delete an recipe object in the database specifying the uuid of the object

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.GetAndDeleteRecipesApi();

var uuid = "uuid_example"; // String | The unique identifier of the analysis_grid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.recipeUuidDelete(uuid, callback);
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

<a name="recipeUuidGet"></a>
# **recipeUuidGet**
> GridBasedRecipeSchema recipeUuidGet(uuid)

Get a specific analysis_grid object

Returns a single analysis_grid object

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.GetAndDeleteRecipesApi();

var uuid = "uuid_example"; // String | The unique identifier of the analysis_grid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipeUuidGet(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the analysis_grid. | 

### Return type

[**GridBasedRecipeSchema**](GridBasedRecipeSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

