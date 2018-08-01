# swagger_client.DirectReflectionApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_direct_reflection_gridbased_post**](DirectReflectionApi.md#recipe_direct_reflection_gridbased_post) | **POST** /recipe/direct_reflection/gridbased | Create a new direct_reflection file
[**recipe_direct_reflection_gridbased_uuid_put**](DirectReflectionApi.md#recipe_direct_reflection_gridbased_uuid_put) | **PUT** /recipe/direct_reflection/gridbased/{uuid} | Modify an existing direct_reflection file


# **recipe_direct_reflection_gridbased_post**
> InlineResponse204 recipe_direct_reflection_gridbased_post(recipe)

Create a new direct_reflection file

Adds a new direct_reflection file to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DirectReflectionApi()
recipe = swagger_client.DirectReflectionGridBasedSchema() # DirectReflectionGridBasedSchema | A direct_reflection JSON filer with a uuid key.

try:
    # Create a new direct_reflection file
    api_response = api_instance.recipe_direct_reflection_gridbased_post(recipe)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DirectReflectionApi->recipe_direct_reflection_gridbased_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**DirectReflectionGridBasedSchema**](DirectReflectionGridBasedSchema.md)| A direct_reflection JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_direct_reflection_gridbased_uuid_put**
> recipe_direct_reflection_gridbased_uuid_put(uuid, recipe)

Modify an existing direct_reflection file

Modifies any parameter (except uuid) of a direct_reflection recipe object by completely replacing the definition file. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DirectReflectionApi()
uuid = 'uuid_example' # str | The unique identifier of the direct_reflection recipe.
recipe = swagger_client.DirectReflectionGridBasedSchema() # DirectReflectionGridBasedSchema | A analysis_grid JSON filer with a uuid key.

try:
    # Modify an existing direct_reflection file
    api_instance.recipe_direct_reflection_gridbased_uuid_put(uuid, recipe)
except ApiException as e:
    print("Exception when calling DirectReflectionApi->recipe_direct_reflection_gridbased_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the direct_reflection recipe. | 
 **recipe** | [**DirectReflectionGridBasedSchema**](DirectReflectionGridBasedSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

