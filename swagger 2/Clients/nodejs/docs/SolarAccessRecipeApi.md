# HoneybeeServerApi.SolarAccessRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeSolarAccessGridbasedPost**](SolarAccessRecipeApi.md#recipeSolarAccessGridbasedPost) | **POST** /recipe/solar_access/gridbased | Create a new solar_access object
[**recipeSolarAccessGridbasedUuidPut**](SolarAccessRecipeApi.md#recipeSolarAccessGridbasedUuidPut) | **PUT** /recipe/solar_access/gridbased/{uuid} | Modify an existing solar_access object


<a name="recipeSolarAccessGridbasedPost"></a>
# **recipeSolarAccessGridbasedPost**
> InlineResponse204 recipeSolarAccessGridbasedPost(recipe)

Create a new solar_access object

Adds a new solar_access object to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.SolarAccessRecipeApi();

var recipe = new HoneybeeServerApi.SolarAccessGridBasedSchema(); // SolarAccessGridBasedSchema | A solar_access JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipeSolarAccessGridbasedPost(recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**SolarAccessGridBasedSchema**](SolarAccessGridBasedSchema.md)| A solar_access JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="recipeSolarAccessGridbasedUuidPut"></a>
# **recipeSolarAccessGridbasedUuidPut**
> recipeSolarAccessGridbasedUuidPut(uuid, recipe)

Modify an existing solar_access object

Modifies any parameter (except uuid) of a solar_access recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.SolarAccessRecipeApi();

var uuid = "uuid_example"; // String | The unique identifier of the solar_access recipe.

var recipe = new HoneybeeServerApi.SolarAccessGridBasedSchema(); // SolarAccessGridBasedSchema | A solar_access JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.recipeSolarAccessGridbasedUuidPut(uuid, recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the solar_access recipe. | 
 **recipe** | [**SolarAccessGridBasedSchema**](SolarAccessGridBasedSchema.md)| A solar_access JSON objectr with a uuid key. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

