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
from swagger_client.api.daylight_factor_api import DaylightFactorApi  # noqa: E501
from swagger_client.rest import ApiException


class TestDaylightFactorApi(unittest.TestCase):
    """DaylightFactorApi unit test stubs"""

    def setUp(self):
        self.api = swagger_client.api.daylight_factor_api.DaylightFactorApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_recipe_daylight_factor_gridbased_post(self):
        """Test case for recipe_daylight_factor_gridbased_post

        Create a new analysis_grid file  # noqa: E501
        """
        pass

    def test_recipe_daylight_factor_gridbased_uuid_put(self):
        """Test case for recipe_daylight_factor_gridbased_uuid_put

        Modify an existing analysis_grid file  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()