import connexion
import six

from swagger_server.models.inline_response20010 import InlineResponse20010  # noqa: E501
from swagger_server.models.inline_response2009 import InlineResponse2009  # noqa: E501
from swagger_server.models.inline_response204 import InlineResponse204  # noqa: E501
from swagger_server.models.inline_response400 import InlineResponse400  # noqa: E501
from swagger_server.models.wea_schema import WeaSchema  # noqa: E501
from swagger_server import util


def wea_get(country=None):  # noqa: E501
    """Get a list of WEA objects

    Retrieves a list of wea objects for a given filter. # noqa: E501

    :param country: The countyr the EPW is from
    :type country: str

    :rtype: InlineResponse2009
    """
    return 'do some magic!'


def wea_post(wea):  # noqa: E501
    """Create a new wea object

    Adds a new wea object to the list # noqa: E501

    :param wea: a wea object
    :type wea: dict | bytes

    :rtype: InlineResponse204
    """
    if connexion.request.is_json:
        wea = WeaSchema.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def wea_uuid_delete(uuid):  # noqa: E501
    """Delete an existing wea object

    Delete an wea object in the database specifying the uuid of the object # noqa: E501

    :param uuid: The unique identifier of the wea.
    :type uuid: str

    :rtype: None
    """
    return 'do some magic!'


def wea_uuid_get(uuid):  # noqa: E501
    """Get a specific wea object

    Returns a single wea object # noqa: E501

    :param uuid: The unique identifier of the wea.
    :type uuid: str

    :rtype: InlineResponse20010
    """
    return 'do some magic!'


def wea_uuid_put(uuid, wea):  # noqa: E501
    """Modify an existing wea object

    Modifies any parameter (except uuid) of an wea object by completely replacing the wea object. A finer grain method can be set up later. # noqa: E501

    :param uuid: The unique identifier of the wea.
    :type uuid: str
    :param wea: a wea object
    :type wea: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        wea = WeaSchema.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
