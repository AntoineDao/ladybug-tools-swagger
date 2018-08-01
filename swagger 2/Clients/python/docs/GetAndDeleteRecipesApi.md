# swagger_client.GetAndDeleteRecipesApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_get**](GetAndDeleteRecipesApi.md#recipe_get) | **GET** /recipe/ | Get a list of daylight recipe objects
[**recipe_uuid_delete**](GetAndDeleteRecipesApi.md#recipe_uuid_delete) | **DELETE** /recipe/{uuid} | Delete an existing recipe object
[**recipe_uuid_get**](GetAndDeleteRecipesApi.md#recipe_uuid_get) | **GET** /recipe/{uuid} | Get a specific analysis_grid file


# **recipe_get**
> InlineResponse200 recipe_get(size=size, country=country)

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
size = 56 # int | Number of files returned (optional)
country = 'country_example' # str | Country where definitions should be from (optional)

try:
    # Get a list of daylight recipe objects
    api_response = api_instance.recipe_get(size=size, country=country)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GetAndDeleteRecipesApi->recipe_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **int**| Number of files returned | [optional] 
 **country** | **str**| Country where definitions should be from | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_uuid_delete**
> recipe_uuid_delete(uuid)

Delete an existing recipe object

Delete an recipe object in the database specifying the uuid of the file

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GetAndDeleteRecipesApi()
uuid = 'uuid_example' # str | The unique identifier of the recipe.

try:
    # Delete an existing recipe object
    api_instance.recipe_uuid_delete(uuid)
except ApiException as e:
    print("Exception when calling GetAndDeleteRecipesApi->recipe_uuid_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the recipe. | 

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

Get a specific analysis_grid file

Returns a single analysis_grid file

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
    # Get a specific analysis_grid file
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

