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
    /// SurfacePropertySchema
    /// </summary>
    [DataContract]
    public partial class SurfacePropertySchema :  IEquatable<SurfacePropertySchema>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SurfacePropertySchema" /> class.
        /// </summary>
        /// <param name="SurfaceType">0.0&#x3D;Wall, 0.5&#x3D;UndergroundWall, 1.0&#x3D;Roof, 1.5&#x3D;UndergroundCeiling, 2.0&#x3D;Floor, 2.5&#x3D;SlabOnGrade, 2.75&#x3D;ExposedFloor, 3.0&#x3D;Ceiling, 5.0&#x3D;Window, 6.0&#x3D;Context.</param>
        /// <param name="RadProperties">RadProperties.</param>
        public SurfacePropertySchema(decimal? SurfaceType = default(decimal?), MaterialSchema RadProperties = default(MaterialSchema))
        {
            this.SurfaceType = SurfaceType;
            this.RadProperties = RadProperties;
        }
        
        /// <summary>
        /// 0.0&#x3D;Wall, 0.5&#x3D;UndergroundWall, 1.0&#x3D;Roof, 1.5&#x3D;UndergroundCeiling, 2.0&#x3D;Floor, 2.5&#x3D;SlabOnGrade, 2.75&#x3D;ExposedFloor, 3.0&#x3D;Ceiling, 5.0&#x3D;Window, 6.0&#x3D;Context
        /// </summary>
        /// <value>0.0&#x3D;Wall, 0.5&#x3D;UndergroundWall, 1.0&#x3D;Roof, 1.5&#x3D;UndergroundCeiling, 2.0&#x3D;Floor, 2.5&#x3D;SlabOnGrade, 2.75&#x3D;ExposedFloor, 3.0&#x3D;Ceiling, 5.0&#x3D;Window, 6.0&#x3D;Context</value>
        [DataMember(Name="surface_type", EmitDefaultValue=false)]
        public decimal? SurfaceType { get; set; }

        /// <summary>
        /// Gets or Sets RadProperties
        /// </summary>
        [DataMember(Name="rad_properties", EmitDefaultValue=false)]
        public MaterialSchema RadProperties { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SurfacePropertySchema {\n");
            sb.Append("  SurfaceType: ").Append(SurfaceType).Append("\n");
            sb.Append("  RadProperties: ").Append(RadProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as SurfacePropertySchema);
        }

        /// <summary>
        /// Returns true if SurfacePropertySchema instances are equal
        /// </summary>
        /// <param name="input">Instance of SurfacePropertySchema to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SurfacePropertySchema input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.SurfaceType == input.SurfaceType ||
                    (this.SurfaceType != null &&
                    this.SurfaceType.Equals(input.SurfaceType))
                ) && 
                (
                    this.RadProperties == input.RadProperties ||
                    (this.RadProperties != null &&
                    this.RadProperties.Equals(input.RadProperties))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.SurfaceType != null)
                    hashCode = hashCode * 59 + this.SurfaceType.GetHashCode();
                if (this.RadProperties != null)
                    hashCode = hashCode * 59 + this.RadProperties.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            // SurfaceType (decimal?) maximum
            if(this.SurfaceType > (decimal?)6)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for SurfaceType, must be a value less than or equal to 6.", new [] { "SurfaceType" });
            }

            // SurfaceType (decimal?) minimum
            if(this.SurfaceType < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for SurfaceType, must be a value greater than or equal to 0.", new [] { "SurfaceType" });
            }

            yield break;
        }
    }

}
