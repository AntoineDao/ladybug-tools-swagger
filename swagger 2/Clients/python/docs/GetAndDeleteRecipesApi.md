# swagger_client.GetAndDeleteRecipesApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_get**](GetAndDeleteRecipesApi.md#recipe_get) | **GET** /recipe/ | Get a list of daylight recipe objects
[**recipe_uuid_delete**](GetAndDeleteRecipesApi.md#recipe_uuid_delete) | **DELETE** /recipe/{uuid} | Delete an existing recipe object
[**recipe_uuid_get**](GetAndDeleteRecipesApi.md#recipe_uuid_get) | **GET** /recipe/{uuid} | Get a specific analysis_grid object


# **recipe_get**
> InlineResponse2006 recipe_get(type=type, location=location, state=state)

Get a list of daylight recipe objects

Retrieves a list of daylight recipe objects for a given filter.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GetAndDeleteRecipesApi()
type = 'type_example' # str | The type of recipe to be retrieved (optional)
location = 'location_example' # str | The location where the weather sky is generated from (can be country or city, will only work for climate based recipes) (optional)
state = 'state_example' # str | The state of the recipe on the server (whether it has run, is running, has failed or is on hold) (optional)

try:
    # Get a list of daylight recipe objects
    api_response = api_instance.recipe_get(type=type, location=location, state=state)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GetAndDeleteRecipesApi->recipe_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| The type of recipe to be retrieved | [optional] 
 **location** | **str**| The location where the weather sky is generated from (can be country or city, will only work for climate based recipes) | [optional] 
 **state** | **str**| The state of the recipe on the server (whether it has run, is running, has failed or is on hold) | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_uuid_delete**
> recipe_uuid_delete(uuid)

Delete an existing recipe object

Delete an recipe object in the database specifying the uuid of the object

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GetAndDeleteRecipesApi()
uuid = 'uuid_example' # str | The unique identifier of the analysis_grid.

try:
    # Delete an existing recipe object
    api_instance.recipe_uuid_delete(uuid)
except ApiException as e:
    print("Exception when calling GetAndDeleteRecipesApi->recipe_uuid_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the analysis_grid. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_uuid_get**
> GridBasedRecipeSchema recipe_uuid_get(uuid)

Get a specific analysis_grid object

Returns a single analysis_grid object

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GetAndDeleteRecipesApi()
uuid = 'uuid_example' # str | The unique identifier of the analysis_grid.

try:
    # Get a specific analysis_grid object
    api_response = api_instance.recipe_uuid_get(uuid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GetAndDeleteRecipesApi->recipe_uuid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the analysis_grid. | 

### Return type

[**GridBasedRecipeSchema**](GridBasedRecipeSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

