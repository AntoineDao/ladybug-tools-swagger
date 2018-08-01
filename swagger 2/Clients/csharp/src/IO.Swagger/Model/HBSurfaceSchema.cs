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
    /// HBSurfaceSchema
    /// </summary>
    [DataContract]
    public partial class HBSurfaceSchema :  IEquatable<HBSurfaceSchema>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="HBSurfaceSchema" /> class.
        /// </summary>
        /// <param name="ParentSurface">ParentSurface.</param>
        /// <param name="ChildSurfaces">ChildSurfaces.</param>
        public HBSurfaceSchema(AnalysisSurfaceSchema ParentSurface = default(AnalysisSurfaceSchema), List<AnalysisSurfaceSchema> ChildSurfaces = default(List<AnalysisSurfaceSchema>))
        {
            this.ParentSurface = ParentSurface;
            this.ChildSurfaces = ChildSurfaces;
        }
        
        /// <summary>
        /// Gets or Sets ParentSurface
        /// </summary>
        [DataMember(Name="parent_surface", EmitDefaultValue=false)]
        public AnalysisSurfaceSchema ParentSurface { get; set; }

        /// <summary>
        /// Gets or Sets ChildSurfaces
        /// </summary>
        [DataMember(Name="child_surfaces", EmitDefaultValue=false)]
        public List<AnalysisSurfaceSchema> ChildSurfaces { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class HBSurfaceSchema {\n");
            sb.Append("  ParentSurface: ").Append(ParentSurface).Append("\n");
            sb.Append("  ChildSurfaces: ").Append(ChildSurfaces).Append("\n");
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
            return this.Equals(input as HBSurfaceSchema);
        }

        /// <summary>
        /// Returns true if HBSurfaceSchema instances are equal
        /// </summary>
        /// <param name="input">Instance of HBSurfaceSchema to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(HBSurfaceSchema input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ParentSurface == input.ParentSurface ||
                    (this.ParentSurface != null &&
                    this.ParentSurface.Equals(input.ParentSurface))
                ) && 
                (
                    this.ChildSurfaces == input.ChildSurfaces ||
                    this.ChildSurfaces != null &&
                    this.ChildSurfaces.SequenceEqual(input.ChildSurfaces)
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
                if (this.ParentSurface != null)
                    hashCode = hashCode * 59 + this.ParentSurface.GetHashCode();
                if (this.ChildSurfaces != null)
                    hashCode = hashCode * 59 + this.ChildSurfaces.GetHashCode();
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
