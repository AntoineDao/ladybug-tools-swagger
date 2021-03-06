# honeybee_server_api

HoneybeeServerApi - JavaScript client for honeybee_server_api
A sample API definition for a honeybee server
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.0
- Package version: 0.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install honeybee_server_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your honeybee_server_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('honeybee_server_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/honeybee_server_api
then install it via:

```shell
    npm install YOUR_USERNAME/honeybee_server_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var HoneybeeServerApi = require('honeybee_server_api');

var api = new HoneybeeServerApi.AnalysisGridApi()

var opts = { 
  'gridName': "gridName_example", // {String} The name of the grid
  'minPoints': 56, // {Number} The minimum amount of points the analysis grid has
  'maxPoints': 56 // {Number} The maximum amount of points the analysis grid has
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.analysisGridGet(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://api.ladybug-tools.io/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HoneybeeServerApi.AnalysisGridApi* | [**analysisGridGet**](docs/AnalysisGridApi.md#analysisGridGet) | **GET** /analysis_grid | Get a list of analysis_grid objects
*HoneybeeServerApi.AnalysisGridApi* | [**analysisGridPost**](docs/AnalysisGridApi.md#analysisGridPost) | **POST** /analysis_grid | Create a new analysis_grid file
*HoneybeeServerApi.AnalysisGridApi* | [**analysisGridUuidDelete**](docs/AnalysisGridApi.md#analysisGridUuidDelete) | **DELETE** /analysis_grid/{uuid} | Delete an existing analysis_grid file
*HoneybeeServerApi.AnalysisGridApi* | [**analysisGridUuidGet**](docs/AnalysisGridApi.md#analysisGridUuidGet) | **GET** /analysis_grid/{uuid} | Get an analysis_grid object
*HoneybeeServerApi.AnalysisGridApi* | [**analysisGridUuidPut**](docs/AnalysisGridApi.md#analysisGridUuidPut) | **PUT** /analysis_grid/{uuid} | Modify an existing analysis_grid file
*HoneybeeServerApi.AnnualRecipeApi* | [**recipeAnnualGridbasedPost**](docs/AnnualRecipeApi.md#recipeAnnualGridbasedPost) | **POST** /recipe/annual/gridbased | Create a new annual object
*HoneybeeServerApi.AnnualRecipeApi* | [**recipeAnnualGridbasedUuidPut**](docs/AnnualRecipeApi.md#recipeAnnualGridbasedUuidPut) | **PUT** /recipe/annual/gridbased/{uuid} | Modify an existing annual object
*HoneybeeServerApi.BSDFMaterialApi* | [**materialBsdfPost**](docs/BSDFMaterialApi.md#materialBsdfPost) | **POST** /material/bsdf | Create a new bsdf material object
*HoneybeeServerApi.BSDFMaterialApi* | [**materialBsdfUuidPut**](docs/BSDFMaterialApi.md#materialBsdfUuidPut) | **PUT** /material/bsdf/{uuid} | Modify an existing bsdf material file
*HoneybeeServerApi.DaylightFactorRecipeApi* | [**recipeDaylightFactorGridbasedPost**](docs/DaylightFactorRecipeApi.md#recipeDaylightFactorGridbasedPost) | **POST** /recipe/daylight_factor/gridbased | Create a new analysis_grid object
*HoneybeeServerApi.DaylightFactorRecipeApi* | [**recipeDaylightFactorGridbasedUuidPut**](docs/DaylightFactorRecipeApi.md#recipeDaylightFactorGridbasedUuidPut) | **PUT** /recipe/daylight_factor/gridbased/{uuid} | Modify an existing analysis_grid object
*HoneybeeServerApi.DirectReflectionRecipeApi* | [**recipeDirectReflectionGridbasedPost**](docs/DirectReflectionRecipeApi.md#recipeDirectReflectionGridbasedPost) | **POST** /recipe/direct_reflection/gridbased | Create a new direct_reflection object
*HoneybeeServerApi.DirectReflectionRecipeApi* | [**recipeDirectReflectionGridbasedUuidPut**](docs/DirectReflectionRecipeApi.md#recipeDirectReflectionGridbasedUuidPut) | **PUT** /recipe/direct_reflection/gridbased/{uuid} | Modify an existing direct_reflection object
*HoneybeeServerApi.EPWApi* | [**epwGet**](docs/EPWApi.md#epwGet) | **GET** /epw | Get a list of EPW objects
*HoneybeeServerApi.EPWApi* | [**epwPost**](docs/EPWApi.md#epwPost) | **POST** /epw | Create a new epw file
*HoneybeeServerApi.EPWApi* | [**epwUuidDelete**](docs/EPWApi.md#epwUuidDelete) | **DELETE** /epw/{uuid} | Delete an existing epw file
*HoneybeeServerApi.EPWApi* | [**epwUuidGet**](docs/EPWApi.md#epwUuidGet) | **GET** /epw/{uuid} | Get a specific epw file
*HoneybeeServerApi.EPWApi* | [**epwUuidPut**](docs/EPWApi.md#epwUuidPut) | **PUT** /epw/{uuid} | Modify an existing epw file
*HoneybeeServerApi.FivePhaseRecipeApi* | [**recipeFivePhaseGridbasedPost**](docs/FivePhaseRecipeApi.md#recipeFivePhaseGridbasedPost) | **POST** /recipe/five_phase/gridbased | Create a new five_phase object
*HoneybeeServerApi.FivePhaseRecipeApi* | [**recipeFivePhaseGridbasedUuidPut**](docs/FivePhaseRecipeApi.md#recipeFivePhaseGridbasedUuidPut) | **PUT** /recipe/five_phase/gridbased/{uuid} | Modify an existing five_phase object
*HoneybeeServerApi.GetAndDeleteMaterialsApi* | [**materialGet**](docs/GetAndDeleteMaterialsApi.md#materialGet) | **GET** /material | Get a list of material objects
*HoneybeeServerApi.GetAndDeleteMaterialsApi* | [**materialUuidDelete**](docs/GetAndDeleteMaterialsApi.md#materialUuidDelete) | **DELETE** /material/{uuid} | Delete an existing material file
*HoneybeeServerApi.GetAndDeleteMaterialsApi* | [**materialUuidGet**](docs/GetAndDeleteMaterialsApi.md#materialUuidGet) | **GET** /material/{uuid} | Get a specific material object
*HoneybeeServerApi.GetAndDeleteRecipesApi* | [**recipeGet**](docs/GetAndDeleteRecipesApi.md#recipeGet) | **GET** /recipe/ | Get a list of daylight recipe objects
*HoneybeeServerApi.GetAndDeleteRecipesApi* | [**recipeUuidDelete**](docs/GetAndDeleteRecipesApi.md#recipeUuidDelete) | **DELETE** /recipe/{uuid} | Delete an existing recipe object
*HoneybeeServerApi.GetAndDeleteRecipesApi* | [**recipeUuidGet**](docs/GetAndDeleteRecipesApi.md#recipeUuidGet) | **GET** /recipe/{uuid} | Get a specific analysis_grid object
*HoneybeeServerApi.HoneybeeSurfaceApi* | [**hbsurfaceGet**](docs/HoneybeeSurfaceApi.md#hbsurfaceGet) | **GET** /hbsurface | Get a list of hbsurface objects
*HoneybeeServerApi.HoneybeeSurfaceApi* | [**hbsurfacePost**](docs/HoneybeeSurfaceApi.md#hbsurfacePost) | **POST** /hbsurface | Create a new hbsurface object
*HoneybeeServerApi.HoneybeeSurfaceApi* | [**hbsurfaceUuidDelete**](docs/HoneybeeSurfaceApi.md#hbsurfaceUuidDelete) | **DELETE** /hbsurface/{uuid} | Delete an existing hbsurface object
*HoneybeeServerApi.HoneybeeSurfaceApi* | [**hbsurfaceUuidGet**](docs/HoneybeeSurfaceApi.md#hbsurfaceUuidGet) | **GET** /hbsurface/{uuid} | Get a specific hbsurface object
*HoneybeeServerApi.HoneybeeSurfaceApi* | [**hbsurfaceUuidPut**](docs/HoneybeeSurfaceApi.md#hbsurfaceUuidPut) | **PUT** /hbsurface/{uuid} | Modify an existing hbsurface object
*HoneybeeServerApi.LightSourceMaterialApi* | [**materialLightSourcePost**](docs/LightSourceMaterialApi.md#materialLightSourcePost) | **POST** /material/light_source | Create a new light_source material object
*HoneybeeServerApi.LightSourceMaterialApi* | [**materialLightSourceUuidPut**](docs/LightSourceMaterialApi.md#materialLightSourceUuidPut) | **PUT** /material/light_source/{uuid} | Modify an existing light_source material file
*HoneybeeServerApi.OpaqueMaterialApi* | [**materialOpaquePost**](docs/OpaqueMaterialApi.md#materialOpaquePost) | **POST** /material/opaque | Create a new opaque material object
*HoneybeeServerApi.OpaqueMaterialApi* | [**materialOpaqueUuidPut**](docs/OpaqueMaterialApi.md#materialOpaqueUuidPut) | **PUT** /material/opaque/{uuid} | Modify an existing opaque material file
*HoneybeeServerApi.PointInTimeRecipeApi* | [**recipePointInTimeGridbasedPost**](docs/PointInTimeRecipeApi.md#recipePointInTimeGridbasedPost) | **POST** /recipe/point_in_time/gridbased | Create a new point_in_time object
*HoneybeeServerApi.PointInTimeRecipeApi* | [**recipePointInTimeGridbasedUuidPut**](docs/PointInTimeRecipeApi.md#recipePointInTimeGridbasedUuidPut) | **PUT** /recipe/point_in_time/gridbased/{uuid} | Modify an existing point_in_time object
*HoneybeeServerApi.RadiationRecipeApi* | [**recipeRadiationGridbasedPost**](docs/RadiationRecipeApi.md#recipeRadiationGridbasedPost) | **POST** /recipe/radiation/gridbased | Create a new radiation object
*HoneybeeServerApi.RadiationRecipeApi* | [**recipeRadiationGridbasedUuidPut**](docs/RadiationRecipeApi.md#recipeRadiationGridbasedUuidPut) | **PUT** /recipe/radiation/gridbased/{uuid} | Modify an existing radiation object
*HoneybeeServerApi.SolarAccessRecipeApi* | [**recipeSolarAccessGridbasedPost**](docs/SolarAccessRecipeApi.md#recipeSolarAccessGridbasedPost) | **POST** /recipe/solar_access/gridbased | Create a new solar_access object
*HoneybeeServerApi.SolarAccessRecipeApi* | [**recipeSolarAccessGridbasedUuidPut**](docs/SolarAccessRecipeApi.md#recipeSolarAccessGridbasedUuidPut) | **PUT** /recipe/solar_access/gridbased/{uuid} | Modify an existing solar_access object
*HoneybeeServerApi.ThreePhaseRecipeApi* | [**recipeThreePhaseGridbasedPost**](docs/ThreePhaseRecipeApi.md#recipeThreePhaseGridbasedPost) | **POST** /recipe/three_phase/gridbased | Create a new three_phase object
*HoneybeeServerApi.ThreePhaseRecipeApi* | [**recipeThreePhaseGridbasedUuidPut**](docs/ThreePhaseRecipeApi.md#recipeThreePhaseGridbasedUuidPut) | **PUT** /recipe/three_phase/gridbased/{uuid} | Modify an existing three_phase object
*HoneybeeServerApi.TranslucentMaterialApi* | [**materialTranslucentPost**](docs/TranslucentMaterialApi.md#materialTranslucentPost) | **POST** /material/translucent | Create a new translucent material object
*HoneybeeServerApi.TranslucentMaterialApi* | [**materialTranslucentUuidPut**](docs/TranslucentMaterialApi.md#materialTranslucentUuidPut) | **PUT** /material/translucent/{uuid} | Modify an existing translucent material file
*HoneybeeServerApi.WEAApi* | [**weaGet**](docs/WEAApi.md#weaGet) | **GET** /wea | Get a list of WEA objects
*HoneybeeServerApi.WEAApi* | [**weaPost**](docs/WEAApi.md#weaPost) | **POST** /wea | Create a new wea object
*HoneybeeServerApi.WEAApi* | [**weaUuidDelete**](docs/WEAApi.md#weaUuidDelete) | **DELETE** /wea/{uuid} | Delete an existing wea object
*HoneybeeServerApi.WEAApi* | [**weaUuidGet**](docs/WEAApi.md#weaUuidGet) | **GET** /wea/{uuid} | Get a specific wea object
*HoneybeeServerApi.WEAApi* | [**weaUuidPut**](docs/WEAApi.md#weaUuidPut) | **PUT** /wea/{uuid} | Modify an existing wea object


## Documentation for Models

 - [HoneybeeServerApi.AnalysisGridSchema](docs/AnalysisGridSchema.md)
 - [HoneybeeServerApi.AnalysisPointSchema](docs/AnalysisPointSchema.md)
 - [HoneybeeServerApi.AnalysisSurfaceSchema](docs/AnalysisSurfaceSchema.md)
 - [HoneybeeServerApi.AnalysisSurfaceSchemaRadProperties](docs/AnalysisSurfaceSchemaRadProperties.md)
 - [HoneybeeServerApi.AnalysisType](docs/AnalysisType.md)
 - [HoneybeeServerApi.AnnualGridBasedSchema](docs/AnnualGridBasedSchema.md)
 - [HoneybeeServerApi.BSDFMaterialSchema](docs/BSDFMaterialSchema.md)
 - [HoneybeeServerApi.DataCollectionSchema](docs/DataCollectionSchema.md)
 - [HoneybeeServerApi.DataTypeSchema](docs/DataTypeSchema.md)
 - [HoneybeeServerApi.DaylightFactorGridBasedSchema](docs/DaylightFactorGridBasedSchema.md)
 - [HoneybeeServerApi.DirectReflectionGridBasedSchema](docs/DirectReflectionGridBasedSchema.md)
 - [HoneybeeServerApi.EpwLocationSchema](docs/EpwLocationSchema.md)
 - [HoneybeeServerApi.EpwSchema](docs/EpwSchema.md)
 - [HoneybeeServerApi.FivePhaselGridBasedSchema](docs/FivePhaselGridBasedSchema.md)
 - [HoneybeeServerApi.GridBasedRecipeSchema](docs/GridBasedRecipeSchema.md)
 - [HoneybeeServerApi.HBSurfaceSchema](docs/HBSurfaceSchema.md)
 - [HoneybeeServerApi.HoyListSchema](docs/HoyListSchema.md)
 - [HoneybeeServerApi.HoySchema](docs/HoySchema.md)
 - [HoneybeeServerApi.HoySchemaHoy](docs/HoySchemaHoy.md)
 - [HoneybeeServerApi.InlineResponse200](docs/InlineResponse200.md)
 - [HoneybeeServerApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [HoneybeeServerApi.InlineResponse20010](docs/InlineResponse20010.md)
 - [HoneybeeServerApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [HoneybeeServerApi.InlineResponse2002Results](docs/InlineResponse2002Results.md)
 - [HoneybeeServerApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [HoneybeeServerApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [HoneybeeServerApi.InlineResponse2004Results](docs/InlineResponse2004Results.md)
 - [HoneybeeServerApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [HoneybeeServerApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [HoneybeeServerApi.InlineResponse2006Results](docs/InlineResponse2006Results.md)
 - [HoneybeeServerApi.InlineResponse2007](docs/InlineResponse2007.md)
 - [HoneybeeServerApi.InlineResponse2007Results](docs/InlineResponse2007Results.md)
 - [HoneybeeServerApi.InlineResponse2008](docs/InlineResponse2008.md)
 - [HoneybeeServerApi.InlineResponse2009](docs/InlineResponse2009.md)
 - [HoneybeeServerApi.InlineResponse2009Results](docs/InlineResponse2009Results.md)
 - [HoneybeeServerApi.InlineResponse200Results](docs/InlineResponse200Results.md)
 - [HoneybeeServerApi.InlineResponse204](docs/InlineResponse204.md)
 - [HoneybeeServerApi.InlineResponse400](docs/InlineResponse400.md)
 - [HoneybeeServerApi.LightSourceMaterialSchema](docs/LightSourceMaterialSchema.md)
 - [HoneybeeServerApi.MaterialSchema](docs/MaterialSchema.md)
 - [HoneybeeServerApi.OpaqueMaterialSchema](docs/OpaqueMaterialSchema.md)
 - [HoneybeeServerApi.PointInTimeGridBasedSchema](docs/PointInTimeGridBasedSchema.md)
 - [HoneybeeServerApi.PointSchema](docs/PointSchema.md)
 - [HoneybeeServerApi.RadianceParameters](docs/RadianceParameters.md)
 - [HoneybeeServerApi.RadiationGridBasedSchema](docs/RadiationGridBasedSchema.md)
 - [HoneybeeServerApi.SkyMtxSchema](docs/SkyMtxSchema.md)
 - [HoneybeeServerApi.SkySchema](docs/SkySchema.md)
 - [HoneybeeServerApi.SolarAccessGridBasedSchema](docs/SolarAccessGridBasedSchema.md)
 - [HoneybeeServerApi.SourceSchema](docs/SourceSchema.md)
 - [HoneybeeServerApi.StateSchema](docs/StateSchema.md)
 - [HoneybeeServerApi.SurfacePropertySchema](docs/SurfacePropertySchema.md)
 - [HoneybeeServerApi.SurfaceStateSchema](docs/SurfaceStateSchema.md)
 - [HoneybeeServerApi.ThreePhaselGridBasedSchema](docs/ThreePhaselGridBasedSchema.md)
 - [HoneybeeServerApi.TranslucentMaterialSchema](docs/TranslucentMaterialSchema.md)
 - [HoneybeeServerApi.VectorSchema](docs/VectorSchema.md)
 - [HoneybeeServerApi.VertexSchema](docs/VertexSchema.md)
 - [HoneybeeServerApi.VertexSchemaInner](docs/VertexSchemaInner.md)
 - [HoneybeeServerApi.WeaSchema](docs/WeaSchema.md)


## Documentation for Authorization

 All endpoints do not require authorization.

