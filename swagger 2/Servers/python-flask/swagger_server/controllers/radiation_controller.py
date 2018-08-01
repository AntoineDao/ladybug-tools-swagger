import connexion
import six

from swagger_server.models.inline_response204 import InlineResponse204  # noqa: E501
from swagger_server.models.inline_response400 import InlineResponse400  # noqa: E501
from swagger_server.models.radiation_grid_based_schema import RadiationGridBasedSchema  # noqa: E501
from swagger_server import util


def recipe_radiation_gridbased_post(recipe):  # noqa: E501
    """Create a new radiation file

    Adds a new radiation file to the list # noqa: E501

    :param recipe: A radiation JSON filer with a uuid key.
    :type recipe: dict | bytes

    :rtype: InlineResponse204
    """
    if connexion.request.is_json:
        recipe = RadiationGridBasedSchema.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def recipe_radiation_gridbased_uuid_put(uuid, recipe):  # noqa: E501
    """Modify an existing radiation file

    Modifies any parameter (except uuid) of a radiation recipe object by completely replacing the definition file. A finer grain method can be set up later. # noqa: E501

    :param uuid: The unique identifier of the radiation recipe.
    :type uuid: str
    :param recipe: A radiation JSON filer with a uuid key.
    :type recipe: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        recipe = RadiationGridBasedSchema.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
