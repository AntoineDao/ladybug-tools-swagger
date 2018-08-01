# HoneybeeServerApi.DaylightFactorRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeDaylightFactorGridbasedPost**](DaylightFactorRecipeApi.md#recipeDaylightFactorGridbasedPost) | **POST** /recipe/daylight_factor/gridbased | Create a new analysis_grid object
[**recipeDaylightFactorGridbasedUuidPut**](DaylightFactorRecipeApi.md#recipeDaylightFactorGridbasedUuidPut) | **PUT** /recipe/daylight_factor/gridbased/{uuid} | Modify an existing analysis_grid object


<a name="recipeDaylightFactorGridbasedPost"></a>
# **recipeDaylightFactorGridbasedPost**
> InlineResponse204 recipeDaylightFactorGridbasedPost(recipe)

Create a new analysis_grid object

Adds a new analysis_grid object to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.DaylightFactorRecipeApi();

var recipe = new HoneybeeServerApi.DaylightFactorGridBasedSchema(); // DaylightFactorGridBasedSchema | A analysis_grid JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipeDaylightFactorGridbasedPost(recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**DaylightFactorGridBasedSchema**](DaylightFactorGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="recipeDaylightFactorGridbasedUuidPut"></a>
# **recipeDaylightFactorGridbasedUuidPut**
> recipeDaylightFactorGridbasedUuidPut(uuid, recipe)

Modify an existing analysis_grid object

Modifies any parameter (except uuid) of a daylight_factor recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.DaylightFactorRecipeApi();

var uuid = "uuid_example"; // String | The unique identifier of the daylight_factor recipe.

var recipe = new HoneybeeServerApi.DaylightFactorGridBasedSchema(); // DaylightFactorGridBasedSchema | A analysis_grid JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.recipeDaylightFactorGridbasedUuidPut(uuid, recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the daylight_factor recipe. | 
 **recipe** | [**DaylightFactorGridBasedSchema**](DaylightFactorGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

