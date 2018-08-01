# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.grid_based_recipe_schema import GridBasedRecipeSchema  # noqa: F401,E501
from swagger_server import util


class InlineResponse200(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, query: object=None, results: List[GridBasedRecipeSchema]=None):  # noqa: E501
        """InlineResponse200 - a model defined in Swagger

        :param query: The query of this InlineResponse200.  # noqa: E501
        :type query: object
        :param results: The results of this InlineResponse200.  # noqa: E501
        :type results: List[GridBasedRecipeSchema]
        """
        self.swagger_types = {
            'query': object,
            'results': List[GridBasedRecipeSchema]
        }

        self.attribute_map = {
            'query': 'query',
            'results': 'results'
        }

        self._query = query
        self._results = results

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse200':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200 of this InlineResponse200.  # noqa: E501
        :rtype: InlineResponse200
        """
        return util.deserialize_model(dikt, cls)

    @property
    def query(self) -> object:
        """Gets the query of this InlineResponse200.


        :return: The query of this InlineResponse200.
        :rtype: object
        """
        return self._query

    @query.setter
    def query(self, query: object):
        """Sets the query of this InlineResponse200.


        :param query: The query of this InlineResponse200.
        :type query: object
        """

        self._query = query

    @property
    def results(self) -> List[GridBasedRecipeSchema]:
        """Gets the results of this InlineResponse200.


        :return: The results of this InlineResponse200.
        :rtype: List[GridBasedRecipeSchema]
        """
        return self._results

    @results.setter
    def results(self, results: List[GridBasedRecipeSchema]):
        """Sets the results of this InlineResponse200.


        :param results: The results of this InlineResponse200.
        :type results: List[GridBasedRecipeSchema]
        """

        self._results = results