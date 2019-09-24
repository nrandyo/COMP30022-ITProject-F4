import csv
import json
import requests 

# defining the api-endpoint  
API_ENDPOINT = "http://localhost:5000/artifacts/new"
API_ENDPOINT2 = "http://localhost:5000/new/artifactImage"

FILE_PATH = 'artifacts/Copy of Artifact Collection - Physical.csv'
counter = 0

# function to send a post request to insert a new artifact
def send_artifact(artifact):
    r = requests.post(url = API_ENDPOINT, json=artifact) 
    response = r.text 
    print("%s"%response)

def send_image(artifact):
    global counter
    counter = counter + 1
    if counter > 3:
        return
    json_img = json.loads('{ "FilePath": "' + artifact['FilePath'] + '", "Caption": "", "ArtifactID": "' + str(counter) + '"}')
    r = requests.post(url = API_ENDPOINT2 , json=json_img) 
    response = r.text 
    print("%s"%response)
    


with open(FILE_PATH, mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 1
    for row in csv_reader:
        if row['Description'] == '':
            row['Description'] = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        send_artifact(row)
        send_image(row)
        line_count += 1
    print(f'Processed {line_count - 1} artifacts.')


# def change_keys(artifact){
#     artifact['artifactName'] = dictionary.pop('Name')
#     artifact['desc'] = dictionary.pop('De')
#     artifact['artifactName'] = dictionary.pop('Name')
# }