# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.inline_response204 import InlineResponse204  # noqa: E501
from swagger_server.models.inline_response400 import InlineResponse400  # noqa: E501
from swagger_server.models.three_phasel_grid_based_schema import ThreePhaselGridBasedSchema  # noqa: E501
from swagger_server.test import BaseTestCase


class TestThreePhaseController(BaseTestCase):
    """ThreePhaseController integration test stubs"""

    def test_recipe_three_phase_gridbased_post(self):
        """Test case for recipe_three_phase_gridbased_post

        Create a new three_phase file
        """
        recipe = ThreePhaselGridBasedSchema()
        response = self.client.open(
            '/api/recipe/three_phase/gridbased',
            method='POST',
            data=json.dumps(recipe),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_recipe_three_phase_gridbased_uuid_put(self):
        """Test case for recipe_three_phase_gridbased_uuid_put

        Modify an existing three_phase file
        """
        recipe = ThreePhaselGridBasedSchema()
        response = self.client.open(
            '/api/recipe/three_phase/gridbased/{uuid}'.format(uuid='uuid_example'),
            method='PUT',
            data=json.dumps(recipe),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
