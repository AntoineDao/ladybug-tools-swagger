# HoneybeeServerApi.ThreePhaseRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeThreePhaseGridbasedPost**](ThreePhaseRecipeApi.md#recipeThreePhaseGridbasedPost) | **POST** /recipe/three_phase/gridbased | Create a new three_phase object
[**recipeThreePhaseGridbasedUuidPut**](ThreePhaseRecipeApi.md#recipeThreePhaseGridbasedUuidPut) | **PUT** /recipe/three_phase/gridbased/{uuid} | Modify an existing three_phase object


<a name="recipeThreePhaseGridbasedPost"></a>
# **recipeThreePhaseGridbasedPost**
> InlineResponse204 recipeThreePhaseGridbasedPost(recipe)

Create a new three_phase object

Adds a new three_phase object to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.ThreePhaseRecipeApi();

var recipe = new HoneybeeServerApi.ThreePhaselGridBasedSchema(); // ThreePhaselGridBasedSchema | A three_phase JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipeThreePhaseGridbasedPost(recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**ThreePhaselGridBasedSchema**](ThreePhaselGridBasedSchema.md)| A three_phase JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="recipeThreePhaseGridbasedUuidPut"></a>
# **recipeThreePhaseGridbasedUuidPut**
> recipeThreePhaseGridbasedUuidPut(uuid, recipe)

Modify an existing three_phase object

Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.ThreePhaseRecipeApi();

var uuid = "uuid_example"; // String | The unique identifier of the three_phase recipe.

var recipe = new HoneybeeServerApi.ThreePhaselGridBasedSchema(); // ThreePhaselGridBasedSchema | A three_phase JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.recipeThreePhaseGridbasedUuidPut(uuid, recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the three_phase recipe. | 
 **recipe** | [**ThreePhaselGridBasedSchema**](ThreePhaselGridBasedSchema.md)| A three_phase JSON objectr with a uuid key. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

