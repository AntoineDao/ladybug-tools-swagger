# swagger-client
A sample API definition for a honeybee server

This Python package is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.PythonClientCodegen

## Requirements.

Python 2.7 and 3.4+

## Installation & Usage
### pip install

If the python package is hosted on Github, you can install directly from Github

```sh
pip install git+https://github.com//.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com//.git`)

Then import the package:
```python
import swagger_client 
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import swagger_client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# create an instance of the API class
api_instance = swagger_client.AnnualApi()
recipe = swagger_client.AnnualGridBasedSchema() # AnnualGridBasedSchema | A annual JSON filer with a uuid key.

try:
    # Create a new annual file
    api_response = api_instance.recipe_annual_gridbased_post(recipe)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AnnualApi->recipe_annual_gridbased_post: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *http://api.ladybug-tools.io/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AnnualApi* | [**recipe_annual_gridbased_post**](docs/AnnualApi.md#recipe_annual_gridbased_post) | **POST** /recipe/annual/gridbased | Create a new annual file
*AnnualApi* | [**recipe_annual_gridbased_uuid_put**](docs/AnnualApi.md#recipe_annual_gridbased_uuid_put) | **PUT** /recipe/annual/gridbased/{uuid} | Modify an existing annual file
*DaylightFactorApi* | [**recipe_daylight_factor_gridbased_post**](docs/DaylightFactorApi.md#recipe_daylight_factor_gridbased_post) | **POST** /recipe/daylight_factor/gridbased | Create a new analysis_grid file
*DaylightFactorApi* | [**recipe_daylight_factor_gridbased_uuid_put**](docs/DaylightFactorApi.md#recipe_daylight_factor_gridbased_uuid_put) | **PUT** /recipe/daylight_factor/gridbased/{uuid} | Modify an existing analysis_grid file
*DirectReflectionApi* | [**recipe_direct_reflection_gridbased_post**](docs/DirectReflectionApi.md#recipe_direct_reflection_gridbased_post) | **POST** /recipe/direct_reflection/gridbased | Create a new direct_reflection file
*DirectReflectionApi* | [**recipe_direct_reflection_gridbased_uuid_put**](docs/DirectReflectionApi.md#recipe_direct_reflection_gridbased_uuid_put) | **PUT** /recipe/direct_reflection/gridbased/{uuid} | Modify an existing direct_reflection file
*FivePhaseApi* | [**recipe_five_phase_gridbased_post**](docs/FivePhaseApi.md#recipe_five_phase_gridbased_post) | **POST** /recipe/five_phase/gridbased | Create a new five_phase file
*FivePhaseApi* | [**recipe_five_phase_gridbased_uuid_put**](docs/FivePhaseApi.md#recipe_five_phase_gridbased_uuid_put) | **PUT** /recipe/five_phase/gridbased/{uuid} | Modify an existing five_phase file
*GetAndDeleteRecipesApi* | [**recipe_get**](docs/GetAndDeleteRecipesApi.md#recipe_get) | **GET** /recipe/ | Get a list of daylight recipe objects
*GetAndDeleteRecipesApi* | [**recipe_uuid_delete**](docs/GetAndDeleteRecipesApi.md#recipe_uuid_delete) | **DELETE** /recipe/{uuid} | Delete an existing recipe object
*GetAndDeleteRecipesApi* | [**recipe_uuid_get**](docs/GetAndDeleteRecipesApi.md#recipe_uuid_get) | **GET** /recipe/{uuid} | Get a specific analysis_grid file
*PointInTimeApi* | [**recipe_point_in_time_gridbased_post**](docs/PointInTimeApi.md#recipe_point_in_time_gridbased_post) | **POST** /recipe/point_in_time/gridbased | Create a new point_in_time file
*PointInTimeApi* | [**recipe_point_in_time_gridbased_uuid_put**](docs/PointInTimeApi.md#recipe_point_in_time_gridbased_uuid_put) | **PUT** /recipe/point_in_time/gridbased/{uuid} | Modify an existing point_in_time file
*RadiationApi* | [**recipe_radiation_gridbased_post**](docs/RadiationApi.md#recipe_radiation_gridbased_post) | **POST** /recipe/radiation/gridbased | Create a new radiation file
*RadiationApi* | [**recipe_radiation_gridbased_uuid_put**](docs/RadiationApi.md#recipe_radiation_gridbased_uuid_put) | **PUT** /recipe/radiation/gridbased/{uuid} | Modify an existing radiation file
*SolarAccessApi* | [**recipe_solar_access_gridbased_post**](docs/SolarAccessApi.md#recipe_solar_access_gridbased_post) | **POST** /recipe/solar_access/gridbased | Create a new solar_access file
*SolarAccessApi* | [**recipe_solar_access_gridbased_uuid_put**](docs/SolarAccessApi.md#recipe_solar_access_gridbased_uuid_put) | **PUT** /recipe/solar_access/gridbased/{uuid} | Modify an existing solar_access file
*ThreePhaseApi* | [**recipe_three_phase_gridbased_post**](docs/ThreePhaseApi.md#recipe_three_phase_gridbased_post) | **POST** /recipe/three_phase/gridbased | Create a new three_phase file
*ThreePhaseApi* | [**recipe_three_phase_gridbased_uuid_put**](docs/ThreePhaseApi.md#recipe_three_phase_gridbased_uuid_put) | **PUT** /recipe/three_phase/gridbased/{uuid} | Modify an existing three_phase file


## Documentation For Models

 - [AnalysisGridSchema](docs/AnalysisGridSchema.md)
 - [AnalysisPointSchema](docs/AnalysisPointSchema.md)
 - [AnalysisSurfaceSchema](docs/AnalysisSurfaceSchema.md)
 - [AnalysisSurfaceSchemaRadProperties](docs/AnalysisSurfaceSchemaRadProperties.md)
 - [AnalysisType](docs/AnalysisType.md)
 - [AnnualGridBasedSchema](docs/AnnualGridBasedSchema.md)
 - [BSDFMaterialSchema](docs/BSDFMaterialSchema.md)
 - [DataCollection](docs/DataCollection.md)
 - [DataType](docs/DataType.md)
 - [DaylightFactorGridBasedSchema](docs/DaylightFactorGridBasedSchema.md)
 - [DirectReflectionGridBasedSchema](docs/DirectReflectionGridBasedSchema.md)
 - [FivePhaselGridBasedSchema](docs/FivePhaselGridBasedSchema.md)
 - [GridBasedRecipeSchema](docs/GridBasedRecipeSchema.md)
 - [HBSurfaceSchema](docs/HBSurfaceSchema.md)
 - [HoySchema](docs/HoySchema.md)
 - [HoySchemaHoy](docs/HoySchemaHoy.md)
 - [HoysSchema](docs/HoysSchema.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [InlineResponse204](docs/InlineResponse204.md)
 - [InlineResponse400](docs/InlineResponse400.md)
 - [LightSourceMaterialSchema](docs/LightSourceMaterialSchema.md)
 - [Location](docs/Location.md)
 - [LocationSchema](docs/LocationSchema.md)
 - [MaterialSchema](docs/MaterialSchema.md)
 - [OpaqueMaterialSchema](docs/OpaqueMaterialSchema.md)
 - [PointInTimeGridBasedSchema](docs/PointInTimeGridBasedSchema.md)
 - [PointSchema](docs/PointSchema.md)
 - [QueryParameters](docs/QueryParameters.md)
 - [RadianceParameters](docs/RadianceParameters.md)
 - [RadiationGridBasedSchema](docs/RadiationGridBasedSchema.md)
 - [SkyMtxSchema](docs/SkyMtxSchema.md)
 - [SkySchema](docs/SkySchema.md)
 - [SolarAccessGridBasedSchema](docs/SolarAccessGridBasedSchema.md)
 - [SourceSchema](docs/SourceSchema.md)
 - [StateSchema](docs/StateSchema.md)
 - [SurfacePropertySchema](docs/SurfacePropertySchema.md)
 - [SurfaceStateSchema](docs/SurfaceStateSchema.md)
 - [ThreePhaselGridBasedSchema](docs/ThreePhaselGridBasedSchema.md)
 - [TranslucentMaterialSchema](docs/TranslucentMaterialSchema.md)
 - [VectorSchema](docs/VectorSchema.md)
 - [VertexSchema](docs/VertexSchema.md)
 - [VertexSchemaInner](docs/VertexSchemaInner.md)
 - [WeaSchema](docs/WeaSchema.md)


## Documentation For Authorization

 All endpoints do not require authorization.


## Author


