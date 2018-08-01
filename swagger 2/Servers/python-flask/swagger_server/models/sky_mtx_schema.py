# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.hoys_schema import HoysSchema  # noqa: F401,E501
from swagger_server.models.wea_schema import WeaSchema  # noqa: F401,E501
from swagger_server import util


class SkyMtxSchema(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, wea: WeaSchema=None, sky_density: int=None, north: float=None, hoys: HoysSchema=None, mode: int=None, suffix: str=None):  # noqa: E501
        """SkyMtxSchema - a model defined in Swagger

        :param wea: The wea of this SkyMtxSchema.  # noqa: E501
        :type wea: WeaSchema
        :param sky_density: The sky_density of this SkyMtxSchema.  # noqa: E501
        :type sky_density: int
        :param north: The north of this SkyMtxSchema.  # noqa: E501
        :type north: float
        :param hoys: The hoys of this SkyMtxSchema.  # noqa: E501
        :type hoys: HoysSchema
        :param mode: The mode of this SkyMtxSchema.  # noqa: E501
        :type mode: int
        :param suffix: The suffix of this SkyMtxSchema.  # noqa: E501
        :type suffix: str
        """
        self.swagger_types = {
            'wea': WeaSchema,
            'sky_density': int,
            'north': float,
            'hoys': HoysSchema,
            'mode': int,
            'suffix': str
        }

        self.attribute_map = {
            'wea': 'wea',
            'sky_density': 'sky_density',
            'north': 'north',
            'hoys': 'hoys',
            'mode': 'mode',
            'suffix': 'suffix'
        }

        self._wea = wea
        self._sky_density = sky_density
        self._north = north
        self._hoys = hoys
        self._mode = mode
        self._suffix = suffix

    @classmethod
    def from_dict(cls, dikt) -> 'SkyMtxSchema':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The SkyMtxSchema of this SkyMtxSchema.  # noqa: E501
        :rtype: SkyMtxSchema
        """
        return util.deserialize_model(dikt, cls)

    @property
    def wea(self) -> WeaSchema:
        """Gets the wea of this SkyMtxSchema.


        :return: The wea of this SkyMtxSchema.
        :rtype: WeaSchema
        """
        return self._wea

    @wea.setter
    def wea(self, wea: WeaSchema):
        """Sets the wea of this SkyMtxSchema.


        :param wea: The wea of this SkyMtxSchema.
        :type wea: WeaSchema
        """

        self._wea = wea

    @property
    def sky_density(self) -> int:
        """Gets the sky_density of this SkyMtxSchema.

        1 - Tregenza Sky, 2 - Reinhart Sky, etc. (Default - 1)  # noqa: E501

        :return: The sky_density of this SkyMtxSchema.
        :rtype: int
        """
        return self._sky_density

    @sky_density.setter
    def sky_density(self, sky_density: int):
        """Sets the sky_density of this SkyMtxSchema.

        1 - Tregenza Sky, 2 - Reinhart Sky, etc. (Default - 1)  # noqa: E501

        :param sky_density: The sky_density of this SkyMtxSchema.
        :type sky_density: int
        """

        self._sky_density = sky_density

    @property
    def north(self) -> float:
        """Gets the north of this SkyMtxSchema.

        angle in degrees between 0-360 to indicate North  # noqa: E501

        :return: The north of this SkyMtxSchema.
        :rtype: float
        """
        return self._north

    @north.setter
    def north(self, north: float):
        """Sets the north of this SkyMtxSchema.

        angle in degrees between 0-360 to indicate North  # noqa: E501

        :param north: The north of this SkyMtxSchema.
        :type north: float
        """
        if north is not None and north > 360:  # noqa: E501
            raise ValueError("Invalid value for `north`, must be a value less than or equal to `360`")  # noqa: E501
        if north is not None and north < 0:  # noqa: E501
            raise ValueError("Invalid value for `north`, must be a value greater than or equal to `0`")  # noqa: E501

        self._north = north

    @property
    def hoys(self) -> HoysSchema:
        """Gets the hoys of this SkyMtxSchema.


        :return: The hoys of this SkyMtxSchema.
        :rtype: HoysSchema
        """
        return self._hoys

    @hoys.setter
    def hoys(self, hoys: HoysSchema):
        """Sets the hoys of this SkyMtxSchema.


        :param hoys: The hoys of this SkyMtxSchema.
        :type hoys: HoysSchema
        """

        self._hoys = hoys

    @property
    def mode(self) -> int:
        """Gets the mode of this SkyMtxSchema.

        sky mode  # noqa: E501

        :return: The mode of this SkyMtxSchema.
        :rtype: int
        """
        return self._mode

    @mode.setter
    def mode(self, mode: int):
        """Sets the mode of this SkyMtxSchema.

        sky mode  # noqa: E501

        :param mode: The mode of this SkyMtxSchema.
        :type mode: int
        """

        self._mode = mode

    @property
    def suffix(self) -> str:
        """Gets the suffix of this SkyMtxSchema.

        Suffix for the sky matrix  # noqa: E501

        :return: The suffix of this SkyMtxSchema.
        :rtype: str
        """
        return self._suffix

    @suffix.setter
    def suffix(self, suffix: str):
        """Sets the suffix of this SkyMtxSchema.

        Suffix for the sky matrix  # noqa: E501

        :param suffix: The suffix of this SkyMtxSchema.
        :type suffix: str
        """

        self._suffix = suffix