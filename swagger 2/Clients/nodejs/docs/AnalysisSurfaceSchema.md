# HoneybeeServerApi.AnalysisSurfaceSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the surface | [optional] 
**surfaceType** | **Number** | 0.0&#x3D;Wall, 0.5&#x3D;UndergroundWall, 1.0&#x3D;Roof, 1.5&#x3D;UndergroundCeiling, 2.0&#x3D;Floor, 2.5&#x3D;SlabOnGrade, 2.75&#x3D;ExposedFloor, 3.0&#x3D;Ceiling, 5.0&#x3D;Window, 6.0&#x3D;Context | [optional] 
**vertices** | [**[VertexSchema]**](VertexSchema.md) |  | [optional] 
**radProperties** | [**AnalysisSurfaceSchemaRadProperties**](AnalysisSurfaceSchemaRadProperties.md) |  | [optional] 
**surfaceStates** | [**[SurfaceStateSchema]**](SurfaceStateSchema.md) |  | [optional] 


