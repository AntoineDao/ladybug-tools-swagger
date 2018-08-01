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


class GetAndDeleteRecipesApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def recipe_get(self, **kwargs):  # noqa: E501
        """Get a list of daylight recipe objects  # noqa: E501

        Retrieves a list of daylight recipe objects for a given filter.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.recipe_get(async=True)
        >>> result = thread.get()

        :param async bool
        :param int size: Number of files returned
        :param str country: Country where definitions should be from
        :return: InlineResponse200
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async'):
            return self.recipe_get_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.recipe_get_with_http_info(**kwargs)  # noqa: E501
            return data

    def recipe_get_with_http_info(self, **kwargs):  # noqa: E501
        """Get a list of daylight recipe objects  # noqa: E501

        Retrieves a list of daylight recipe objects for a given filter.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.recipe_get_with_http_info(async=True)
        >>> result = thread.get()

        :param async bool
        :param int size: Number of files returned
        :param str country: Country where definitions should be from
        :return: InlineResponse200
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['size', 'country']  # noqa: E501
        all_params.append('async')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method recipe_get" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'size' in params:
            query_params.append(('size', params['size']))  # noqa: E501
        if 'country' in params:
            query_params.append(('country', params['country']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/recipe/', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='InlineResponse200',  # noqa: E501
            auth_settings=auth_settings,
            async=params.get('async'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def recipe_uuid_delete(self, uuid, **kwargs):  # noqa: E501
        """Delete an existing recipe object  # noqa: E501

        Delete an recipe object in the database specifying the uuid of the file  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.recipe_uuid_delete(uuid, async=True)
        >>> result = thread.get()

        :param async bool
        :param str uuid: The unique identifier of the recipe. (required)
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async'):
            return self.recipe_uuid_delete_with_http_info(uuid, **kwargs)  # noqa: E501
        else:
            (data) = self.recipe_uuid_delete_with_http_info(uuid, **kwargs)  # noqa: E501
            return data

    def recipe_uuid_delete_with_http_info(self, uuid, **kwargs):  # noqa: E501
        """Delete an existing recipe object  # noqa: E501

        Delete an recipe object in the database specifying the uuid of the file  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.recipe_uuid_delete_with_http_info(uuid, async=True)
        >>> result = thread.get()

        :param async bool
        :param str uuid: The unique identifier of the recipe. (required)
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['uuid']  # noqa: E501
        all_params.append('async')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method recipe_uuid_delete" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'uuid' is set
        if ('uuid' not in params or
                params['uuid'] is None):
            raise ValueError("Missing the required parameter `uuid` when calling `recipe_uuid_delete`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'uuid' in params:
            path_params['uuid'] = params['uuid']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/recipe/{uuid}', 'DELETE',
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

    def recipe_uuid_get(self, uuid, **kwargs):  # noqa: E501
        """Get a specific analysis_grid file  # noqa: E501

        Returns a single analysis_grid file  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.recipe_uuid_get(uuid, async=True)
        >>> result = thread.get()

        :param async bool
        :param str uuid: The unique identifier of the analysis_grid. (required)
        :return: GridBasedRecipeSchema
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async'):
            return self.recipe_uuid_get_with_http_info(uuid, **kwargs)  # noqa: E501
        else:
            (data) = self.recipe_uuid_get_with_http_info(uuid, **kwargs)  # noqa: E501
            return data

    def recipe_uuid_get_with_http_info(self, uuid, **kwargs):  # noqa: E501
        """Get a specific analysis_grid file  # noqa: E501

        Returns a single analysis_grid file  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.recipe_uuid_get_with_http_info(uuid, async=True)
        >>> result = thread.get()

        :param async bool
        :param str uuid: The unique identifier of the analysis_grid. (required)
        :return: GridBasedRecipeSchema
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['uuid']  # noqa: E501
        all_params.append('async')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method recipe_uuid_get" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'uuid' is set
        if ('uuid' not in params or
                params['uuid'] is None):
            raise ValueError("Missing the required parameter `uuid` when calling `recipe_uuid_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'uuid' in params:
            path_params['uuid'] = params['uuid']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/recipe/{uuid}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='GridBasedRecipeSchema',  # noqa: E501
            auth_settings=auth_settings,
            async=params.get('async'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
