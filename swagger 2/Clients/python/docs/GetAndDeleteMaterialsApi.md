# swagger_client.GetAndDeleteMaterialsApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**material_get**](GetAndDeleteMaterialsApi.md#material_get) | **GET** /material | Get a list of material objects
[**material_uuid_delete**](GetAndDeleteMaterialsApi.md#material_uuid_delete) | **DELETE** /material/{uuid} | Delete an existing material file
[**material_uuid_get**](GetAndDeleteMaterialsApi.md#material_uuid_get) | **GET** /material/{uuid} | Get a specific material object


# **material_get**
> InlineResponse2004 material_get(material_type=material_type, rgb_transmittance=rgb_transmittance, rgb_reflectance=rgb_reflectance)

Get a list of material objects

Retrieves a list of material uuids for a given filter.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GetAndDeleteMaterialsApi()
material_type = 'material_type_example' # str | The type of the material to be queried (optional)
rgb_transmittance = 8.14 # float | The RGB average transmittance value (will only return translucent material) (optional)
rgb_reflectance = 8.14 # float | The RGB average reflectance value (will only return opaque material) (optional)

try:
    # Get a list of material objects
    api_response = api_instance.material_get(material_type=material_type, rgb_transmittance=rgb_transmittance, rgb_reflectance=rgb_reflectance)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GetAndDeleteMaterialsApi->material_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **material_type** | **str**| The type of the material to be queried | [optional] 
 **rgb_transmittance** | **float**| The RGB average transmittance value (will only return translucent material) | [optional] 
 **rgb_reflectance** | **float**| The RGB average reflectance value (will only return opaque material) | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **material_uuid_delete**
> material_uuid_delete(uuid)

Delete an existing material file

Delete an material file in the database specifying the uuid of the file

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GetAndDeleteMaterialsApi()
uuid = 'uuid_example' # str | The unique identifier of the material.

try:
    # Delete an existing material file
    api_instance.material_uuid_delete(uuid)
except ApiException as e:
    print("Exception when calling GetAndDeleteMaterialsApi->material_uuid_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the material. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **material_uuid_get**
> InlineResponse2005 material_uuid_get(uuid)

Get a specific material object

Returns a single material object

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GetAndDeleteMaterialsApi()
uuid = 'uuid_example' # str | The unique identifier of the material.

try:
    # Get a specific material object
    api_response = api_instance.material_uuid_get(uuid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GetAndDeleteMaterialsApi->material_uuid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the material. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

