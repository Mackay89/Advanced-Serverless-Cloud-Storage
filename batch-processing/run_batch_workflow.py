#!/usr/bin/env python3
"""
Batch processing workflow integration.
"""

import json
from task_queue.producer import publish_task

CONFIG_PATH = "/batch-processing/config/workflow.json"

if __name__ == "__main__":
    with open(CONFIG_PATH, "r") as config_file:
        config = json.load(config_file)

    tasks = [{"video_file": "example_12k_video1.mp4"}, {"video_file": "example_12k_video2.mp4"}]
    for task in tasks:
        publish_task(task)

