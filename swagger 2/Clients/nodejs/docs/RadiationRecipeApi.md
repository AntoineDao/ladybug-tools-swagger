# HoneybeeServerApi.RadiationRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeRadiationGridbasedPost**](RadiationRecipeApi.md#recipeRadiationGridbasedPost) | **POST** /recipe/radiation/gridbased | Create a new radiation object
[**recipeRadiationGridbasedUuidPut**](RadiationRecipeApi.md#recipeRadiationGridbasedUuidPut) | **PUT** /recipe/radiation/gridbased/{uuid} | Modify an existing radiation object


<a name="recipeRadiationGridbasedPost"></a>
# **recipeRadiationGridbasedPost**
> InlineResponse204 recipeRadiationGridbasedPost(recipe)

Create a new radiation object

Adds a new radiation object to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.RadiationRecipeApi();

var recipe = new HoneybeeServerApi.RadiationGridBasedSchema(); // RadiationGridBasedSchema | A radiation JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipeRadiationGridbasedPost(recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**RadiationGridBasedSchema**](RadiationGridBasedSchema.md)| A radiation JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="recipeRadiationGridbasedUuidPut"></a>
# **recipeRadiationGridbasedUuidPut**
> recipeRadiationGridbasedUuidPut(uuid, recipe)

Modify an existing radiation object

Modifies any parameter (except uuid) of a radiation recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.RadiationRecipeApi();

var uuid = "uuid_example"; // String | The unique identifier of the radiation recipe.

var recipe = new HoneybeeServerApi.RadiationGridBasedSchema(); // RadiationGridBasedSchema | A radiation JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.recipeRadiationGridbasedUuidPut(uuid, recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the radiation recipe. | 
 **recipe** | [**RadiationGridBasedSchema**](RadiationGridBasedSchema.md)| A radiation JSON objectr with a uuid key. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

