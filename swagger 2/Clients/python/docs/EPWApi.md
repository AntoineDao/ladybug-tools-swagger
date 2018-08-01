# swagger_client.EPWApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**epw_get**](EPWApi.md#epw_get) | **GET** /epw | Get a list of EPW objects
[**epw_post**](EPWApi.md#epw_post) | **POST** /epw | Create a new epw file
[**epw_uuid_delete**](EPWApi.md#epw_uuid_delete) | **DELETE** /epw/{uuid} | Delete an existing epw file
[**epw_uuid_get**](EPWApi.md#epw_uuid_get) | **GET** /epw/{uuid} | Get a specific epw file
[**epw_uuid_put**](EPWApi.md#epw_uuid_put) | **PUT** /epw/{uuid} | Modify an existing epw file


# **epw_get**
> InlineResponse2002 epw_get(country=country)

Get a list of EPW objects

Retrieves a list of epw objects for a given filter.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.EPWApi()
country = 'country_example' # str | The countyr the EPW is from (optional)

try:
    # Get a list of EPW objects
    api_response = api_instance.epw_get(country=country)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EPWApi->epw_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| The countyr the EPW is from | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epw_post**
> InlineResponse204 epw_post(epw)

Create a new epw file

Adds a new epw file to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.EPWApi()
epw = swagger_client.EpwSchema() # EpwSchema | The location of the epw.

try:
    # Create a new epw file
    api_response = api_instance.epw_post(epw)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EPWApi->epw_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **epw** | [**EpwSchema**](EpwSchema.md)| The location of the epw. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epw_uuid_delete**
> epw_uuid_delete(uuid)

Delete an existing epw file

Delete an epw file in the database specifying the uuid of the file

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.EPWApi()
uuid = 'uuid_example' # str | The unique identifier of the epw.

try:
    # Delete an existing epw file
    api_instance.epw_uuid_delete(uuid)
except ApiException as e:
    print("Exception when calling EPWApi->epw_uuid_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the epw. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epw_uuid_get**
> InlineResponse2003 epw_uuid_get(uuid)

Get a specific epw file

Returns a single epw file

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.EPWApi()
uuid = 'uuid_example' # str | The unique identifier of the epw.

try:
    # Get a specific epw file
    api_response = api_instance.epw_uuid_get(uuid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EPWApi->epw_uuid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the epw. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epw_uuid_put**
> epw_uuid_put(uuid, epw)

Modify an existing epw file

Modifies any parameter (except uuid) of an epw file by completely replacing the EPW file. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.EPWApi()
uuid = 'uuid_example' # str | The unique identifier of the epw.
epw = swagger_client.EpwSchema() # EpwSchema | The location of the epw.

try:
    # Modify an existing epw file
    api_instance.epw_uuid_put(uuid, epw)
except ApiException as e:
    print("Exception when calling EPWApi->epw_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the epw. | 
 **epw** | [**EpwSchema**](EpwSchema.md)| The location of the epw. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

