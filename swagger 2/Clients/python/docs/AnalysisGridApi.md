# swagger_client.AnalysisGridApi

All URIs are relative to *http://api.ladybug-tools.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analysis_grid_get**](AnalysisGridApi.md#analysis_grid_get) | **GET** /analysis_grid | Get a list of analysis_grid objects
[**analysis_grid_post**](AnalysisGridApi.md#analysis_grid_post) | **POST** /analysis_grid | Create a new analysis_grid file
[**analysis_grid_uuid_delete**](AnalysisGridApi.md#analysis_grid_uuid_delete) | **DELETE** /analysis_grid/{uuid} | Delete an existing analysis_grid file
[**analysis_grid_uuid_get**](AnalysisGridApi.md#analysis_grid_uuid_get) | **GET** /analysis_grid/{uuid} | Get an analysis_grid object
[**analysis_grid_uuid_put**](AnalysisGridApi.md#analysis_grid_uuid_put) | **PUT** /analysis_grid/{uuid} | Modify an existing analysis_grid file


# **analysis_grid_get**
> InlineResponse200 analysis_grid_get(grid_name=grid_name, min_points=min_points, max_points=max_points)

Get a list of analysis_grid objects

Retrieves a list of analysis grids for a given filter.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AnalysisGridApi()
grid_name = 'grid_name_example' # str | The name of the grid (optional)
min_points = 56 # int | The minimum amount of points the analysis grid has (optional)
max_points = 56 # int | The maximum amount of points the analysis grid has (optional)

try:
    # Get a list of analysis_grid objects
    api_response = api_instance.analysis_grid_get(grid_name=grid_name, min_points=min_points, max_points=max_points)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AnalysisGridApi->analysis_grid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_name** | **str**| The name of the grid | [optional] 
 **min_points** | **int**| The minimum amount of points the analysis grid has | [optional] 
 **max_points** | **int**| The maximum amount of points the analysis grid has | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_grid_post**
> InlineResponse204 analysis_grid_post(analysis_grid)

Create a new analysis_grid file

Adds a new analysis_grid file to the list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AnalysisGridApi()
analysis_grid = swagger_client.AnalysisGridSchema() # AnalysisGridSchema | A analysis_grid JSON filer with a uuid key.

try:
    # Create a new analysis_grid file
    api_response = api_instance.analysis_grid_post(analysis_grid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AnalysisGridApi->analysis_grid_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysis_grid** | [**AnalysisGridSchema**](AnalysisGridSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_grid_uuid_delete**
> analysis_grid_uuid_delete(uuid)

Delete an existing analysis_grid file

Delete an analysis_grid file in the database specifying the uuid of the file

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AnalysisGridApi()
uuid = 'uuid_example' # str | The unique identifier of the analysis_grid.

try:
    # Delete an existing analysis_grid file
    api_instance.analysis_grid_uuid_delete(uuid)
except ApiException as e:
    print("Exception when calling AnalysisGridApi->analysis_grid_uuid_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the analysis_grid. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_grid_uuid_get**
> InlineResponse2001 analysis_grid_uuid_get(uuid)

Get an analysis_grid object

Returns a single analysis_grid object based on the provided uuid

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AnalysisGridApi()
uuid = 'uuid_example' # str | The unique identifier of the analysis_grid.

try:
    # Get an analysis_grid object
    api_response = api_instance.analysis_grid_uuid_get(uuid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AnalysisGridApi->analysis_grid_uuid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the analysis_grid. | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_grid_uuid_put**
> analysis_grid_uuid_put(uuid, analysis_grid)

Modify an existing analysis_grid file

Modifies any parameter (except uuid) of an analysis_grid file by completely replacing the definition file. A finer grain method can be set up later.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AnalysisGridApi()
uuid = 'uuid_example' # str | The unique identifier of the analysis_grid.
analysis_grid = swagger_client.AnalysisGridSchema() # AnalysisGridSchema | A analysis_grid JSON filer with a uuid key.

try:
    # Modify an existing analysis_grid file
    api_instance.analysis_grid_uuid_put(uuid, analysis_grid)
except ApiException as e:
    print("Exception when calling AnalysisGridApi->analysis_grid_uuid_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| The unique identifier of the analysis_grid. | 
 **analysis_grid** | [**AnalysisGridSchema**](AnalysisGridSchema.md)| A analysis_grid JSON filer with a uuid key. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

