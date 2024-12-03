import json
from elasticsearch import Elasticsearch

es = Elasticsearch("http://localhost:9200")

def process_file_metadata(metadata):
    # Process metadata and index it in Elasticsearch
    try:
        es.index(index="file_metadata", document=metadata)
        print(f"Metadata indexed: {metadata['file_name']}")
    except Exception as e:
        print(f"Error processing metadata: {e}")

if __name__ == "__main__":
    with open("metadata.json", "r") as file:
        metadata_list = json.load(file)
        for metadata in metadata_list:
            process_file_metadata(metadata)

