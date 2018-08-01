# HoneybeeServerApi.DirectReflectionGridBasedSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**analysisGrids** | [**[AnalysisGridSchema]**](AnalysisGridSchema.md) |  | [optional] 
**surfaces** | [**[HBSurfaceSchema]**](HBSurfaceSchema.md) |  | [optional] 
**location** | [**EpwLocationSchema**](EpwLocationSchema.md) |  | [optional] 
**hoys** | [**HoyListSchema**](HoyListSchema.md) |  | [optional] 
**sunVectors** | [**[VectorSchema]**](VectorSchema.md) | A list of vectors if location is not provided | [optional] 


<a name="IdEnum"></a>
## Enum: IdEnum


* `reflection` (value: `"direct_reflection"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `gridbased` (value: `"gridbased"`)




