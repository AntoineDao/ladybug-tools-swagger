# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.material_schema import MaterialSchema  # noqa: F401,E501
from swagger_server import util


class InlineResponse2004Results(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, uuid: str=None, material: MaterialSchema=None):  # noqa: E501
        """InlineResponse2004Results - a model defined in Swagger

        :param uuid: The uuid of this InlineResponse2004Results.  # noqa: E501
        :type uuid: str
        :param material: The material of this InlineResponse2004Results.  # noqa: E501
        :type material: MaterialSchema
        """
        self.swagger_types = {
            'uuid': str,
            'material': MaterialSchema
        }

        self.attribute_map = {
            'uuid': 'uuid',
            'material': 'material'
        }

        self._uuid = uuid
        self._material = material

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse2004Results':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_4_results of this InlineResponse2004Results.  # noqa: E501
        :rtype: InlineResponse2004Results
        """
        return util.deserialize_model(dikt, cls)

    @property
    def uuid(self) -> str:
        """Gets the uuid of this InlineResponse2004Results.


        :return: The uuid of this InlineResponse2004Results.
        :rtype: str
        """
        return self._uuid

    @uuid.setter
    def uuid(self, uuid: str):
        """Sets the uuid of this InlineResponse2004Results.


        :param uuid: The uuid of this InlineResponse2004Results.
        :type uuid: str
        """

        self._uuid = uuid

    @property
    def material(self) -> MaterialSchema:
        """Gets the material of this InlineResponse2004Results.


        :return: The material of this InlineResponse2004Results.
        :rtype: MaterialSchema
        """
        return self._material

    @material.setter
    def material(self, material: MaterialSchema):
        """Sets the material of this InlineResponse2004Results.


        :param material: The material of this InlineResponse2004Results.
        :type material: MaterialSchema
        """

        self._material = material
