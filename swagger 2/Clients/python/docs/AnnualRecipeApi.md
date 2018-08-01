# swagger_client.AnnualRecipeApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_annual_gridbased_post**](AnnualRecipeApi.md#recipe_annual_gridbased_post) | **POST** /recipe/annual/gridbased | Create a new annual object
[**recipe_annual_gridbased_uuid_put**](AnnualRecipeApi.md#recipe_annual_gridbased_uuid_put) | **PUT** /recipe/annual/gridbased/{uuid} | Modify an existing annual object


# **recipe_annual_gridbased_post**
> InlineResponse204 recipe_annual_gridbased_post(recipe)

Create a new annual object

Adds a new annual object to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AnnualRecipeApi()
recipe = swagger_client.AnnualGridBasedSchema() # AnnualGridBasedSchema | A annual JSON objectr with a uuid key.

try:
    # Create a new annual object
    api_response = api_instance.recipe_annual_gridbased_post(recipe)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AnnualRecipeApi->recipe_annual_gridbased_post: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_annual_gridbased_uuid_put**
> recipe_annual_gridbased_uuid_put(uuid, recipe)

Modify an existing annual object

Modifies any parameter (except uuid) of a annual recipe object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AnnualRecipeApi()
uuid = 'uuid_example' # str | The unique identifier of the annual recipe.
recipe = swagger_client.AnnualGridBasedSchema() # AnnualGridBasedSchema | A annual JSON objectr with a uuid key.

try:
    # Modify an existing annual object
    api_instance.recipe_annual_gridbased_uuid_put(uuid, recipe)
except ApiException as e:
    print("Exception when calling AnnualRecipeApi->recipe_annual_gridbased_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the annual recipe. | 
 **recipe** | [**AnnualGridBasedSchema**](AnnualGridBasedSchema.md)| A annual JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

