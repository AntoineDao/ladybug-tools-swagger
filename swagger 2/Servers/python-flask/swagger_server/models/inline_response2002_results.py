# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.epw_schema import EpwSchema  # noqa: F401,E501
from swagger_server import util


class InlineResponse2002Results(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, uuid: str=None, epw: EpwSchema=None):  # noqa: E501
        """InlineResponse2002Results - a model defined in Swagger

        :param uuid: The uuid of this InlineResponse2002Results.  # noqa: E501
        :type uuid: str
        :param epw: The epw of this InlineResponse2002Results.  # noqa: E501
        :type epw: EpwSchema
        """
        self.swagger_types = {
            'uuid': str,
            'epw': EpwSchema
        }

        self.attribute_map = {
            'uuid': 'uuid',
            'epw': 'epw'
        }

        self._uuid = uuid
        self._epw = epw

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse2002Results':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_2_results of this InlineResponse2002Results.  # noqa: E501
        :rtype: InlineResponse2002Results
        """
        return util.deserialize_model(dikt, cls)

    @property
    def uuid(self) -> str:
        """Gets the uuid of this InlineResponse2002Results.


        :return: The uuid of this InlineResponse2002Results.
        :rtype: str
        """
        return self._uuid

    @uuid.setter
    def uuid(self, uuid: str):
        """Sets the uuid of this InlineResponse2002Results.


        :param uuid: The uuid of this InlineResponse2002Results.
        :type uuid: str
        """

        self._uuid = uuid

    @property
    def epw(self) -> EpwSchema:
        """Gets the epw of this InlineResponse2002Results.


        :return: The epw of this InlineResponse2002Results.
        :rtype: EpwSchema
        """
        return self._epw

    @epw.setter
    def epw(self, epw: EpwSchema):
        """Sets the epw of this InlineResponse2002Results.


        :param epw: The epw of this InlineResponse2002Results.
        :type epw: EpwSchema
        """

        self._epw = epw
