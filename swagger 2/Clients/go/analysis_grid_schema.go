/*
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type AnalysisGridSchema struct {

	// The name of the grid
	Name string `json:"name,omitempty"`

	AnalysisPoints []AnalysisPointSchema `json:"analysis_points,omitempty"`

	WindowGroups []ErrorUnknown `json:"window_groups,omitempty"`
}