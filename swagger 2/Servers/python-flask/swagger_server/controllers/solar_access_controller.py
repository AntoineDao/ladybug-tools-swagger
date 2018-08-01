import connexion
import six

from swagger_server.models.inline_response204 import InlineResponse204  # noqa: E501
from swagger_server.models.inline_response400 import InlineResponse400  # noqa: E501
from swagger_server.models.solar_access_grid_based_schema import SolarAccessGridBasedSchema  # noqa: E501
from swagger_server import util


def recipe_solar_access_gridbased_post(recipe):  # noqa: E501
    """Create a new solar_access file

    Adds a new solar_access file to the list # noqa: E501

    :param recipe: A solar_access JSON filer with a uuid key.
    :type recipe: dict | bytes

    :rtype: InlineResponse204
    """
    if connexion.request.is_json:
        recipe = SolarAccessGridBasedSchema.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def recipe_solar_access_gridbased_uuid_put(uuid, recipe):  # noqa: E501
    """Modify an existing solar_access file

    Modifies any parameter (except uuid) of a solar_access recipe object by completely replacing the definition file. A finer grain method can be set up later. # noqa: E501

    :param uuid: The unique identifier of the solar_access recipe.
    :type uuid: str
    :param recipe: A solar_access JSON filer with a uuid key.
    :type recipe: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        recipe = SolarAccessGridBasedSchema.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
