/*
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type DaylightFactorGridBasedSchema struct {

	Id string `json:"id,omitempty"`

	Type_ string `json:"type,omitempty"`

	AnalysisGrids []AnalysisGridSchema `json:"analysis_grids,omitempty"`

	Surfaces []HbSurfaceSchema `json:"surfaces,omitempty"`

	RadParameters *RadianceParameters `json:"rad_parameters,omitempty"`
}
