import requests
import json

generator_address = "http://192.168.99.100/"

with open('api_definition.json','r') as f:
    api_spec = json.loads(f.read())

r = requests.post("{}api/gen/servers/python-flask".format(generator_address), json={"swaggerUrl": "https://gist.githubusercontent.com/AntoineDao/4e9a7a3167428823850cf797b38ff51b/raw/5beff61c8f0a09860c1bd29693d948274f3e0fb0/test_swagger.json"})

# r = requests.get("{}api/gen/servers/".format(generator_address))
print(r.text)
