#!/usr/bin/env python3
"""
RabbitMQ producer for task queuing.
"""

import pika
import json

QUEUE_NAME = "video_tasks"

def publish_task(task):
    connection = pika.BlockingConnection(pika.ConnectionParameters("localhost"))
    channel = connection.channel()
    channel.queue_declare(queue=QUEUE_NAME)

    channel.basic_publish(
        exchange="",
        routing_key=QUEUE_NAME,
        body=json.dumps(task)
    )
    print(f"Task published: {task}")
    connection.close()

if __name__ == "__main__":
    task = {"video_file": "example_12k_video.mp4"}
    publish_task(task)

