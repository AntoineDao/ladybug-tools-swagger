# swagger_client.ThreePhaseApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_three_phase_gridbased_post**](ThreePhaseApi.md#recipe_three_phase_gridbased_post) | **POST** /recipe/three_phase/gridbased | Create a new three_phase file
[**recipe_three_phase_gridbased_uuid_put**](ThreePhaseApi.md#recipe_three_phase_gridbased_uuid_put) | **PUT** /recipe/three_phase/gridbased/{uuid} | Modify an existing three_phase file


# **recipe_three_phase_gridbased_post**
> InlineResponse204 recipe_three_phase_gridbased_post(recipe)

Create a new three_phase file

Adds a new three_phase file to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ThreePhaseApi()
recipe = swagger_client.ThreePhaselGridBasedSchema() # ThreePhaselGridBasedSchema | A three_phase JSON filer with a uuid key.

try:
    # Create a new three_phase file
    api_response = api_instance.recipe_three_phase_gridbased_post(recipe)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ThreePhaseApi->recipe_three_phase_gridbased_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**ThreePhaselGridBasedSchema**](ThreePhaselGridBasedSchema.md)| A three_phase JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_three_phase_gridbased_uuid_put**
> recipe_three_phase_gridbased_uuid_put(uuid, recipe)

Modify an existing three_phase file

Modifies any parameter (except uuid) of a three_phase recipe object by completely replacing the definition file. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ThreePhaseApi()
uuid = 'uuid_example' # str | The unique identifier of the three_phase recipe.
recipe = swagger_client.ThreePhaselGridBasedSchema() # ThreePhaselGridBasedSchema | A three_phase JSON filer with a uuid key.

try:
    # Modify an existing three_phase file
    api_instance.recipe_three_phase_gridbased_uuid_put(uuid, recipe)
except ApiException as e:
    print("Exception when calling ThreePhaseApi->recipe_three_phase_gridbased_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the three_phase recipe. | 
 **recipe** | [**ThreePhaselGridBasedSchema**](ThreePhaselGridBasedSchema.md)| A three_phase JSON filer with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

