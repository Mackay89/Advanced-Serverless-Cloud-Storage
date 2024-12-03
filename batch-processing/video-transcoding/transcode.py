#!/usr/bin/env python3
"""
High-resolution (12K) video transcoding script.
"""

import subprocess
import os

INPUT_DIR = "/data/input_videos"
OUTPUT_DIR = "/data/output_videos"
FFMPEG_PATH = "/usr/bin/ffmpeg"

def transcode_video(input_file, output_file):
    """
    Transcodes a video to a different resolution and format.
    """
    command = [
        FFMPEG_PATH,
        "-i", input_file,
        "-vf", "scale=7680:4320",  # Downscaling to 8K for example
        "-c:v", "libx265",
        "-preset", "fast",
        "-crf", "28",
        output_file
    ]

    try:
        subprocess.run(command, check=True)
        print(f"Transcoding completed: {output_file}")
    except subprocess.CalledProcessError as e:
        print(f"Error during transcoding: {e}")

if __name__ == "__main__":
    for file in os.listdir(INPUT_DIR):
        if file.endswith((".mp4", ".mkv")):
            input_path = os.path.join(INPUT_DIR, file)
            output_path = os.path.join(OUTPUT_DIR, f"transcoded_{file}")
            transcode_video(input_path, output_path)

