# coding: utf-8

"""
    Honeybee Server API

    A sample API definition for a honeybee server  # noqa: E501

    OpenAPI spec version: 0.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.models.analysis_surface_schema import AnalysisSurfaceSchema  # noqa: F401,E501


class HBSurfaceSchema(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'parent_surface': 'AnalysisSurfaceSchema',
        'child_surfaces': 'list[AnalysisSurfaceSchema]'
    }

    attribute_map = {
        'parent_surface': 'parent_surface',
        'child_surfaces': 'child_surfaces'
    }

    def __init__(self, parent_surface=None, child_surfaces=None):  # noqa: E501
        """HBSurfaceSchema - a model defined in Swagger"""  # noqa: E501

        self._parent_surface = None
        self._child_surfaces = None
        self.discriminator = None

        if parent_surface is not None:
            self.parent_surface = parent_surface
        if child_surfaces is not None:
            self.child_surfaces = child_surfaces

    @property
    def parent_surface(self):
        """Gets the parent_surface of this HBSurfaceSchema.  # noqa: E501


        :return: The parent_surface of this HBSurfaceSchema.  # noqa: E501
        :rtype: AnalysisSurfaceSchema
        """
        return self._parent_surface

    @parent_surface.setter
    def parent_surface(self, parent_surface):
        """Sets the parent_surface of this HBSurfaceSchema.


        :param parent_surface: The parent_surface of this HBSurfaceSchema.  # noqa: E501
        :type: AnalysisSurfaceSchema
        """

        self._parent_surface = parent_surface

    @property
    def child_surfaces(self):
        """Gets the child_surfaces of this HBSurfaceSchema.  # noqa: E501


        :return: The child_surfaces of this HBSurfaceSchema.  # noqa: E501
        :rtype: list[AnalysisSurfaceSchema]
        """
        return self._child_surfaces

    @child_surfaces.setter
    def child_surfaces(self, child_surfaces):
        """Sets the child_surfaces of this HBSurfaceSchema.


        :param child_surfaces: The child_surfaces of this HBSurfaceSchema.  # noqa: E501
        :type: list[AnalysisSurfaceSchema]
        """

        self._child_surfaces = child_surfaces

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, HBSurfaceSchema):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other