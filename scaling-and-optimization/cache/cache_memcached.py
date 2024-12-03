#!/usr/bin/env python3
"""
Memcached caching implementation.
"""

import pylibmc

cache = pylibmc.Client(["127.0.0.1"], binary=True, behaviors={"tcp_nodelay": True, "ketama": True})

def get_from_cache(key):
    """
    Retrieve a value from Memcached by key.
    """
    value = cache.get(key)
    print(f"Cache get: {key} -> {value}")
    return value

def set_to_cache(key, value, ttl=3600):
    """
    Store a value in Memcached with a time-to-live (TTL).
    """
    cache.set(key, value, time=ttl)
    print(f"Cache set: {key} -> {value} (TTL: {ttl}s)")

if __name__ == "__main__":
    set_to_cache("example_key", "example_value")
    get_from_cache("example_key")

