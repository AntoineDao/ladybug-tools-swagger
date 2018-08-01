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
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using IO.Swagger.Client;
using IO.Swagger.Api;
using IO.Swagger.Model;

namespace IO.Swagger.Test
{
    /// <summary>
    ///  Class for testing FivePhaseApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class FivePhaseApiTests
    {
        private FivePhaseApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new FivePhaseApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of FivePhaseApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' FivePhaseApi
            //Assert.IsInstanceOfType(typeof(FivePhaseApi), instance, "instance is a FivePhaseApi");
        }

        
        /// <summary>
        /// Test RecipeFivePhaseGridbasedPost
        /// </summary>
        [Test]
        public void RecipeFivePhaseGridbasedPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //FivePhaselGridBasedSchema recipe = null;
            //var response = instance.RecipeFivePhaseGridbasedPost(recipe);
            //Assert.IsInstanceOf<InlineResponse204> (response, "response is InlineResponse204");
        }
        
        /// <summary>
        /// Test RecipeFivePhaseGridbasedUuidPut
        /// </summary>
        [Test]
        public void RecipeFivePhaseGridbasedUuidPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string uuid = null;
            //FivePhaselGridBasedSchema recipe = null;
            //instance.RecipeFivePhaseGridbasedUuidPut(uuid, recipe);
            
        }
        
    }

}
