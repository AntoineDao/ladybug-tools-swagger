# Ladybug Tools Swagger/OpenAPI Specification

This repo is a first pass at setting up a swagger/openapi specification for ladybug-tools python packages.

There are currently two versions of the specifications:
* openapi 3 - Is written using the OpenAPI 3 specification
* swagger 2 - Is written using the Swagger 2.0 specification

The easiest way to check what the specification looks like or to make changes is to copy the `spec_api.yml` file and paste it into the [Swagger Editor](https://editor.swagger.io/)

The Swagger Editor can also be used to generate Server or Client packages in multiple languages. At the moment there are more language options for Swagger 2.0. Any generated Client/Server can be found under the `swagger 2/Clients` or `swagger 2/Servers` folders.

## Servers
* [Python](swagger%202/Servers/python-flask)
* [Javascript](swagger%202/Servers/javascript)
## Clients
* [Python](swagger%202/Clients/python)
* [Go](swagger%202/Clients/go)
* [C#](swagger%202/Clients/csharp)
