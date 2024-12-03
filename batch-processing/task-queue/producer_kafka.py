#!/usr/bin/env python3
"""
Kafka producer for task queuing.
"""

from kafka import KafkaProducer
import json

TOPIC_NAME = "video_tasks"

def publish_task(task):
    producer = KafkaProducer(
        bootstrap_servers="localhost:9092",
        value_serializer=lambda v: json.dumps(v).encode("utf-8")
    )
    producer.send(TOPIC_NAME, task)
    print(f"Task published: {task}")
    producer.close()

if __name__ == "__main__":
    task = {"video_file": "example_12k_video.mp4"}
    publish_task(task)

