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
    /// InlineResponse200Results
    /// </summary>
    [DataContract]
    public partial class InlineResponse200Results :  IEquatable<InlineResponse200Results>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse200Results" /> class.
        /// </summary>
        /// <param name="Uuid">Uuid.</param>
        /// <param name="AnalysisGrid">AnalysisGrid.</param>
        public InlineResponse200Results(string Uuid = default(string), AnalysisGridSchema AnalysisGrid = default(AnalysisGridSchema))
        {
            this.Uuid = Uuid;
            this.AnalysisGrid = AnalysisGrid;
        }
        
        /// <summary>
        /// Gets or Sets Uuid
        /// </summary>
        [DataMember(Name="uuid", EmitDefaultValue=false)]
        public string Uuid { get; set; }

        /// <summary>
        /// Gets or Sets AnalysisGrid
        /// </summary>
        [DataMember(Name="analysis_grid", EmitDefaultValue=false)]
        public AnalysisGridSchema AnalysisGrid { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse200Results {\n");
            sb.Append("  Uuid: ").Append(Uuid).Append("\n");
            sb.Append("  AnalysisGrid: ").Append(AnalysisGrid).Append("\n");
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
            return this.Equals(input as InlineResponse200Results);
        }

        /// <summary>
        /// Returns true if InlineResponse200Results instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse200Results to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse200Results input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Uuid == input.Uuid ||
                    (this.Uuid != null &&
                    this.Uuid.Equals(input.Uuid))
                ) && 
                (
                    this.AnalysisGrid == input.AnalysisGrid ||
                    (this.AnalysisGrid != null &&
                    this.AnalysisGrid.Equals(input.AnalysisGrid))
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
                if (this.Uuid != null)
                    hashCode = hashCode * 59 + this.Uuid.GetHashCode();
                if (this.AnalysisGrid != null)
                    hashCode = hashCode * 59 + this.AnalysisGrid.GetHashCode();
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
