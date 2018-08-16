/*
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type BsdfMaterialSchema struct {

	// Name of the material
	Name string `json:"name,omitempty"`

	// A string of the original XML
	XmlData string `json:"xml_data,omitempty"`

	UpOrientation float32 `json:"up_orientation,omitempty"`

	Thickness float32 `json:"thickness,omitempty"`

	Modifier string `json:"modifier,omitempty"`
}