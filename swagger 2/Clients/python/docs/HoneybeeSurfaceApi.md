# swagger_client.HoneybeeSurfaceApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hbsurface_get**](HoneybeeSurfaceApi.md#hbsurface_get) | **GET** /hbsurface | Get a list of hbsurface objects
[**hbsurface_post**](HoneybeeSurfaceApi.md#hbsurface_post) | **POST** /hbsurface | Create a new hbsurface object
[**hbsurface_uuid_delete**](HoneybeeSurfaceApi.md#hbsurface_uuid_delete) | **DELETE** /hbsurface/{uuid} | Delete an existing hbsurface object
[**hbsurface_uuid_get**](HoneybeeSurfaceApi.md#hbsurface_uuid_get) | **GET** /hbsurface/{uuid} | Get a specific hbsurface object
[**hbsurface_uuid_put**](HoneybeeSurfaceApi.md#hbsurface_uuid_put) | **PUT** /hbsurface/{uuid} | Modify an existing hbsurface object


# **hbsurface_get**
> InlineResponse2007 hbsurface_get(surface_type=surface_type, surface_material=surface_material, surface_state=surface_state)

Get a list of hbsurface objects

Retrieves a list of HoneyBee Surface objects for a given filter.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HoneybeeSurfaceApi()
surface_type = 'surface_type_example' # str | The type of the surface to be queried (optional)
surface_material = 'surface_material_example' # str | retrieve surfaces based on the name of their main material definiton (not materials in a given surface state) (optional)
surface_state = 'surface_state_example' # str | retrieve a surface using the name of a given state it contains (optional)

try:
    # Get a list of hbsurface objects
    api_response = api_instance.hbsurface_get(surface_type=surface_type, surface_material=surface_material, surface_state=surface_state)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HoneybeeSurfaceApi->hbsurface_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surface_type** | **str**| The type of the surface to be queried | [optional] 
 **surface_material** | **str**| retrieve surfaces based on the name of their main material definiton (not materials in a given surface state) | [optional] 
 **surface_state** | **str**| retrieve a surface using the name of a given state it contains | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hbsurface_post**
> InlineResponse204 hbsurface_post(hbsurface)

Create a new hbsurface object

Adds a new hbsurface object to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HoneybeeSurfaceApi()
hbsurface = swagger_client.HBSurfaceSchema() # HBSurfaceSchema | A hbsurface JSON object

try:
    # Create a new hbsurface object
    api_response = api_instance.hbsurface_post(hbsurface)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HoneybeeSurfaceApi->hbsurface_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hbsurface** | [**HBSurfaceSchema**](HBSurfaceSchema.md)| A hbsurface JSON object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hbsurface_uuid_delete**
> hbsurface_uuid_delete(uuid)

Delete an existing hbsurface object

Delete an hbsurface object in the database specifying the uuid of the object

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HoneybeeSurfaceApi()
uuid = 'uuid_example' # str | The unique identifier of the hbsurface.

try:
    # Delete an existing hbsurface object
    api_instance.hbsurface_uuid_delete(uuid)
except ApiException as e:
    print("Exception when calling HoneybeeSurfaceApi->hbsurface_uuid_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the hbsurface. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hbsurface_uuid_get**
> InlineResponse2008 hbsurface_uuid_get(uuid)

Get a specific hbsurface object

Returns a single hbsurface object

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HoneybeeSurfaceApi()
uuid = 'uuid_example' # str | The unique identifier of the hbsurface.

try:
    # Get a specific hbsurface object
    api_response = api_instance.hbsurface_uuid_get(uuid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HoneybeeSurfaceApi->hbsurface_uuid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the hbsurface. | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hbsurface_uuid_put**
> hbsurface_uuid_put(uuid, hbsurface)

Modify an existing hbsurface object

Modifies any parameter (except uuid) of an hbsurface object by completely replacing the definition object. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HoneybeeSurfaceApi()
uuid = 'uuid_example' # str | The unique identifier of the hbsurface.
hbsurface = swagger_client.HBSurfaceSchema() # HBSurfaceSchema | A hbsurface JSON objectr with a uuid key.

try:
    # Modify an existing hbsurface object
    api_instance.hbsurface_uuid_put(uuid, hbsurface)
except ApiException as e:
    print("Exception when calling HoneybeeSurfaceApi->hbsurface_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the hbsurface. | 
 **hbsurface** | [**HBSurfaceSchema**](HBSurfaceSchema.md)| A hbsurface JSON objectr with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

