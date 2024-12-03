#!/usr/bin/env python3
"""
RabbitMQ consumer for processing video tasks.
"""

import pika
import json
from video_transcoding.transcode import transcode_video

QUEUE_NAME = "video_tasks"
INPUT_DIR = "/data/input_videos"
OUTPUT_DIR = "/data/output_videos"

def process_task(ch, method, properties, body):
    task = json.loads(body)
    video_file = task.get("video_file")
    input_path = f"{INPUT_DIR}/{video_file}"
    output_path = f"{OUTPUT_DIR}/transcoded_{video_file}"

    print(f"Processing task: {task}")
    transcode_video(input_path, output_path)
    ch.basic_ack(delivery_tag=method.delivery_tag)

if __name__ == "__main__":
    connection = pika.BlockingConnection(pika.ConnectionParameters("localhost"))
    channel = connection.channel()
    channel.queue_declare(queue=QUEUE_NAME)

    channel.basic_consume(queue=QUEUE_NAME, on_message_callback=process_task)
    print("Waiting for tasks...")
    channel.start_consuming()

