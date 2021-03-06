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
    ///  Class for testing WEAApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class WEAApiTests
    {
        private WEAApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new WEAApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of WEAApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' WEAApi
            //Assert.IsInstanceOfType(typeof(WEAApi), instance, "instance is a WEAApi");
        }

        
        /// <summary>
        /// Test WeaGet
        /// </summary>
        [Test]
        public void WeaGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string country = null;
            //var response = instance.WeaGet(country);
            //Assert.IsInstanceOf<InlineResponse2009> (response, "response is InlineResponse2009");
        }
        
        /// <summary>
        /// Test WeaPost
        /// </summary>
        [Test]
        public void WeaPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //WeaSchema wea = null;
            //var response = instance.WeaPost(wea);
            //Assert.IsInstanceOf<InlineResponse204> (response, "response is InlineResponse204");
        }
        
        /// <summary>
        /// Test WeaUuidDelete
        /// </summary>
        [Test]
        public void WeaUuidDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string uuid = null;
            //instance.WeaUuidDelete(uuid);
            
        }
        
        /// <summary>
        /// Test WeaUuidGet
        /// </summary>
        [Test]
        public void WeaUuidGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string uuid = null;
            //var response = instance.WeaUuidGet(uuid);
            //Assert.IsInstanceOf<InlineResponse20010> (response, "response is InlineResponse20010");
        }
        
        /// <summary>
        /// Test WeaUuidPut
        /// </summary>
        [Test]
        public void WeaUuidPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string uuid = null;
            //WeaSchema wea = null;
            //instance.WeaUuidPut(uuid, wea);
            
        }
        
    }

}
