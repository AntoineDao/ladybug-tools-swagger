# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.inline_response200_results import InlineResponse200Results  # noqa: F401,E501
from swagger_server import util


class InlineResponse200(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, results: List[InlineResponse200Results]=None):  # noqa: E501
        """InlineResponse200 - a model defined in Swagger

        :param results: The results of this InlineResponse200.  # noqa: E501
        :type results: List[InlineResponse200Results]
        """
        self.swagger_types = {
            'results': List[InlineResponse200Results]
        }

        self.attribute_map = {
            'results': 'results'
        }

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
    def results(self) -> List[InlineResponse200Results]:
        """Gets the results of this InlineResponse200.


        :return: The results of this InlineResponse200.
        :rtype: List[InlineResponse200Results]
        """
        return self._results

    @results.setter
    def results(self, results: List[InlineResponse200Results]):
        """Sets the results of this InlineResponse200.


        :param results: The results of this InlineResponse200.
        :type results: List[InlineResponse200Results]
        """

        self._results = results
