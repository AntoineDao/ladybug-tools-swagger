# swagger_client.LightSourceMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**material_light_source_post**](LightSourceMaterialApi.md#material_light_source_post) | **POST** /material/light_source | Create a new light_source material object
[**material_light_source_uuid_put**](LightSourceMaterialApi.md#material_light_source_uuid_put) | **PUT** /material/light_source/{uuid} | Modify an existing light_source material file


# **material_light_source_post**
> InlineResponse204 material_light_source_post(light_source_material)

Create a new light_source material object

Adds a new light_source material object to the database

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LightSourceMaterialApi()
light_source_material = swagger_client.LightSourceMaterialSchema() # LightSourceMaterialSchema | a light_source material object

try:
    # Create a new light_source material object
    api_response = api_instance.material_light_source_post(light_source_material)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LightSourceMaterialApi->material_light_source_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **light_source_material** | [**LightSourceMaterialSchema**](LightSourceMaterialSchema.md)| a light_source material object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **material_light_source_uuid_put**
> material_light_source_uuid_put(uuid, light_source_material)

Modify an existing light_source material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LightSourceMaterialApi()
uuid = 'uuid_example' # str | The unique identifier of the material.
light_source_material = swagger_client.LightSourceMaterialSchema() # LightSourceMaterialSchema | a light_source material object

try:
    # Modify an existing light_source material file
    api_instance.material_light_source_uuid_put(uuid, light_source_material)
except ApiException as e:
    print("Exception when calling LightSourceMaterialApi->material_light_source_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the material. | 
 **light_source_material** | [**LightSourceMaterialSchema**](LightSourceMaterialSchema.md)| a light_source material object | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

