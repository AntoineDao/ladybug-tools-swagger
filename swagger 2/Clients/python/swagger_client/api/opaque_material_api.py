# coding: utf-8

"""
    Honeybee Server API

    A sample API definition for a honeybee server  # noqa: E501

    OpenAPI spec version: 0.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from swagger_client.api_client import ApiClient


class OpaqueMaterialApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def material_opaque_post(self, opaque_material, **kwargs):  # noqa: E501
        """Create a new opaque material object  # noqa: E501

        Adds a new opaque material object to the database  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.material_opaque_post(opaque_material, async=True)
        >>> result = thread.get()

        :param async bool
        :param OpaqueMaterialSchema opaque_material: an opaque material object (required)
        :return: InlineResponse204
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async'):
            return self.material_opaque_post_with_http_info(opaque_material, **kwargs)  # noqa: E501
        else:
            (data) = self.material_opaque_post_with_http_info(opaque_material, **kwargs)  # noqa: E501
            return data

    def material_opaque_post_with_http_info(self, opaque_material, **kwargs):  # noqa: E501
        """Create a new opaque material object  # noqa: E501

        Adds a new opaque material object to the database  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.material_opaque_post_with_http_info(opaque_material, async=True)
        >>> result = thread.get()

        :param async bool
        :param OpaqueMaterialSchema opaque_material: an opaque material object (required)
        :return: InlineResponse204
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['opaque_material']  # noqa: E501
        all_params.append('async')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method material_opaque_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'opaque_material' is set
        if ('opaque_material' not in params or
                params['opaque_material'] is None):
            raise ValueError("Missing the required parameter `opaque_material` when calling `material_opaque_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'opaque_material' in params:
            body_params = params['opaque_material']
        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/material/opaque', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='InlineResponse204',  # noqa: E501
            auth_settings=auth_settings,
            async=params.get('async'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def material_opaque_uuid_put(self, uuid, opaque_material, **kwargs):  # noqa: E501
        """Modify an existing opaque material file  # noqa: E501

        Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.material_opaque_uuid_put(uuid, opaque_material, async=True)
        >>> result = thread.get()

        :param async bool
        :param str uuid: The unique identifier of the material. (required)
        :param OpaqueMaterialSchema opaque_material: an opaque material object (required)
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async'):
            return self.material_opaque_uuid_put_with_http_info(uuid, opaque_material, **kwargs)  # noqa: E501
        else:
            (data) = self.material_opaque_uuid_put_with_http_info(uuid, opaque_material, **kwargs)  # noqa: E501
            return data

    def material_opaque_uuid_put_with_http_info(self, uuid, opaque_material, **kwargs):  # noqa: E501
        """Modify an existing opaque material file  # noqa: E501

        Modifies any parameter (except uuid) of a material file by completely replacing the definition file. A finer grain method can be set up later.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.material_opaque_uuid_put_with_http_info(uuid, opaque_material, async=True)
        >>> result = thread.get()

        :param async bool
        :param str uuid: The unique identifier of the material. (required)
        :param OpaqueMaterialSchema opaque_material: an opaque material object (required)
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['uuid', 'opaque_material']  # noqa: E501
        all_params.append('async')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method material_opaque_uuid_put" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'uuid' is set
        if ('uuid' not in params or
                params['uuid'] is None):
            raise ValueError("Missing the required parameter `uuid` when calling `material_opaque_uuid_put`")  # noqa: E501
        # verify the required parameter 'opaque_material' is set
        if ('opaque_material' not in params or
                params['opaque_material'] is None):
            raise ValueError("Missing the required parameter `opaque_material` when calling `material_opaque_uuid_put`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'uuid' in params:
            path_params['uuid'] = params['uuid']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'opaque_material' in params:
            body_params = params['opaque_material']
        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/material/opaque/{uuid}', 'PUT',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=None,  # noqa: E501
            auth_settings=auth_settings,
            async=params.get('async'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
