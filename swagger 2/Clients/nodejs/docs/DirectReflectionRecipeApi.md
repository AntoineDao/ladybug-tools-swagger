# HoneybeeServerApi.DirectReflectionRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeDirectReflectionGridbasedPost**](DirectReflectionRecipeApi.md#recipeDirectReflectionGridbasedPost) | **POST** /recipe/direct_reflection/gridbased | Create a new direct_reflection object
[**recipeDirectReflectionGridbasedUuidPut**](DirectReflectionRecipeApi.md#recipeDirectReflectionGridbasedUuidPut) | **PUT** /recipe/direct_reflection/gridbased/{uuid} | Modify an existing direct_reflection object


<a name="recipeDirectReflectionGridbasedPost"></a>
# **recipeDirectReflectionGridbasedPost**
> InlineResponse204 recipeDirectReflectionGridbasedPost(recipe)

Create a new direct_reflection object

Adds a new direct_reflection object to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.DirectReflectionRecipeApi();

var recipe = new HoneybeeServerApi.DirectReflectionGridBasedSchema(); // DirectReflectionGridBasedSchema | A direct_reflection JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipeDirectReflectionGridbasedPost(recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**DirectReflectionGridBasedSchema**](DirectReflectionGridBasedSchema.md)| A direct_reflection JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="recipeDirectReflectionGridbasedUuidPut"></a>
# **recipeDirectReflectionGridbasedUuidPut**
> recipeDirectReflectionGridbasedUuidPut(uuid, recipe)

Modify an existing direct_reflection object

Modifies any parameter (except uuid) of a direct_reflection recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.DirectReflectionRecipeApi();

var uuid = "uuid_example"; // String | The unique identifier of the direct_reflection recipe.

var recipe = new HoneybeeServerApi.DirectReflectionGridBasedSchema(); // DirectReflectionGridBasedSchema | A analysis_grid JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.recipeDirectReflectionGridbasedUuidPut(uuid, recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the direct_reflection recipe. | 
 **recipe** | [**DirectReflectionGridBasedSchema**](DirectReflectionGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

