# swagger_client.BSDFMaterialApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**material_bsdf_post**](BSDFMaterialApi.md#material_bsdf_post) | **POST** /material/bsdf | Create a new bsdf material object
[**material_bsdf_uuid_put**](BSDFMaterialApi.md#material_bsdf_uuid_put) | **PUT** /material/bsdf/{uuid} | Modify an existing bsdf material file


# **material_bsdf_post**
> InlineResponse204 material_bsdf_post(bsdf_material)

Create a new bsdf material object

Adds a new bsdf material object to the database

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.BSDFMaterialApi()
bsdf_material = swagger_client.BSDFMaterialSchema() # BSDFMaterialSchema | a bsdf material object

try:
    # Create a new bsdf material object
    api_response = api_instance.material_bsdf_post(bsdf_material)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BSDFMaterialApi->material_bsdf_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bsdf_material** | [**BSDFMaterialSchema**](BSDFMaterialSchema.md)| a bsdf material object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **material_bsdf_uuid_put**
> material_bsdf_uuid_put(uuid, bsdf_material)

Modify an existing bsdf material file

Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.BSDFMaterialApi()
uuid = 'uuid_example' # str | The unique identifier of the material.
bsdf_material = swagger_client.BSDFMaterialSchema() # BSDFMaterialSchema | a bsdf material object

try:
    # Modify an existing bsdf material file
    api_instance.material_bsdf_uuid_put(uuid, bsdf_material)
except ApiException as e:
    print("Exception when calling BSDFMaterialApi->material_bsdf_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the material. | 
 **bsdf_material** | [**BSDFMaterialSchema**](BSDFMaterialSchema.md)| a bsdf material object | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

