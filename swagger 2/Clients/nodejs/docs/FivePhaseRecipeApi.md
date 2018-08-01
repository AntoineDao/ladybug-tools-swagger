# HoneybeeServerApi.FivePhaseRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeFivePhaseGridbasedPost**](FivePhaseRecipeApi.md#recipeFivePhaseGridbasedPost) | **POST** /recipe/five_phase/gridbased | Create a new five_phase object
[**recipeFivePhaseGridbasedUuidPut**](FivePhaseRecipeApi.md#recipeFivePhaseGridbasedUuidPut) | **PUT** /recipe/five_phase/gridbased/{uuid} | Modify an existing five_phase object


<a name="recipeFivePhaseGridbasedPost"></a>
# **recipeFivePhaseGridbasedPost**
> InlineResponse204 recipeFivePhaseGridbasedPost(recipe)

Create a new five_phase object

Adds a new five_phase object to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.FivePhaseRecipeApi();

var recipe = new HoneybeeServerApi.FivePhaselGridBasedSchema(); // FivePhaselGridBasedSchema | A five_phase JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipeFivePhaseGridbasedPost(recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**FivePhaselGridBasedSchema**](FivePhaselGridBasedSchema.md)| A five_phase JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="recipeFivePhaseGridbasedUuidPut"></a>
# **recipeFivePhaseGridbasedUuidPut**
> recipeFivePhaseGridbasedUuidPut(uuid, recipe)

Modify an existing five_phase object

Modifies any parameter (except uuid) of a five_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.FivePhaseRecipeApi();

var uuid = "uuid_example"; // String | The unique identifier of the five_phase recipe.

var recipe = new HoneybeeServerApi.FivePhaselGridBasedSchema(); // FivePhaselGridBasedSchema | A five_phase JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.recipeFivePhaseGridbasedUuidPut(uuid, recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the five_phase recipe. | 
 **recipe** | [**FivePhaselGridBasedSchema**](FivePhaselGridBasedSchema.md)| A five_phase JSON objectr with a uuid key. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

