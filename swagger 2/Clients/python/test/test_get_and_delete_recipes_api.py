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
from swagger_client.api.get_and_delete_recipes_api import GetAndDeleteRecipesApi  # noqa: E501
from swagger_client.rest import ApiException


class TestGetAndDeleteRecipesApi(unittest.TestCase):
    """GetAndDeleteRecipesApi unit test stubs"""

    def setUp(self):
        self.api = swagger_client.api.get_and_delete_recipes_api.GetAndDeleteRecipesApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_recipe_get(self):
        """Test case for recipe_get

        Get a list of daylight recipe objects  # noqa: E501
        """
        pass

    def test_recipe_uuid_delete(self):
        """Test case for recipe_uuid_delete

        Delete an existing recipe object  # noqa: E501
        """
        pass

    def test_recipe_uuid_get(self):
        """Test case for recipe_uuid_get

        Get a specific analysis_grid object  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
