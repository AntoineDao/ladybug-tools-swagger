/*
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type LightSourceMaterialSchema struct {

	// Name of the material
	Name string `json:"name,omitempty"`

	// A positive value for the Red channel of the glow
	Red float32 `json:"red,omitempty"`

	// A positive value for the Green channel of the glow
	Green float32 `json:"green,omitempty"`

	// A positive value for the Blue channel of the glow
	Blue float32 `json:"blue,omitempty"`

	// Maximum radius for shadow testing
	Radius float32 `json:"radius,omitempty"`

	Modifier string `json:"modifier,omitempty"`
}
