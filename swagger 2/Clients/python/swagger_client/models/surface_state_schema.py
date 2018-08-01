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

from swagger_client.models.surface_property_schema import SurfacePropertySchema  # noqa: F401,E501


class SurfaceStateSchema(object):
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
        'name': 'str',
        'surface_properties': 'SurfacePropertySchema'
    }

    attribute_map = {
        'name': 'name',
        'surface_properties': 'surface_properties'
    }

    def __init__(self, name=None, surface_properties=None):  # noqa: E501
        """SurfaceStateSchema - a model defined in Swagger"""  # noqa: E501

        self._name = None
        self._surface_properties = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if surface_properties is not None:
            self.surface_properties = surface_properties

    @property
    def name(self):
        """Gets the name of this SurfaceStateSchema.  # noqa: E501

        name of the state, usually default  # noqa: E501

        :return: The name of this SurfaceStateSchema.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this SurfaceStateSchema.

        name of the state, usually default  # noqa: E501

        :param name: The name of this SurfaceStateSchema.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def surface_properties(self):
        """Gets the surface_properties of this SurfaceStateSchema.  # noqa: E501


        :return: The surface_properties of this SurfaceStateSchema.  # noqa: E501
        :rtype: SurfacePropertySchema
        """
        return self._surface_properties

    @surface_properties.setter
    def surface_properties(self, surface_properties):
        """Sets the surface_properties of this SurfaceStateSchema.


        :param surface_properties: The surface_properties of this SurfaceStateSchema.  # noqa: E501
        :type: SurfacePropertySchema
        """

        self._surface_properties = surface_properties

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
        if not isinstance(other, SurfaceStateSchema):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other