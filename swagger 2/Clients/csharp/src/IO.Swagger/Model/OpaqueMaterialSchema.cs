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
    /// OpaqueMaterialSchema
    /// </summary>
    [DataContract]
    public partial class OpaqueMaterialSchema :  IEquatable<OpaqueMaterialSchema>, IValidatableObject
    {
        /// <summary>
        /// Material type
        /// </summary>
        /// <value>Material type</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            
            /// <summary>
            /// Enum Metal for value: metal
            /// </summary>
            [EnumMember(Value = "metal")]
            Metal = 1,
            
            /// <summary>
            /// Enum Plastic for value: plastic
            /// </summary>
            [EnumMember(Value = "plastic")]
            Plastic = 2
        }

        /// <summary>
        /// Material type
        /// </summary>
        /// <value>Material type</value>
        [DataMember(Name="type", EmitDefaultValue=false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="OpaqueMaterialSchema" /> class.
        /// </summary>
        /// <param name="Name">Name of the material.</param>
        /// <param name="Type">Material type.</param>
        /// <param name="RReflectance">Reflectance for red.</param>
        /// <param name="GReflectance">Reflectance for green.</param>
        /// <param name="BReflectance">Reflectance for blue.</param>
        /// <param name="Refraction">Index of refraction.</param>
        /// <param name="Specularity">Material specularity.</param>
        /// <param name="Roughness">Material roughness.</param>
        /// <param name="Modifier">Modifier (default to &quot;void&quot;).</param>
        public OpaqueMaterialSchema(string Name = default(string), TypeEnum? Type = default(TypeEnum?), decimal? RReflectance = default(decimal?), decimal? GReflectance = default(decimal?), decimal? BReflectance = default(decimal?), decimal? Refraction = default(decimal?), decimal? Specularity = default(decimal?), decimal? Roughness = default(decimal?), string Modifier = "void")
        {
            this.Name = Name;
            this.Type = Type;
            this.RReflectance = RReflectance;
            this.GReflectance = GReflectance;
            this.BReflectance = BReflectance;
            this.Refraction = Refraction;
            this.Specularity = Specularity;
            this.Roughness = Roughness;
            // use default value if no "Modifier" provided
            if (Modifier == null)
            {
                this.Modifier = "void";
            }
            else
            {
                this.Modifier = Modifier;
            }
        }
        
        /// <summary>
        /// Name of the material
        /// </summary>
        /// <value>Name of the material</value>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }


        /// <summary>
        /// Reflectance for red
        /// </summary>
        /// <value>Reflectance for red</value>
        [DataMember(Name="r_reflectance", EmitDefaultValue=false)]
        public decimal? RReflectance { get; set; }

        /// <summary>
        /// Reflectance for green
        /// </summary>
        /// <value>Reflectance for green</value>
        [DataMember(Name="g_reflectance", EmitDefaultValue=false)]
        public decimal? GReflectance { get; set; }

        /// <summary>
        /// Reflectance for blue
        /// </summary>
        /// <value>Reflectance for blue</value>
        [DataMember(Name="b_reflectance", EmitDefaultValue=false)]
        public decimal? BReflectance { get; set; }

        /// <summary>
        /// Index of refraction
        /// </summary>
        /// <value>Index of refraction</value>
        [DataMember(Name="refraction", EmitDefaultValue=false)]
        public decimal? Refraction { get; set; }

        /// <summary>
        /// Material specularity
        /// </summary>
        /// <value>Material specularity</value>
        [DataMember(Name="specularity", EmitDefaultValue=false)]
        public decimal? Specularity { get; set; }

        /// <summary>
        /// Material roughness
        /// </summary>
        /// <value>Material roughness</value>
        [DataMember(Name="roughness", EmitDefaultValue=false)]
        public decimal? Roughness { get; set; }

        /// <summary>
        /// Gets or Sets Modifier
        /// </summary>
        [DataMember(Name="modifier", EmitDefaultValue=false)]
        public string Modifier { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class OpaqueMaterialSchema {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  RReflectance: ").Append(RReflectance).Append("\n");
            sb.Append("  GReflectance: ").Append(GReflectance).Append("\n");
            sb.Append("  BReflectance: ").Append(BReflectance).Append("\n");
            sb.Append("  Refraction: ").Append(Refraction).Append("\n");
            sb.Append("  Specularity: ").Append(Specularity).Append("\n");
            sb.Append("  Roughness: ").Append(Roughness).Append("\n");
            sb.Append("  Modifier: ").Append(Modifier).Append("\n");
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
            return this.Equals(input as OpaqueMaterialSchema);
        }

        /// <summary>
        /// Returns true if OpaqueMaterialSchema instances are equal
        /// </summary>
        /// <param name="input">Instance of OpaqueMaterialSchema to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OpaqueMaterialSchema input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.RReflectance == input.RReflectance ||
                    (this.RReflectance != null &&
                    this.RReflectance.Equals(input.RReflectance))
                ) && 
                (
                    this.GReflectance == input.GReflectance ||
                    (this.GReflectance != null &&
                    this.GReflectance.Equals(input.GReflectance))
                ) && 
                (
                    this.BReflectance == input.BReflectance ||
                    (this.BReflectance != null &&
                    this.BReflectance.Equals(input.BReflectance))
                ) && 
                (
                    this.Refraction == input.Refraction ||
                    (this.Refraction != null &&
                    this.Refraction.Equals(input.Refraction))
                ) && 
                (
                    this.Specularity == input.Specularity ||
                    (this.Specularity != null &&
                    this.Specularity.Equals(input.Specularity))
                ) && 
                (
                    this.Roughness == input.Roughness ||
                    (this.Roughness != null &&
                    this.Roughness.Equals(input.Roughness))
                ) && 
                (
                    this.Modifier == input.Modifier ||
                    (this.Modifier != null &&
                    this.Modifier.Equals(input.Modifier))
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Type != null)
                    hashCode = hashCode * 59 + this.Type.GetHashCode();
                if (this.RReflectance != null)
                    hashCode = hashCode * 59 + this.RReflectance.GetHashCode();
                if (this.GReflectance != null)
                    hashCode = hashCode * 59 + this.GReflectance.GetHashCode();
                if (this.BReflectance != null)
                    hashCode = hashCode * 59 + this.BReflectance.GetHashCode();
                if (this.Refraction != null)
                    hashCode = hashCode * 59 + this.Refraction.GetHashCode();
                if (this.Specularity != null)
                    hashCode = hashCode * 59 + this.Specularity.GetHashCode();
                if (this.Roughness != null)
                    hashCode = hashCode * 59 + this.Roughness.GetHashCode();
                if (this.Modifier != null)
                    hashCode = hashCode * 59 + this.Modifier.GetHashCode();
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
            // RReflectance (decimal?) maximum
            if(this.RReflectance > (decimal?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for RReflectance, must be a value less than or equal to 1.", new [] { "RReflectance" });
            }

            // RReflectance (decimal?) minimum
            if(this.RReflectance < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for RReflectance, must be a value greater than or equal to 0.", new [] { "RReflectance" });
            }

            // GReflectance (decimal?) maximum
            if(this.GReflectance > (decimal?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for GReflectance, must be a value less than or equal to 1.", new [] { "GReflectance" });
            }

            // GReflectance (decimal?) minimum
            if(this.GReflectance < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for GReflectance, must be a value greater than or equal to 0.", new [] { "GReflectance" });
            }

            // BReflectance (decimal?) maximum
            if(this.BReflectance > (decimal?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for BReflectance, must be a value less than or equal to 1.", new [] { "BReflectance" });
            }

            // BReflectance (decimal?) minimum
            if(this.BReflectance < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for BReflectance, must be a value greater than or equal to 0.", new [] { "BReflectance" });
            }

            // Refraction (decimal?) maximum
            if(this.Refraction > (decimal?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Refraction, must be a value less than or equal to 1.", new [] { "Refraction" });
            }

            // Refraction (decimal?) minimum
            if(this.Refraction < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Refraction, must be a value greater than or equal to 0.", new [] { "Refraction" });
            }

            yield break;
        }
    }

}
