# swagger_client.FivePhaseRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_five_phase_gridbased_post**](FivePhaseRecipeApi.md#recipe_five_phase_gridbased_post) | **POST** /recipe/five_phase/gridbased | Create a new five_phase object
[**recipe_five_phase_gridbased_uuid_put**](FivePhaseRecipeApi.md#recipe_five_phase_gridbased_uuid_put) | **PUT** /recipe/five_phase/gridbased/{uuid} | Modify an existing five_phase object


# **recipe_five_phase_gridbased_post**
> InlineResponse204 recipe_five_phase_gridbased_post(recipe)

Create a new five_phase object

Adds a new five_phase object to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FivePhaseRecipeApi()
recipe = swagger_client.FivePhaselGridBasedSchema() # FivePhaselGridBasedSchema | A five_phase JSON objectr with a uuid key.

try:
    # Create a new five_phase object
    api_response = api_instance.recipe_five_phase_gridbased_post(recipe)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FivePhaseRecipeApi->recipe_five_phase_gridbased_post: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_five_phase_gridbased_uuid_put**
> recipe_five_phase_gridbased_uuid_put(uuid, recipe)

Modify an existing five_phase object

Modifies any parameter (except uuid) of a five_phase recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FivePhaseRecipeApi()
uuid = 'uuid_example' # str | The unique identifier of the five_phase recipe.
recipe = swagger_client.FivePhaselGridBasedSchema() # FivePhaselGridBasedSchema | A five_phase JSON objectr with a uuid key.

try:
    # Modify an existing five_phase object
    api_instance.recipe_five_phase_gridbased_uuid_put(uuid, recipe)
except ApiException as e:
    print("Exception when calling FivePhaseRecipeApi->recipe_five_phase_gridbased_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the five_phase recipe. | 
 **recipe** | [**FivePhaselGridBasedSchema**](FivePhaselGridBasedSchema.md)| A five_phase JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

