#!/usr/bin/env python3
"""
Redis caching implementation.
"""

import redis

cache = redis.Redis(host="localhost", port=6379, decode_responses=True)

def get_from_cache(key):
    """
    Retrieve a value from the cache by key.
    """
    value = cache.get(key)
    print(f"Cache get: {key} -> {value}")
    return value

def set_to_cache(key, value, ttl=3600):
    """
    Store a value in the cache with a time-to-live (TTL).
    """
    cache.setex(key, ttl, value)
    print(f"Cache set: {key} -> {value} (TTL: {ttl}s)")

if __name__ == "__main__":
    set_to_cache("example_key", "example_value")
    get_from_cache("example_key")

