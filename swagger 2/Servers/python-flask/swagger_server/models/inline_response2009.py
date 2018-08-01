# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.inline_response2009_results import InlineResponse2009Results  # noqa: F401,E501
from swagger_server import util


class InlineResponse2009(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, results: List[InlineResponse2009Results]=None):  # noqa: E501
        """InlineResponse2009 - a model defined in Swagger

        :param results: The results of this InlineResponse2009.  # noqa: E501
        :type results: List[InlineResponse2009Results]
        """
        self.swagger_types = {
            'results': List[InlineResponse2009Results]
        }

        self.attribute_map = {
            'results': 'results'
        }

        self._results = results

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse2009':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_9 of this InlineResponse2009.  # noqa: E501
        :rtype: InlineResponse2009
        """
        return util.deserialize_model(dikt, cls)

    @property
    def results(self) -> List[InlineResponse2009Results]:
        """Gets the results of this InlineResponse2009.


        :return: The results of this InlineResponse2009.
        :rtype: List[InlineResponse2009Results]
        """
        return self._results

    @results.setter
    def results(self, results: List[InlineResponse2009Results]):
        """Sets the results of this InlineResponse2009.


        :param results: The results of this InlineResponse2009.
        :type results: List[InlineResponse2009Results]
        """

        self._results = results
