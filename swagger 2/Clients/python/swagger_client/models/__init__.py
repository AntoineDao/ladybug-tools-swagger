# coding: utf-8

# flake8: noqa
"""
    Honeybee Server API

    A sample API definition for a honeybee server  # noqa: E501

    OpenAPI spec version: 0.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

# import models into model package
from swagger_client.models.analysis_grid_schema import AnalysisGridSchema
from swagger_client.models.analysis_point_schema import AnalysisPointSchema
from swagger_client.models.analysis_surface_schema import AnalysisSurfaceSchema
from swagger_client.models.analysis_surface_schema_rad_properties import AnalysisSurfaceSchemaRadProperties
from swagger_client.models.analysis_type import AnalysisType
from swagger_client.models.annual_grid_based_schema import AnnualGridBasedSchema
from swagger_client.models.bsdf_material_schema import BSDFMaterialSchema
from swagger_client.models.data_collection import DataCollection
from swagger_client.models.data_type import DataType
from swagger_client.models.daylight_factor_grid_based_schema import DaylightFactorGridBasedSchema
from swagger_client.models.direct_reflection_grid_based_schema import DirectReflectionGridBasedSchema
from swagger_client.models.five_phasel_grid_based_schema import FivePhaselGridBasedSchema
from swagger_client.models.grid_based_recipe_schema import GridBasedRecipeSchema
from swagger_client.models.hb_surface_schema import HBSurfaceSchema
from swagger_client.models.hoy_schema import HoySchema
from swagger_client.models.hoy_schema_hoy import HoySchemaHoy
from swagger_client.models.hoys_schema import HoysSchema
from swagger_client.models.inline_response_200 import InlineResponse200
from swagger_client.models.inline_response_204 import InlineResponse204
from swagger_client.models.inline_response_400 import InlineResponse400
from swagger_client.models.light_source_material_schema import LightSourceMaterialSchema
from swagger_client.models.location import Location
from swagger_client.models.location_schema import LocationSchema
from swagger_client.models.material_schema import MaterialSchema
from swagger_client.models.opaque_material_schema import OpaqueMaterialSchema
from swagger_client.models.point_in_time_grid_based_schema import PointInTimeGridBasedSchema
from swagger_client.models.point_schema import PointSchema
from swagger_client.models.query_parameters import QueryParameters
from swagger_client.models.radiance_parameters import RadianceParameters
from swagger_client.models.radiation_grid_based_schema import RadiationGridBasedSchema
from swagger_client.models.sky_mtx_schema import SkyMtxSchema
from swagger_client.models.sky_schema import SkySchema
from swagger_client.models.solar_access_grid_based_schema import SolarAccessGridBasedSchema
from swagger_client.models.source_schema import SourceSchema
from swagger_client.models.state_schema import StateSchema
from swagger_client.models.surface_property_schema import SurfacePropertySchema
from swagger_client.models.surface_state_schema import SurfaceStateSchema
from swagger_client.models.three_phasel_grid_based_schema import ThreePhaselGridBasedSchema
from swagger_client.models.translucent_material_schema import TranslucentMaterialSchema
from swagger_client.models.vector_schema import VectorSchema
from swagger_client.models.vertex_schema import VertexSchema
from swagger_client.models.vertex_schema_inner import VertexSchemaInner
from swagger_client.models.wea_schema import WeaSchema