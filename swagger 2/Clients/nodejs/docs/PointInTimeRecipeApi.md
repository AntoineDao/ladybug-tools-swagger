# HoneybeeServerApi.PointInTimeRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipePointInTimeGridbasedPost**](PointInTimeRecipeApi.md#recipePointInTimeGridbasedPost) | **POST** /recipe/point_in_time/gridbased | Create a new point_in_time object
[**recipePointInTimeGridbasedUuidPut**](PointInTimeRecipeApi.md#recipePointInTimeGridbasedUuidPut) | **PUT** /recipe/point_in_time/gridbased/{uuid} | Modify an existing point_in_time object


<a name="recipePointInTimeGridbasedPost"></a>
# **recipePointInTimeGridbasedPost**
> InlineResponse204 recipePointInTimeGridbasedPost(recipe)

Create a new point_in_time object

Adds a new point_in_time object to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.PointInTimeRecipeApi();

var recipe = new HoneybeeServerApi.PointInTimeGridBasedSchema(); // PointInTimeGridBasedSchema | A point_in_time JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipePointInTimeGridbasedPost(recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**PointInTimeGridBasedSchema**](PointInTimeGridBasedSchema.md)| A point_in_time JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="recipePointInTimeGridbasedUuidPut"></a>
# **recipePointInTimeGridbasedUuidPut**
> recipePointInTimeGridbasedUuidPut(uuid, recipe)

Modify an existing point_in_time object

Modifies any parameter (except uuid) of a point_in_time recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.PointInTimeRecipeApi();

var uuid = "uuid_example"; // String | The unique identifier of the point_in_time recipe.

var recipe = new HoneybeeServerApi.PointInTimeGridBasedSchema(); // PointInTimeGridBasedSchema | A analysis_grid JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.recipePointInTimeGridbasedUuidPut(uuid, recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the point_in_time recipe. | 
 **recipe** | [**PointInTimeGridBasedSchema**](PointInTimeGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

