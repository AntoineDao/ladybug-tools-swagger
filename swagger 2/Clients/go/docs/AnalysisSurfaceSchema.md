# AnalysisSurfaceSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the surface | [optional] [default to null]
**SurfaceType** | **float32** | 0.0&#x3D;Wall, 0.5&#x3D;UndergroundWall, 1.0&#x3D;Roof, 1.5&#x3D;UndergroundCeiling, 2.0&#x3D;Floor, 2.5&#x3D;SlabOnGrade, 2.75&#x3D;ExposedFloor, 3.0&#x3D;Ceiling, 5.0&#x3D;Window, 6.0&#x3D;Context | [optional] [default to null]
**Vertices** | [**[]VertexSchema**](VertexSchema.md) |  | [optional] [default to null]
**RadProperties** | [***AnalysisSurfaceSchemaRadProperties**](AnalysisSurfaceSchema_rad_properties.md) |  | [optional] [default to null]
**SurfaceStates** | [**[]SurfaceStateSchema**](SurfaceStateSchema.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


