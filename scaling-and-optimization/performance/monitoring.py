#!/usr/bin/env python3
"""
Performance monitoring and bottleneck detection.
"""

import psutil
import time

def monitor_system_metrics(interval=5):
    """
    Monitors CPU, memory, and disk usage at regular intervals.
    """
    while True:
        cpu = psutil.cpu_percent(interval=1)
        memory = psutil.virtual_memory()
        disk = psutil.disk_usage("/")

        print(f"CPU Usage: {cpu}%")
        print(f"Memory Usage: {memory.percent}% (Available: {memory.available / (1024 ** 2):.2f} MB)")
        print(f"Disk Usage: {disk.percent}% (Free: {disk.free / (1024 ** 2):.2f} MB)")
        print("-" * 40)

        time.sleep(interval - 1)

if __name__ == "__main__":
    monitor_system_metrics()

