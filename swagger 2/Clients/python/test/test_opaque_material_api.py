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
from swagger_client.api.opaque_material_api import OpaqueMaterialApi  # noqa: E501
from swagger_client.rest import ApiException


class TestOpaqueMaterialApi(unittest.TestCase):
    """OpaqueMaterialApi unit test stubs"""

    def setUp(self):
        self.api = swagger_client.api.opaque_material_api.OpaqueMaterialApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_material_opaque_post(self):
        """Test case for material_opaque_post

        Create a new opaque material object  # noqa: E501
        """
        pass

    def test_material_opaque_uuid_put(self):
        """Test case for material_opaque_uuid_put

        Modify an existing opaque material file  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
