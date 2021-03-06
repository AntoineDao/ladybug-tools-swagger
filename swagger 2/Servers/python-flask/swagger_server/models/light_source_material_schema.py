# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class LightSourceMaterialSchema(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, name: str=None, red: float=None, green: float=None, blue: float=None, radius: float=None, modifier: str='void'):  # noqa: E501
        """LightSourceMaterialSchema - a model defined in Swagger

        :param name: The name of this LightSourceMaterialSchema.  # noqa: E501
        :type name: str
        :param red: The red of this LightSourceMaterialSchema.  # noqa: E501
        :type red: float
        :param green: The green of this LightSourceMaterialSchema.  # noqa: E501
        :type green: float
        :param blue: The blue of this LightSourceMaterialSchema.  # noqa: E501
        :type blue: float
        :param radius: The radius of this LightSourceMaterialSchema.  # noqa: E501
        :type radius: float
        :param modifier: The modifier of this LightSourceMaterialSchema.  # noqa: E501
        :type modifier: str
        """
        self.swagger_types = {
            'name': str,
            'red': float,
            'green': float,
            'blue': float,
            'radius': float,
            'modifier': str
        }

        self.attribute_map = {
            'name': 'name',
            'red': 'red',
            'green': 'green',
            'blue': 'blue',
            'radius': 'radius',
            'modifier': 'modifier'
        }

        self._name = name
        self._red = red
        self._green = green
        self._blue = blue
        self._radius = radius
        self._modifier = modifier

    @classmethod
    def from_dict(cls, dikt) -> 'LightSourceMaterialSchema':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The LightSourceMaterialSchema of this LightSourceMaterialSchema.  # noqa: E501
        :rtype: LightSourceMaterialSchema
        """
        return util.deserialize_model(dikt, cls)

    @property
    def name(self) -> str:
        """Gets the name of this LightSourceMaterialSchema.

        Name of the material  # noqa: E501

        :return: The name of this LightSourceMaterialSchema.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name: str):
        """Sets the name of this LightSourceMaterialSchema.

        Name of the material  # noqa: E501

        :param name: The name of this LightSourceMaterialSchema.
        :type name: str
        """

        self._name = name

    @property
    def red(self) -> float:
        """Gets the red of this LightSourceMaterialSchema.

        A positive value for the Red channel of the glow  # noqa: E501

        :return: The red of this LightSourceMaterialSchema.
        :rtype: float
        """
        return self._red

    @red.setter
    def red(self, red: float):
        """Sets the red of this LightSourceMaterialSchema.

        A positive value for the Red channel of the glow  # noqa: E501

        :param red: The red of this LightSourceMaterialSchema.
        :type red: float
        """
        if red is not None and red > 1:  # noqa: E501
            raise ValueError("Invalid value for `red`, must be a value less than or equal to `1`")  # noqa: E501
        if red is not None and red < 0:  # noqa: E501
            raise ValueError("Invalid value for `red`, must be a value greater than or equal to `0`")  # noqa: E501

        self._red = red

    @property
    def green(self) -> float:
        """Gets the green of this LightSourceMaterialSchema.

        A positive value for the Green channel of the glow  # noqa: E501

        :return: The green of this LightSourceMaterialSchema.
        :rtype: float
        """
        return self._green

    @green.setter
    def green(self, green: float):
        """Sets the green of this LightSourceMaterialSchema.

        A positive value for the Green channel of the glow  # noqa: E501

        :param green: The green of this LightSourceMaterialSchema.
        :type green: float
        """
        if green is not None and green > 1:  # noqa: E501
            raise ValueError("Invalid value for `green`, must be a value less than or equal to `1`")  # noqa: E501
        if green is not None and green < 0:  # noqa: E501
            raise ValueError("Invalid value for `green`, must be a value greater than or equal to `0`")  # noqa: E501

        self._green = green

    @property
    def blue(self) -> float:
        """Gets the blue of this LightSourceMaterialSchema.

        A positive value for the Blue channel of the glow  # noqa: E501

        :return: The blue of this LightSourceMaterialSchema.
        :rtype: float
        """
        return self._blue

    @blue.setter
    def blue(self, blue: float):
        """Sets the blue of this LightSourceMaterialSchema.

        A positive value for the Blue channel of the glow  # noqa: E501

        :param blue: The blue of this LightSourceMaterialSchema.
        :type blue: float
        """
        if blue is not None and blue > 1:  # noqa: E501
            raise ValueError("Invalid value for `blue`, must be a value less than or equal to `1`")  # noqa: E501
        if blue is not None and blue < 0:  # noqa: E501
            raise ValueError("Invalid value for `blue`, must be a value greater than or equal to `0`")  # noqa: E501

        self._blue = blue

    @property
    def radius(self) -> float:
        """Gets the radius of this LightSourceMaterialSchema.

        Maximum radius for shadow testing  # noqa: E501

        :return: The radius of this LightSourceMaterialSchema.
        :rtype: float
        """
        return self._radius

    @radius.setter
    def radius(self, radius: float):
        """Sets the radius of this LightSourceMaterialSchema.

        Maximum radius for shadow testing  # noqa: E501

        :param radius: The radius of this LightSourceMaterialSchema.
        :type radius: float
        """

        self._radius = radius

    @property
    def modifier(self) -> str:
        """Gets the modifier of this LightSourceMaterialSchema.


        :return: The modifier of this LightSourceMaterialSchema.
        :rtype: str
        """
        return self._modifier

    @modifier.setter
    def modifier(self, modifier: str):
        """Sets the modifier of this LightSourceMaterialSchema.


        :param modifier: The modifier of this LightSourceMaterialSchema.
        :type modifier: str
        """

        self._modifier = modifier
