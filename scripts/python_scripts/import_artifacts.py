import csv
import json
import requests 

# defining the api-endpoint  
API_ENDPOINT = "http://localhost:5000/new/artifact"

FILE_PATH = 'Artifact Collection - Physical.csv'

# function to send a post request to insert a new artifact
def send_artifact(artifact):
    r = requests.post(url = API_ENDPOINT, json=artifact) 
    response = r.text 
    print("%s"%response)

with open(FILE_PATH, mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 1
    for row in csv_reader:
        if row['Description'] == '':
            row['Description'] = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        send_artifact(row)
        line_count += 1
    print(f'Processed {line_count - 1} artifacts.')


# def change_keys(artifact){
#     artifact['artifactName'] = dictionary.pop('Name')
#     artifact['desc'] = dictionary.pop('De')
#     artifact['artifactName'] = dictionary.pop('Name')
# }