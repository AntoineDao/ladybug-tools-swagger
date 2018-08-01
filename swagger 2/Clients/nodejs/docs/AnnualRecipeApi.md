# HoneybeeServerApi.AnnualRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeAnnualGridbasedPost**](AnnualRecipeApi.md#recipeAnnualGridbasedPost) | **POST** /recipe/annual/gridbased | Create a new annual object
[**recipeAnnualGridbasedUuidPut**](AnnualRecipeApi.md#recipeAnnualGridbasedUuidPut) | **PUT** /recipe/annual/gridbased/{uuid} | Modify an existing annual object


<a name="recipeAnnualGridbasedPost"></a>
# **recipeAnnualGridbasedPost**
> InlineResponse204 recipeAnnualGridbasedPost(recipe)

Create a new annual object

Adds a new annual object to the list

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.AnnualRecipeApi();

var recipe = new HoneybeeServerApi.AnnualGridBasedSchema(); // AnnualGridBasedSchema | A annual JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipeAnnualGridbasedPost(recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**AnnualGridBasedSchema**](AnnualGridBasedSchema.md)| A annual JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="recipeAnnualGridbasedUuidPut"></a>
# **recipeAnnualGridbasedUuidPut**
> recipeAnnualGridbasedUuidPut(uuid, recipe)

Modify an existing annual object

Modifies any parameter (except uuid) of a annual recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var apiInstance = new HoneybeeServerApi.AnnualRecipeApi();

var uuid = "uuid_example"; // String | The unique identifier of the annual recipe.

var recipe = new HoneybeeServerApi.AnnualGridBasedSchema(); // AnnualGridBasedSchema | A annual JSON objectr with a uuid key.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.recipeAnnualGridbasedUuidPut(uuid, recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The unique identifier of the annual recipe. | 
 **recipe** | [**AnnualGridBasedSchema**](AnnualGridBasedSchema.md)| A annual JSON objectr with a uuid key. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

