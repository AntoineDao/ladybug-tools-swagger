import os
import yaml
import json

spec_folder = 'Yaml Specifications/'

def write_paths(file_in, file_out, file_in_name):
    file_out.write('# {} PATHS\n'.format(file_in_name.upper()))
    lines = file_in.readlines()
    i=0
    while 'paths:' not in lines[i]:
        i += 1
    i += 1
    while 'parametersSchema:' not in lines[i]:
        file_out.write('{}'.format(lines[i]))
        i += 1

def write_parameters(file_in, file_out, file_in_name):
    file_out.write('# {} PARAMETERS\n'.format(file_in_name.upper()))
    lines = file_in.readlines()
    i=0
    while 'parametersSchema:' not in lines[i]:
        i += 1
    i += 1
    while 'definitions:' not in lines[i]:
        file_out.write('{}'.format(lines[i]))
        i += 1

def write_definitions(file_in, file_out, file_in_name):
    file_out.write('# {} DEFINITIONS\n'.format(file_in_name.upper()))
    lines = file_in.readlines()
    total_lines = len(lines)
    i=0
    while 'definitions:' not in lines[i]:
        i += 1
    i += 1
    while i < total_lines:
        file_out.write('{}'.format(lines[i]))
        i += 1

def cycle_and_write(file_paths, file_out, write_function, start_string):
    file_out.write('{}\n'.format(start_string))
    for file in file_paths:
        if file[-4:] == '.yml':
            with open(spec_folder + file, 'r') as f:
                write_function(f, file_out, file.replace('.yml', ''))

file_paths = os.listdir(spec_folder)

with open('api_definition.yml', 'w') as out_file:
    with open('Top.yml', 'r') as top:
        [out_file.write('{}'.format(line)) for line in top.readlines()]
    cycle_and_write(file_paths, out_file, write_paths, 'paths:')
    cycle_and_write(file_paths, out_file, write_parameters, 'parametersSchema:')
    cycle_and_write(file_paths, out_file, write_definitions, 'definitions:')
    out_file.close()

with open('api_definition.yml', 'r') as out_file:
    text = out_file.read()
    out_file.close()

with open('api_definition.yml', 'w') as out_file:
    out_file.write(text.replace('parametersSchema', 'parameters'))
    out_file.close()

with open('api_definition.yml', 'r') as yfile:
    yaml_def = yfile.read()
    yfile.close()

json_def = json.dumps(yaml.load(yaml_def), indent=2)

with open('api_definition.json', 'w') as jfile:
    jfile.write(json_def)
    jfile.close()
