/*
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type LocationSchema struct {

	City string `json:"city,omitempty"`

	// minvalue -90 and max value 90
	Latitude float32 `json:"latitude,omitempty"`

	// minvalue -180 and max value 180
	Longitude float32 `json:"longitude,omitempty"`

	TimeZone string `json:"time_zone,omitempty"`

	Elevation float32 `json:"elevation,omitempty"`
}
