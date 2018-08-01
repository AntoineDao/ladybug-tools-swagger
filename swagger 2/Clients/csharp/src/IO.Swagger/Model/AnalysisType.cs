/* 
 * Honeybee Server API
 *
 * A sample API definition for a honeybee server
 *
 * OpenAPI spec version: 0.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;

namespace IO.Swagger.Model
{
    /// <summary>
    /// 0 - illuminance(lux), 1 - radiation (kwh), 2 - luminance (Candela)
    /// </summary>
    /// <value>0 - illuminance(lux), 1 - radiation (kwh), 2 - luminance (Candela)</value>
    
    public enum AnalysisType
    {
        
        /// <summary>
        /// Enum _0 for value: 0
        /// </summary>
        
        _0 = 0,
        
        /// <summary>
        /// Enum _1 for value: 1
        /// </summary>
        
        _1 = 1,
        
        /// <summary>
        /// Enum _2 for value: 2
        /// </summary>
        
        _2 = 2
    }

}
