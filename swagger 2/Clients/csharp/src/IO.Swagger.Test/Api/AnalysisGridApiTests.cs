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
    ///  Class for testing AnalysisGridApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class AnalysisGridApiTests
    {
        private AnalysisGridApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new AnalysisGridApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of AnalysisGridApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' AnalysisGridApi
            //Assert.IsInstanceOfType(typeof(AnalysisGridApi), instance, "instance is a AnalysisGridApi");
        }

        
        /// <summary>
        /// Test AnalysisGridGet
        /// </summary>
        [Test]
        public void AnalysisGridGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string gridName = null;
            //int? minPoints = null;
            //int? maxPoints = null;
            //var response = instance.AnalysisGridGet(gridName, minPoints, maxPoints);
            //Assert.IsInstanceOf<InlineResponse200> (response, "response is InlineResponse200");
        }
        
        /// <summary>
        /// Test AnalysisGridPost
        /// </summary>
        [Test]
        public void AnalysisGridPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //AnalysisGridSchema analysisGrid = null;
            //var response = instance.AnalysisGridPost(analysisGrid);
            //Assert.IsInstanceOf<InlineResponse204> (response, "response is InlineResponse204");
        }
        
        /// <summary>
        /// Test AnalysisGridUuidDelete
        /// </summary>
        [Test]
        public void AnalysisGridUuidDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string uuid = null;
            //instance.AnalysisGridUuidDelete(uuid);
            
        }
        
        /// <summary>
        /// Test AnalysisGridUuidGet
        /// </summary>
        [Test]
        public void AnalysisGridUuidGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string uuid = null;
            //var response = instance.AnalysisGridUuidGet(uuid);
            //Assert.IsInstanceOf<InlineResponse2001> (response, "response is InlineResponse2001");
        }
        
        /// <summary>
        /// Test AnalysisGridUuidPut
        /// </summary>
        [Test]
        public void AnalysisGridUuidPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string uuid = null;
            //AnalysisGridSchema analysisGrid = null;
            //instance.AnalysisGridUuidPut(uuid, analysisGrid);
            
        }
        
    }

}
