# swagger_client.DaylightFactorRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_daylight_factor_gridbased_post**](DaylightFactorRecipeApi.md#recipe_daylight_factor_gridbased_post) | **POST** /recipe/daylight_factor/gridbased | Create a new analysis_grid object
[**recipe_daylight_factor_gridbased_uuid_put**](DaylightFactorRecipeApi.md#recipe_daylight_factor_gridbased_uuid_put) | **PUT** /recipe/daylight_factor/gridbased/{uuid} | Modify an existing analysis_grid object


# **recipe_daylight_factor_gridbased_post**
> InlineResponse204 recipe_daylight_factor_gridbased_post(recipe)

Create a new analysis_grid object

Adds a new analysis_grid object to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DaylightFactorRecipeApi()
recipe = swagger_client.DaylightFactorGridBasedSchema() # DaylightFactorGridBasedSchema | A analysis_grid JSON objectr with a uuid key.

try:
    # Create a new analysis_grid object
    api_response = api_instance.recipe_daylight_factor_gridbased_post(recipe)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DaylightFactorRecipeApi->recipe_daylight_factor_gridbased_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**DaylightFactorGridBasedSchema**](DaylightFactorGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_daylight_factor_gridbased_uuid_put**
> recipe_daylight_factor_gridbased_uuid_put(uuid, recipe)

Modify an existing analysis_grid object

Modifies any parameter (except uuid) of a daylight_factor recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DaylightFactorRecipeApi()
uuid = 'uuid_example' # str | The unique identifier of the daylight_factor recipe.
recipe = swagger_client.DaylightFactorGridBasedSchema() # DaylightFactorGridBasedSchema | A analysis_grid JSON objectr with a uuid key.

try:
    # Modify an existing analysis_grid object
    api_instance.recipe_daylight_factor_gridbased_uuid_put(uuid, recipe)
except ApiException as e:
    print("Exception when calling DaylightFactorRecipeApi->recipe_daylight_factor_gridbased_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the daylight_factor recipe. | 
 **recipe** | [**DaylightFactorGridBasedSchema**](DaylightFactorGridBasedSchema.md)| A analysis_grid JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

