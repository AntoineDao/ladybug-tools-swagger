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


class PointInTimeApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def recipe_point_in_time_gridbased_post(self, recipe, **kwargs):  # noqa: E501
        """Create a new point_in_time file  # noqa: E501

        Adds a new point_in_time file to the list  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.recipe_point_in_time_gridbased_post(recipe, async=True)
        >>> result = thread.get()

        :param async bool
        :param PointInTimeGridBasedSchema recipe: A point_in_time JSON filer with a uuid key. (required)
        :return: InlineResponse204
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async'):
            return self.recipe_point_in_time_gridbased_post_with_http_info(recipe, **kwargs)  # noqa: E501
        else:
            (data) = self.recipe_point_in_time_gridbased_post_with_http_info(recipe, **kwargs)  # noqa: E501
            return data

    def recipe_point_in_time_gridbased_post_with_http_info(self, recipe, **kwargs):  # noqa: E501
        """Create a new point_in_time file  # noqa: E501

        Adds a new point_in_time file to the list  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.recipe_point_in_time_gridbased_post_with_http_info(recipe, async=True)
        >>> result = thread.get()

        :param async bool
        :param PointInTimeGridBasedSchema recipe: A point_in_time JSON filer with a uuid key. (required)
        :return: InlineResponse204
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['recipe']  # noqa: E501
        all_params.append('async')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method recipe_point_in_time_gridbased_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'recipe' is set
        if ('recipe' not in params or
                params['recipe'] is None):
            raise ValueError("Missing the required parameter `recipe` when calling `recipe_point_in_time_gridbased_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'recipe' in params:
            body_params = params['recipe']
        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/recipe/point_in_time/gridbased', 'POST',
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

    def recipe_point_in_time_gridbased_uuid_put(self, uuid, recipe, **kwargs):  # noqa: E501
        """Modify an existing point_in_time file  # noqa: E501

        Modifies any parameter (except uuid) of a point_in_time recipe object by completely replacing the definition file. A finer grain method can be set up later.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.recipe_point_in_time_gridbased_uuid_put(uuid, recipe, async=True)
        >>> result = thread.get()

        :param async bool
        :param str uuid: The unique identifier of the point_in_time recipe. (required)
        :param PointInTimeGridBasedSchema recipe: A analysis_grid JSON filer with a uuid key. (required)
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async'):
            return self.recipe_point_in_time_gridbased_uuid_put_with_http_info(uuid, recipe, **kwargs)  # noqa: E501
        else:
            (data) = self.recipe_point_in_time_gridbased_uuid_put_with_http_info(uuid, recipe, **kwargs)  # noqa: E501
            return data

    def recipe_point_in_time_gridbased_uuid_put_with_http_info(self, uuid, recipe, **kwargs):  # noqa: E501
        """Modify an existing point_in_time file  # noqa: E501

        Modifies any parameter (except uuid) of a point_in_time recipe object by completely replacing the definition file. A finer grain method can be set up later.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.recipe_point_in_time_gridbased_uuid_put_with_http_info(uuid, recipe, async=True)
        >>> result = thread.get()

        :param async bool
        :param str uuid: The unique identifier of the point_in_time recipe. (required)
        :param PointInTimeGridBasedSchema recipe: A analysis_grid JSON filer with a uuid key. (required)
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['uuid', 'recipe']  # noqa: E501
        all_params.append('async')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method recipe_point_in_time_gridbased_uuid_put" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'uuid' is set
        if ('uuid' not in params or
                params['uuid'] is None):
            raise ValueError("Missing the required parameter `uuid` when calling `recipe_point_in_time_gridbased_uuid_put`")  # noqa: E501
        # verify the required parameter 'recipe' is set
        if ('recipe' not in params or
                params['recipe'] is None):
            raise ValueError("Missing the required parameter `recipe` when calling `recipe_point_in_time_gridbased_uuid_put`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'uuid' in params:
            path_params['uuid'] = params['uuid']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'recipe' in params:
            body_params = params['recipe']
        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/recipe/point_in_time/gridbased/{uuid}', 'PUT',
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
