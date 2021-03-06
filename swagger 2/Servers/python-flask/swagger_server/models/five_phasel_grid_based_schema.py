# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.analysis_grid_schema import AnalysisGridSchema  # noqa: F401,E501
from swagger_server.models.analysis_type import AnalysisType  # noqa: F401,E501
from swagger_server.models.hb_surface_schema import HBSurfaceSchema  # noqa: F401,E501
from swagger_server.models.radiance_parameters import RadianceParameters  # noqa: F401,E501
from swagger_server.models.sky_mtx_schema import SkyMtxSchema  # noqa: F401,E501
from swagger_server import util


class FivePhaselGridBasedSchema(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, id: str=None, type: str=None, sky_mtx: SkyMtxSchema=None, analysis_grids: List[AnalysisGridSchema]=None, surfaces: List[HBSurfaceSchema]=None, analysis_type: AnalysisType=None, view_mtx_parameters: RadianceParameters=None, daylight_mtx_parameters: RadianceParameters=None):  # noqa: E501
        """FivePhaselGridBasedSchema - a model defined in Swagger

        :param id: The id of this FivePhaselGridBasedSchema.  # noqa: E501
        :type id: str
        :param type: The type of this FivePhaselGridBasedSchema.  # noqa: E501
        :type type: str
        :param sky_mtx: The sky_mtx of this FivePhaselGridBasedSchema.  # noqa: E501
        :type sky_mtx: SkyMtxSchema
        :param analysis_grids: The analysis_grids of this FivePhaselGridBasedSchema.  # noqa: E501
        :type analysis_grids: List[AnalysisGridSchema]
        :param surfaces: The surfaces of this FivePhaselGridBasedSchema.  # noqa: E501
        :type surfaces: List[HBSurfaceSchema]
        :param analysis_type: The analysis_type of this FivePhaselGridBasedSchema.  # noqa: E501
        :type analysis_type: AnalysisType
        :param view_mtx_parameters: The view_mtx_parameters of this FivePhaselGridBasedSchema.  # noqa: E501
        :type view_mtx_parameters: RadianceParameters
        :param daylight_mtx_parameters: The daylight_mtx_parameters of this FivePhaselGridBasedSchema.  # noqa: E501
        :type daylight_mtx_parameters: RadianceParameters
        """
        self.swagger_types = {
            'id': str,
            'type': str,
            'sky_mtx': SkyMtxSchema,
            'analysis_grids': List[AnalysisGridSchema],
            'surfaces': List[HBSurfaceSchema],
            'analysis_type': AnalysisType,
            'view_mtx_parameters': RadianceParameters,
            'daylight_mtx_parameters': RadianceParameters
        }

        self.attribute_map = {
            'id': 'id',
            'type': 'type',
            'sky_mtx': 'sky_mtx',
            'analysis_grids': 'analysis_grids',
            'surfaces': 'surfaces',
            'analysis_type': 'analysis_type',
            'view_mtx_parameters': 'view_mtx_parameters',
            'daylight_mtx_parameters': 'daylight_mtx_parameters'
        }

        self._id = id
        self._type = type
        self._sky_mtx = sky_mtx
        self._analysis_grids = analysis_grids
        self._surfaces = surfaces
        self._analysis_type = analysis_type
        self._view_mtx_parameters = view_mtx_parameters
        self._daylight_mtx_parameters = daylight_mtx_parameters

    @classmethod
    def from_dict(cls, dikt) -> 'FivePhaselGridBasedSchema':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The FivePhaselGridBasedSchema of this FivePhaselGridBasedSchema.  # noqa: E501
        :rtype: FivePhaselGridBasedSchema
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> str:
        """Gets the id of this FivePhaselGridBasedSchema.


        :return: The id of this FivePhaselGridBasedSchema.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id: str):
        """Sets the id of this FivePhaselGridBasedSchema.


        :param id: The id of this FivePhaselGridBasedSchema.
        :type id: str
        """
        allowed_values = ["five_phase"]  # noqa: E501
        if id not in allowed_values:
            raise ValueError(
                "Invalid value for `id` ({0}), must be one of {1}"
                .format(id, allowed_values)
            )

        self._id = id

    @property
    def type(self) -> str:
        """Gets the type of this FivePhaselGridBasedSchema.


        :return: The type of this FivePhaselGridBasedSchema.
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type: str):
        """Sets the type of this FivePhaselGridBasedSchema.


        :param type: The type of this FivePhaselGridBasedSchema.
        :type type: str
        """
        allowed_values = ["gridbased"]  # noqa: E501
        if type not in allowed_values:
            raise ValueError(
                "Invalid value for `type` ({0}), must be one of {1}"
                .format(type, allowed_values)
            )

        self._type = type

    @property
    def sky_mtx(self) -> SkyMtxSchema:
        """Gets the sky_mtx of this FivePhaselGridBasedSchema.


        :return: The sky_mtx of this FivePhaselGridBasedSchema.
        :rtype: SkyMtxSchema
        """
        return self._sky_mtx

    @sky_mtx.setter
    def sky_mtx(self, sky_mtx: SkyMtxSchema):
        """Sets the sky_mtx of this FivePhaselGridBasedSchema.


        :param sky_mtx: The sky_mtx of this FivePhaselGridBasedSchema.
        :type sky_mtx: SkyMtxSchema
        """

        self._sky_mtx = sky_mtx

    @property
    def analysis_grids(self) -> List[AnalysisGridSchema]:
        """Gets the analysis_grids of this FivePhaselGridBasedSchema.


        :return: The analysis_grids of this FivePhaselGridBasedSchema.
        :rtype: List[AnalysisGridSchema]
        """
        return self._analysis_grids

    @analysis_grids.setter
    def analysis_grids(self, analysis_grids: List[AnalysisGridSchema]):
        """Sets the analysis_grids of this FivePhaselGridBasedSchema.


        :param analysis_grids: The analysis_grids of this FivePhaselGridBasedSchema.
        :type analysis_grids: List[AnalysisGridSchema]
        """

        self._analysis_grids = analysis_grids

    @property
    def surfaces(self) -> List[HBSurfaceSchema]:
        """Gets the surfaces of this FivePhaselGridBasedSchema.


        :return: The surfaces of this FivePhaselGridBasedSchema.
        :rtype: List[HBSurfaceSchema]
        """
        return self._surfaces

    @surfaces.setter
    def surfaces(self, surfaces: List[HBSurfaceSchema]):
        """Sets the surfaces of this FivePhaselGridBasedSchema.


        :param surfaces: The surfaces of this FivePhaselGridBasedSchema.
        :type surfaces: List[HBSurfaceSchema]
        """

        self._surfaces = surfaces

    @property
    def analysis_type(self) -> AnalysisType:
        """Gets the analysis_type of this FivePhaselGridBasedSchema.


        :return: The analysis_type of this FivePhaselGridBasedSchema.
        :rtype: AnalysisType
        """
        return self._analysis_type

    @analysis_type.setter
    def analysis_type(self, analysis_type: AnalysisType):
        """Sets the analysis_type of this FivePhaselGridBasedSchema.


        :param analysis_type: The analysis_type of this FivePhaselGridBasedSchema.
        :type analysis_type: AnalysisType
        """

        self._analysis_type = analysis_type

    @property
    def view_mtx_parameters(self) -> RadianceParameters:
        """Gets the view_mtx_parameters of this FivePhaselGridBasedSchema.


        :return: The view_mtx_parameters of this FivePhaselGridBasedSchema.
        :rtype: RadianceParameters
        """
        return self._view_mtx_parameters

    @view_mtx_parameters.setter
    def view_mtx_parameters(self, view_mtx_parameters: RadianceParameters):
        """Sets the view_mtx_parameters of this FivePhaselGridBasedSchema.


        :param view_mtx_parameters: The view_mtx_parameters of this FivePhaselGridBasedSchema.
        :type view_mtx_parameters: RadianceParameters
        """

        self._view_mtx_parameters = view_mtx_parameters

    @property
    def daylight_mtx_parameters(self) -> RadianceParameters:
        """Gets the daylight_mtx_parameters of this FivePhaselGridBasedSchema.


        :return: The daylight_mtx_parameters of this FivePhaselGridBasedSchema.
        :rtype: RadianceParameters
        """
        return self._daylight_mtx_parameters

    @daylight_mtx_parameters.setter
    def daylight_mtx_parameters(self, daylight_mtx_parameters: RadianceParameters):
        """Sets the daylight_mtx_parameters of this FivePhaselGridBasedSchema.


        :param daylight_mtx_parameters: The daylight_mtx_parameters of this FivePhaselGridBasedSchema.
        :type daylight_mtx_parameters: RadianceParameters
        """

        self._daylight_mtx_parameters = daylight_mtx_parameters
