# HoneybeeServerApi.SkySchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**EpwLocationSchema**](EpwLocationSchema.md) |  | [optional] 
**hour** | **Number** | hour of the day - minvalue 0 and max value 23 | [optional] 
**day** | **Number** | day of the month - minvalue 1 and max value 31 | [optional] 
**month** | **Number** | month of the year - minvalue 1 and max value 12 | [optional] 
**north** | **Number** | angle in degrees between 0-360 to indicate North | [optional] 
**skyType** | **Number** | 0 - Sunny with sun, 1 - sunny without sun, 2 - intermediate with sun, 3 - intermediate without sun, 4 - cloudy sky, 5 - uniform sky | [optional] 


