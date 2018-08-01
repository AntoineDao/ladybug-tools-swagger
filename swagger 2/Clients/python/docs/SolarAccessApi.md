# swagger_client.SolarAccessApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipe_solar_access_gridbased_post**](SolarAccessApi.md#recipe_solar_access_gridbased_post) | **POST** /recipe/solar_access/gridbased | Create a new solar_access file
[**recipe_solar_access_gridbased_uuid_put**](SolarAccessApi.md#recipe_solar_access_gridbased_uuid_put) | **PUT** /recipe/solar_access/gridbased/{uuid} | Modify an existing solar_access file


# **recipe_solar_access_gridbased_post**
> InlineResponse204 recipe_solar_access_gridbased_post(recipe)

Create a new solar_access file

Adds a new solar_access file to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SolarAccessApi()
recipe = swagger_client.SolarAccessGridBasedSchema() # SolarAccessGridBasedSchema | A solar_access JSON filer with a uuid key.

try:
    # Create a new solar_access file
    api_response = api_instance.recipe_solar_access_gridbased_post(recipe)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SolarAccessApi->recipe_solar_access_gridbased_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipe** | [**SolarAccessGridBasedSchema**](SolarAccessGridBasedSchema.md)| A solar_access JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recipe_solar_access_gridbased_uuid_put**
> recipe_solar_access_gridbased_uuid_put(uuid, recipe)

Modify an existing solar_access file

Modifies any parameter (except uuid) of a solar_access recipe object by completely replacing the definition file. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SolarAccessApi()
uuid = 'uuid_example' # str | The unique identifier of the solar_access recipe.
recipe = swagger_client.SolarAccessGridBasedSchema() # SolarAccessGridBasedSchema | A solar_access JSON filer with a uuid key.

try:
    # Modify an existing solar_access file
    api_instance.recipe_solar_access_gridbased_uuid_put(uuid, recipe)
except ApiException as e:
    print("Exception when calling SolarAccessApi->recipe_solar_access_gridbased_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the solar_access recipe. | 
 **recipe** | [**SolarAccessGridBasedSchema**](SolarAccessGridBasedSchema.md)| A solar_access JSON filer with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

