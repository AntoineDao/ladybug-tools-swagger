/*
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type WeaSchema struct {

	Header []string `json:"header"`

	Location *EpwLocationSchema `json:"location"`

	DirectNormalRadiation *DataCollectionSchema `json:"direct_normal_radiation,omitempty"`

	DiffuseHorizontalRadiation *DataCollectionSchema `json:"diffuse_horizontal_radiation,omitempty"`
}
