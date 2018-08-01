# swagger_client.TranslucentMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**material_translucent_post**](TranslucentMaterialApi.md#material_translucent_post) | **POST** /material/translucent | Create a new translucent material object
[**material_translucent_uuid_put**](TranslucentMaterialApi.md#material_translucent_uuid_put) | **PUT** /material/translucent/{uuid} | Modify an existing translucent material file


# **material_translucent_post**
> InlineResponse204 material_translucent_post(translucent_material)

Create a new translucent material object

Adds a new translucent material object to the database

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TranslucentMaterialApi()
translucent_material = swagger_client.TranslucentMaterialSchema() # TranslucentMaterialSchema | a translucent material object

try:
    # Create a new translucent material object
    api_response = api_instance.material_translucent_post(translucent_material)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TranslucentMaterialApi->material_translucent_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translucent_material** | [**TranslucentMaterialSchema**](TranslucentMaterialSchema.md)| a translucent material object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **material_translucent_uuid_put**
> material_translucent_uuid_put(uuid, translucent_material)

Modify an existing translucent material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TranslucentMaterialApi()
uuid = 'uuid_example' # str | The unique identifier of the material.
translucent_material = swagger_client.TranslucentMaterialSchema() # TranslucentMaterialSchema | a translucent material object

try:
    # Modify an existing translucent material file
    api_instance.material_translucent_uuid_put(uuid, translucent_material)
except ApiException as e:
    print("Exception when calling TranslucentMaterialApi->material_translucent_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the material. | 
 **translucent_material** | [**TranslucentMaterialSchema**](TranslucentMaterialSchema.md)| a translucent material object | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

