/*
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type SkySchema struct {

	Location *EpwLocationSchema `json:"location,omitempty"`

	// hour of the day - minvalue 0 and max value 23
	Hour int32 `json:"hour,omitempty"`

	// day of the month - minvalue 1 and max value 31
	Day int32 `json:"day,omitempty"`

	// month of the year - minvalue 1 and max value 12
	Month int32 `json:"month,omitempty"`

	// angle in degrees between 0-360 to indicate North
	North float32 `json:"north,omitempty"`

	// 0 - Sunny with sun, 1 - sunny without sun, 2 - intermediate with sun, 3 - intermediate without sun, 4 - cloudy sky, 5 - uniform sky
	SkyType int32 `json:"sky_type,omitempty"`
}
