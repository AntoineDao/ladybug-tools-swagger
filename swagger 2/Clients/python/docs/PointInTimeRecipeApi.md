# swagger_client.PointInTimeRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_point_in_time_gridbased_post**](PointInTimeRecipeApi.md#recipe_point_in_time_gridbased_post) | **POST** /recipe/point_in_time/gridbased | Create a new point_in_time object
[**recipe_point_in_time_gridbased_uuid_put**](PointInTimeRecipeApi.md#recipe_point_in_time_gridbased_uuid_put) | **PUT** /recipe/point_in_time/gridbased/{uuid} | Modify an existing point_in_time object


# **recipe_point_in_time_gridbased_post**
> InlineResponse204 recipe_point_in_time_gridbased_post(recipe)

Create a new point_in_time object

Adds a new point_in_time object to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PointInTimeRecipeApi()
recipe = swagger_client.PointInTimeGridBasedSchema() # PointInTimeGridBasedSchema | A point_in_time JSON objectr with a uuid key.

try:
    # Create a new point_in_time object
    api_response = api_instance.recipe_point_in_time_gridbased_post(recipe)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PointInTimeRecipeApi->recipe_point_in_time_gridbased_post: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_point_in_time_gridbased_uuid_put**
> recipe_point_in_time_gridbased_uuid_put(uuid, recipe)

Modify an existing point_in_time object

Modifies any parameter (except uuid) of a point_in_time recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PointInTimeRecipeApi()
uuid = 'uuid_example' # str | The unique identifier of the point_in_time recipe.
recipe = swagger_client.PointInTimeGridBasedSchema() # PointInTimeGridBasedSchema | A analysis_grid JSON objectr with a uuid key.

try:
    # Modify an existing point_in_time object
    api_instance.recipe_point_in_time_gridbased_uuid_put(uuid, recipe)
except ApiException as e:
    print("Exception when calling PointInTimeRecipeApi->recipe_point_in_time_gridbased_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the point_in_time recipe. | 
 **recipe** | [**PointInTimeGridBasedSchema**](PointInTimeGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

