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
    /// DaylightFactorGridBasedSchema
    /// </summary>
    [DataContract]
    public partial class DaylightFactorGridBasedSchema :  IEquatable<DaylightFactorGridBasedSchema>, IValidatableObject
    {
        /// <summary>
        /// Defines Id
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum IdEnum
        {
            
            /// <summary>
            /// Enum Factor for value: daylight_factor
            /// </summary>
            [EnumMember(Value = "daylight_factor")]
            Factor = 1
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public IdEnum? Id { get; set; }
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            
            /// <summary>
            /// Enum Gridbased for value: gridbased
            /// </summary>
            [EnumMember(Value = "gridbased")]
            Gridbased = 1
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name="type", EmitDefaultValue=false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="DaylightFactorGridBasedSchema" /> class.
        /// </summary>
        /// <param name="Id">Id.</param>
        /// <param name="Type">Type.</param>
        /// <param name="AnalysisGrids">AnalysisGrids.</param>
        /// <param name="Surfaces">Surfaces.</param>
        /// <param name="RadParameters">RadParameters.</param>
        public DaylightFactorGridBasedSchema(IdEnum? Id = default(IdEnum?), TypeEnum? Type = default(TypeEnum?), List<AnalysisGridSchema> AnalysisGrids = default(List<AnalysisGridSchema>), List<HBSurfaceSchema> Surfaces = default(List<HBSurfaceSchema>), RadianceParameters RadParameters = default(RadianceParameters))
        {
            this.Id = Id;
            this.Type = Type;
            this.AnalysisGrids = AnalysisGrids;
            this.Surfaces = Surfaces;
            this.RadParameters = RadParameters;
        }
        


        /// <summary>
        /// Gets or Sets AnalysisGrids
        /// </summary>
        [DataMember(Name="analysis_grids", EmitDefaultValue=false)]
        public List<AnalysisGridSchema> AnalysisGrids { get; set; }

        /// <summary>
        /// Gets or Sets Surfaces
        /// </summary>
        [DataMember(Name="surfaces", EmitDefaultValue=false)]
        public List<HBSurfaceSchema> Surfaces { get; set; }

        /// <summary>
        /// Gets or Sets RadParameters
        /// </summary>
        [DataMember(Name="rad_parameters", EmitDefaultValue=false)]
        public RadianceParameters RadParameters { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DaylightFactorGridBasedSchema {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  AnalysisGrids: ").Append(AnalysisGrids).Append("\n");
            sb.Append("  Surfaces: ").Append(Surfaces).Append("\n");
            sb.Append("  RadParameters: ").Append(RadParameters).Append("\n");
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
            return this.Equals(input as DaylightFactorGridBasedSchema);
        }

        /// <summary>
        /// Returns true if DaylightFactorGridBasedSchema instances are equal
        /// </summary>
        /// <param name="input">Instance of DaylightFactorGridBasedSchema to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DaylightFactorGridBasedSchema input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.AnalysisGrids == input.AnalysisGrids ||
                    this.AnalysisGrids != null &&
                    this.AnalysisGrids.SequenceEqual(input.AnalysisGrids)
                ) && 
                (
                    this.Surfaces == input.Surfaces ||
                    this.Surfaces != null &&
                    this.Surfaces.SequenceEqual(input.Surfaces)
                ) && 
                (
                    this.RadParameters == input.RadParameters ||
                    (this.RadParameters != null &&
                    this.RadParameters.Equals(input.RadParameters))
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Type != null)
                    hashCode = hashCode * 59 + this.Type.GetHashCode();
                if (this.AnalysisGrids != null)
                    hashCode = hashCode * 59 + this.AnalysisGrids.GetHashCode();
                if (this.Surfaces != null)
                    hashCode = hashCode * 59 + this.Surfaces.GetHashCode();
                if (this.RadParameters != null)
                    hashCode = hashCode * 59 + this.RadParameters.GetHashCode();
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
            yield break;
        }
    }

}
