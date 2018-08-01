# coding: utf-8

"""
    Honeybee Server API

    A sample API definition for a honeybee server  # noqa: E501

    OpenAPI spec version: 0.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import swagger_client
from swagger_client.api.radiation_api import RadiationApi  # noqa: E501
from swagger_client.rest import ApiException


class TestRadiationApi(unittest.TestCase):
    """RadiationApi unit test stubs"""

    def setUp(self):
        self.api = swagger_client.api.radiation_api.RadiationApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_recipe_radiation_gridbased_post(self):
        """Test case for recipe_radiation_gridbased_post

        Create a new radiation file  # noqa: E501
        """
        pass

    def test_recipe_radiation_gridbased_uuid_put(self):
        """Test case for recipe_radiation_gridbased_uuid_put

        Modify an existing radiation file  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()