/*
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type SolarAccessGridBasedSchema struct {

	Id string `json:"id,omitempty"`

	Type_ string `json:"type,omitempty"`

	AnalysisGrids []AnalysisGridSchema `json:"analysis_grids,omitempty"`

	Surfaces []HbSurfaceSchema `json:"surfaces,omitempty"`

	Location *LocationSchema `json:"location,omitempty"`

	Hoys *HoysSchema `json:"hoys,omitempty"`

	// A list of vectors if location is not provided
	SunVectors []VectorSchema `json:"sun_vectors,omitempty"`
}