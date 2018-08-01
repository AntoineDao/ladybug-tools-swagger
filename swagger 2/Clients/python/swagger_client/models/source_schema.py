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

from swagger_client.models.state_schema import StateSchema  # noqa: F401,E501


class SourceSchema(object):
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
        'source_id': 'str',
        'source': 'list[StateSchema]'
    }

    attribute_map = {
        'source_id': 'source_id',
        'source': 'source'
    }

    def __init__(self, source_id=None, source=None):  # noqa: E501
        """SourceSchema - a model defined in Swagger"""  # noqa: E501

        self._source_id = None
        self._source = None
        self.discriminator = None

        if source_id is not None:
            self.source_id = source_id
        if source is not None:
            self.source = source

    @property
    def source_id(self):
        """Gets the source_id of this SourceSchema.  # noqa: E501

        The id of a source of light  # noqa: E501

        :return: The source_id of this SourceSchema.  # noqa: E501
        :rtype: str
        """
        return self._source_id

    @source_id.setter
    def source_id(self, source_id):
        """Sets the source_id of this SourceSchema.

        The id of a source of light  # noqa: E501

        :param source_id: The source_id of this SourceSchema.  # noqa: E501
        :type: str
        """

        self._source_id = source_id

    @property
    def source(self):
        """Gets the source of this SourceSchema.  # noqa: E501


        :return: The source of this SourceSchema.  # noqa: E501
        :rtype: list[StateSchema]
        """
        return self._source

    @source.setter
    def source(self, source):
        """Sets the source of this SourceSchema.


        :param source: The source of this SourceSchema.  # noqa: E501
        :type: list[StateSchema]
        """

        self._source = source

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
        if not isinstance(other, SourceSchema):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other