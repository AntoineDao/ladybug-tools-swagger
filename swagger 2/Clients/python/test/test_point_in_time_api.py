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
from swagger_client.api.point_in_time_api import PointInTimeApi  # noqa: E501
from swagger_client.rest import ApiException


class TestPointInTimeApi(unittest.TestCase):
    """PointInTimeApi unit test stubs"""

    def setUp(self):
        self.api = swagger_client.api.point_in_time_api.PointInTimeApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_recipe_point_in_time_gridbased_post(self):
        """Test case for recipe_point_in_time_gridbased_post

        Create a new point_in_time file  # noqa: E501
        """
        pass

    def test_recipe_point_in_time_gridbased_uuid_put(self):
        """Test case for recipe_point_in_time_gridbased_uuid_put

        Modify an existing point_in_time file  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()