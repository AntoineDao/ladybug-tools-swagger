/*
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type TranslucentMaterialSchema struct {

	// Name of the material
	Name string `json:"name,omitempty"`

	// Transmittance for red
	RTransmittance float32 `json:"r_transmittance,omitempty"`

	// Transmittance for green
	GTransmittance float32 `json:"g_transmittance,omitempty"`

	// Transmittance for blue
	BTransmittance float32 `json:"b_transmittance,omitempty"`

	// Index of refraction
	Refraction float32 `json:"refraction,omitempty"`

	Modifier string `json:"modifier,omitempty"`
}