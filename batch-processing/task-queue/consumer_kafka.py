#!/usr/bin/env python3
"""
Kafka consumer for processing video tasks.
"""

from kafka import KafkaConsumer
import json
from video_transcoding.transcode import transcode_video

TOPIC_NAME = "video_tasks"
INPUT_DIR = "/data/input_videos"
OUTPUT_DIR = "/data/output_videos"

def process_task(task):
    video_file = task.get("video_file")
    input_path = f"{INPUT_DIR}/{video_file}"
    output_path = f"{OUTPUT_DIR}/transcoded_{video_file}"

    print(f"Processing task: {task}")
    transcode_video(input_path, output_path)

if __name__ == "__main__":
    consumer = KafkaConsumer(
        TOPIC_NAME,
        bootstrap_servers="localhost:9092",
        auto_offset_reset="earliest",
        value_deserializer=lambda v: json.loads(v.decode("utf-8"))
    )

    for message in consumer:
        process_task(message.value)

