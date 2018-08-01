# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.grid_based_recipe_schema import GridBasedRecipeSchema  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response400 import InlineResponse400  # noqa: E501
from swagger_server.test import BaseTestCase


class TestGetAndDeleteRecipesController(BaseTestCase):
    """GetAndDeleteRecipesController integration test stubs"""

    def test_recipe_get(self):
        """Test case for recipe_get

        Get a list of daylight recipe objects
        """
        query_string = [('size', 56),
                        ('country', 'country_example')]
        response = self.client.open(
            '/api/recipe/',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_recipe_uuid_delete(self):
        """Test case for recipe_uuid_delete

        Delete an existing recipe object
        """
        response = self.client.open(
            '/api/recipe/{uuid}'.format(uuid='uuid_example'),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_recipe_uuid_get(self):
        """Test case for recipe_uuid_get

        Get a specific analysis_grid file
        """
        response = self.client.open(
            '/api/recipe/{uuid}'.format(uuid='uuid_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
