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
    /// InlineResponse2008
    /// </summary>
    [DataContract]
    public partial class InlineResponse2008 :  IEquatable<InlineResponse2008>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2008" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InlineResponse2008() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2008" /> class.
        /// </summary>
        /// <param name="Uuid">Uuid (required).</param>
        /// <param name="Hbsurface">Hbsurface (required).</param>
        public InlineResponse2008(string Uuid = default(string), HBSurfaceSchema Hbsurface = default(HBSurfaceSchema))
        {
            // to ensure "Uuid" is required (not null)
            if (Uuid == null)
            {
                throw new InvalidDataException("Uuid is a required property for InlineResponse2008 and cannot be null");
            }
            else
            {
                this.Uuid = Uuid;
            }
            // to ensure "Hbsurface" is required (not null)
            if (Hbsurface == null)
            {
                throw new InvalidDataException("Hbsurface is a required property for InlineResponse2008 and cannot be null");
            }
            else
            {
                this.Hbsurface = Hbsurface;
            }
        }
        
        /// <summary>
        /// Gets or Sets Uuid
        /// </summary>
        [DataMember(Name="uuid", EmitDefaultValue=false)]
        public string Uuid { get; set; }

        /// <summary>
        /// Gets or Sets Hbsurface
        /// </summary>
        [DataMember(Name="hbsurface", EmitDefaultValue=false)]
        public HBSurfaceSchema Hbsurface { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2008 {\n");
            sb.Append("  Uuid: ").Append(Uuid).Append("\n");
            sb.Append("  Hbsurface: ").Append(Hbsurface).Append("\n");
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
            return this.Equals(input as InlineResponse2008);
        }

        /// <summary>
        /// Returns true if InlineResponse2008 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2008 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2008 input)
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
                    this.Hbsurface == input.Hbsurface ||
                    (this.Hbsurface != null &&
                    this.Hbsurface.Equals(input.Hbsurface))
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
                if (this.Hbsurface != null)
                    hashCode = hashCode * 59 + this.Hbsurface.GetHashCode();
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
