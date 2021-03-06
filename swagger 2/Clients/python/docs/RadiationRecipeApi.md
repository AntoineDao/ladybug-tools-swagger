# swagger_client.RadiationRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_radiation_gridbased_post**](RadiationRecipeApi.md#recipe_radiation_gridbased_post) | **POST** /recipe/radiation/gridbased | Create a new radiation object
[**recipe_radiation_gridbased_uuid_put**](RadiationRecipeApi.md#recipe_radiation_gridbased_uuid_put) | **PUT** /recipe/radiation/gridbased/{uuid} | Modify an existing radiation object


# **recipe_radiation_gridbased_post**
> InlineResponse204 recipe_radiation_gridbased_post(recipe)

Create a new radiation object

Adds a new radiation object to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RadiationRecipeApi()
recipe = swagger_client.RadiationGridBasedSchema() # RadiationGridBasedSchema | A radiation JSON objectr with a uuid key.

try:
    # Create a new radiation object
    api_response = api_instance.recipe_radiation_gridbased_post(recipe)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RadiationRecipeApi->recipe_radiation_gridbased_post: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_radiation_gridbased_uuid_put**
> recipe_radiation_gridbased_uuid_put(uuid, recipe)

Modify an existing radiation object

Modifies any parameter (except uuid) of a radiation recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RadiationRecipeApi()
uuid = 'uuid_example' # str | The unique identifier of the radiation recipe.
recipe = swagger_client.RadiationGridBasedSchema() # RadiationGridBasedSchema | A radiation JSON objectr with a uuid key.

try:
    # Modify an existing radiation object
    api_instance.recipe_radiation_gridbased_uuid_put(uuid, recipe)
except ApiException as e:
    print("Exception when calling RadiationRecipeApi->recipe_radiation_gridbased_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the radiation recipe. | 
 **recipe** | [**RadiationGridBasedSchema**](RadiationGridBasedSchema.md)| A radiation JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

