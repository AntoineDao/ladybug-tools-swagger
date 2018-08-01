import connexion
import six

from swagger_server.models.grid_based_recipe_schema import GridBasedRecipeSchema  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response400 import InlineResponse400  # noqa: E501
from swagger_server import util


def recipe_get(size=None, country=None):  # noqa: E501
    """Get a list of daylight recipe objects

    Retrieves a list of daylight recipe objects for a given filter. # noqa: E501

    :param size: Number of files returned
    :type size: int
    :param country: Country where definitions should be from
    :type country: str

    :rtype: InlineResponse200
    """
    return 'do some magic!'


def recipe_uuid_delete(uuid):  # noqa: E501
    """Delete an existing recipe object

    Delete an recipe object in the database specifying the uuid of the file # noqa: E501

    :param uuid: The unique identifier of the recipe.
    :type uuid: str

    :rtype: None
    """
    return 'do some magic!'


def recipe_uuid_get(uuid):  # noqa: E501
    """Get a specific analysis_grid file

    Returns a single analysis_grid file # noqa: E501

    :param uuid: The unique identifier of the analysis_grid.
    :type uuid: str

    :rtype: GridBasedRecipeSchema
    """
    return 'do some magic!'
