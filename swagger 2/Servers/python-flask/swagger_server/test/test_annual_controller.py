# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.annual_grid_based_schema import AnnualGridBasedSchema  # noqa: E501
from swagger_server.models.inline_response204 import InlineResponse204  # noqa: E501
from swagger_server.models.inline_response400 import InlineResponse400  # noqa: E501
from swagger_server.test import BaseTestCase


class TestAnnualController(BaseTestCase):
    """AnnualController integration test stubs"""

    def test_recipe_annual_gridbased_post(self):
        """Test case for recipe_annual_gridbased_post

        Create a new annual file
        """
        recipe = AnnualGridBasedSchema()
        response = self.client.open(
            '/api/recipe/annual/gridbased',
            method='POST',
            data=json.dumps(recipe),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_recipe_annual_gridbased_uuid_put(self):
        """Test case for recipe_annual_gridbased_uuid_put

        Modify an existing annual file
        """
        recipe = AnnualGridBasedSchema()
        response = self.client.open(
            '/api/recipe/annual/gridbased/{uuid}'.format(uuid='uuid_example'),
            method='PUT',
            data=json.dumps(recipe),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
