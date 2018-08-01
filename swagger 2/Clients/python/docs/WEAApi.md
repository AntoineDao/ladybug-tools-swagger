# swagger_client.WEAApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wea_get**](WEAApi.md#wea_get) | **GET** /wea | Get a list of WEA objects
[**wea_post**](WEAApi.md#wea_post) | **POST** /wea | Create a new wea object
[**wea_uuid_delete**](WEAApi.md#wea_uuid_delete) | **DELETE** /wea/{uuid} | Delete an existing wea object
[**wea_uuid_get**](WEAApi.md#wea_uuid_get) | **GET** /wea/{uuid} | Get a specific wea object
[**wea_uuid_put**](WEAApi.md#wea_uuid_put) | **PUT** /wea/{uuid} | Modify an existing wea object


# **wea_get**
> InlineResponse2009 wea_get(country=country)

Get a list of WEA objects

Retrieves a list of wea objects for a given filter.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.WEAApi()
country = 'country_example' # str | The countyr the EPW is from (optional)

try:
    # Get a list of WEA objects
    api_response = api_instance.wea_get(country=country)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WEAApi->wea_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| The countyr the EPW is from | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wea_post**
> InlineResponse204 wea_post(wea)

Create a new wea object

Adds a new wea object to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.WEAApi()
wea = swagger_client.WeaSchema() # WeaSchema | a wea object

try:
    # Create a new wea object
    api_response = api_instance.wea_post(wea)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WEAApi->wea_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wea** | [**WeaSchema**](WeaSchema.md)| a wea object | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wea_uuid_delete**
> wea_uuid_delete(uuid)

Delete an existing wea object

Delete an wea object in the database specifying the uuid of the object

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.WEAApi()
uuid = 'uuid_example' # str | The unique identifier of the wea.

try:
    # Delete an existing wea object
    api_instance.wea_uuid_delete(uuid)
except ApiException as e:
    print("Exception when calling WEAApi->wea_uuid_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the wea. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wea_uuid_get**
> InlineResponse20010 wea_uuid_get(uuid)

Get a specific wea object

Returns a single wea object

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.WEAApi()
uuid = 'uuid_example' # str | The unique identifier of the wea.

try:
    # Get a specific wea object
    api_response = api_instance.wea_uuid_get(uuid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WEAApi->wea_uuid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the wea. | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wea_uuid_put**
> wea_uuid_put(uuid, wea)

Modify an existing wea object

Modifies any parameter (except uuid) of an wea object by completely replacing the wea object. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.WEAApi()
uuid = 'uuid_example' # str | The unique identifier of the wea.
wea = swagger_client.WeaSchema() # WeaSchema | a wea object

try:
    # Modify an existing wea object
    api_instance.wea_uuid_put(uuid, wea)
except ApiException as e:
    print("Exception when calling WEAApi->wea_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the wea. | 
 **wea** | [**WeaSchema**](WeaSchema.md)| a wea object | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

