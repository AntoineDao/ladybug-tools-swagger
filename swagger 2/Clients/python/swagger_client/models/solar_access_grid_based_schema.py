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

from swagger_client.models.analysis_grid_schema import AnalysisGridSchema  # noqa: F401,E501
from swagger_client.models.epw_location_schema import EpwLocationSchema  # noqa: F401,E501
from swagger_client.models.hb_surface_schema import HBSurfaceSchema  # noqa: F401,E501
from swagger_client.models.hoy_list_schema import HoyListSchema  # noqa: F401,E501
from swagger_client.models.vector_schema import VectorSchema  # noqa: F401,E501


class SolarAccessGridBasedSchema(object):
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
        'id': 'str',
        'type': 'str',
        'analysis_grids': 'list[AnalysisGridSchema]',
        'surfaces': 'list[HBSurfaceSchema]',
        'location': 'EpwLocationSchema',
        'hoys': 'HoyListSchema',
        'sun_vectors': 'list[VectorSchema]'
    }

    attribute_map = {
        'id': 'id',
        'type': 'type',
        'analysis_grids': 'analysis_grids',
        'surfaces': 'surfaces',
        'location': 'location',
        'hoys': 'hoys',
        'sun_vectors': 'sun_vectors'
    }

    def __init__(self, id=None, type=None, analysis_grids=None, surfaces=None, location=None, hoys=None, sun_vectors=None):  # noqa: E501
        """SolarAccessGridBasedSchema - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._type = None
        self._analysis_grids = None
        self._surfaces = None
        self._location = None
        self._hoys = None
        self._sun_vectors = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if type is not None:
            self.type = type
        if analysis_grids is not None:
            self.analysis_grids = analysis_grids
        if surfaces is not None:
            self.surfaces = surfaces
        if location is not None:
            self.location = location
        if hoys is not None:
            self.hoys = hoys
        if sun_vectors is not None:
            self.sun_vectors = sun_vectors

    @property
    def id(self):
        """Gets the id of this SolarAccessGridBasedSchema.  # noqa: E501


        :return: The id of this SolarAccessGridBasedSchema.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SolarAccessGridBasedSchema.


        :param id: The id of this SolarAccessGridBasedSchema.  # noqa: E501
        :type: str
        """
        allowed_values = ["solar_access"]  # noqa: E501
        if id not in allowed_values:
            raise ValueError(
                "Invalid value for `id` ({0}), must be one of {1}"  # noqa: E501
                .format(id, allowed_values)
            )

        self._id = id

    @property
    def type(self):
        """Gets the type of this SolarAccessGridBasedSchema.  # noqa: E501


        :return: The type of this SolarAccessGridBasedSchema.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this SolarAccessGridBasedSchema.


        :param type: The type of this SolarAccessGridBasedSchema.  # noqa: E501
        :type: str
        """
        allowed_values = ["gridbased"]  # noqa: E501
        if type not in allowed_values:
            raise ValueError(
                "Invalid value for `type` ({0}), must be one of {1}"  # noqa: E501
                .format(type, allowed_values)
            )

        self._type = type

    @property
    def analysis_grids(self):
        """Gets the analysis_grids of this SolarAccessGridBasedSchema.  # noqa: E501


        :return: The analysis_grids of this SolarAccessGridBasedSchema.  # noqa: E501
        :rtype: list[AnalysisGridSchema]
        """
        return self._analysis_grids

    @analysis_grids.setter
    def analysis_grids(self, analysis_grids):
        """Sets the analysis_grids of this SolarAccessGridBasedSchema.


        :param analysis_grids: The analysis_grids of this SolarAccessGridBasedSchema.  # noqa: E501
        :type: list[AnalysisGridSchema]
        """

        self._analysis_grids = analysis_grids

    @property
    def surfaces(self):
        """Gets the surfaces of this SolarAccessGridBasedSchema.  # noqa: E501


        :return: The surfaces of this SolarAccessGridBasedSchema.  # noqa: E501
        :rtype: list[HBSurfaceSchema]
        """
        return self._surfaces

    @surfaces.setter
    def surfaces(self, surfaces):
        """Sets the surfaces of this SolarAccessGridBasedSchema.


        :param surfaces: The surfaces of this SolarAccessGridBasedSchema.  # noqa: E501
        :type: list[HBSurfaceSchema]
        """

        self._surfaces = surfaces

    @property
    def location(self):
        """Gets the location of this SolarAccessGridBasedSchema.  # noqa: E501


        :return: The location of this SolarAccessGridBasedSchema.  # noqa: E501
        :rtype: EpwLocationSchema
        """
        return self._location

    @location.setter
    def location(self, location):
        """Sets the location of this SolarAccessGridBasedSchema.


        :param location: The location of this SolarAccessGridBasedSchema.  # noqa: E501
        :type: EpwLocationSchema
        """

        self._location = location

    @property
    def hoys(self):
        """Gets the hoys of this SolarAccessGridBasedSchema.  # noqa: E501


        :return: The hoys of this SolarAccessGridBasedSchema.  # noqa: E501
        :rtype: HoyListSchema
        """
        return self._hoys

    @hoys.setter
    def hoys(self, hoys):
        """Sets the hoys of this SolarAccessGridBasedSchema.


        :param hoys: The hoys of this SolarAccessGridBasedSchema.  # noqa: E501
        :type: HoyListSchema
        """

        self._hoys = hoys

    @property
    def sun_vectors(self):
        """Gets the sun_vectors of this SolarAccessGridBasedSchema.  # noqa: E501

        A list of vectors if location is not provided  # noqa: E501

        :return: The sun_vectors of this SolarAccessGridBasedSchema.  # noqa: E501
        :rtype: list[VectorSchema]
        """
        return self._sun_vectors

    @sun_vectors.setter
    def sun_vectors(self, sun_vectors):
        """Sets the sun_vectors of this SolarAccessGridBasedSchema.

        A list of vectors if location is not provided  # noqa: E501

        :param sun_vectors: The sun_vectors of this SolarAccessGridBasedSchema.  # noqa: E501
        :type: list[VectorSchema]
        """

        self._sun_vectors = sun_vectors

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
        if not isinstance(other, SolarAccessGridBasedSchema):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
