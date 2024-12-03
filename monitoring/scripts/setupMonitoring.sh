#!/bin/bash

echo "Setting up monitoring components..."

# Prometheus
echo "Starting Prometheus..."
docker build -t prometheus-server ./prometheus
docker run -d -p 9090:9090 prometheus-server

# Grafana
echo "Starting Grafana..."
docker build -t grafana-server ./grafana
docker run -d -p 3000:3000 grafana-server

echo "Monitoring setup complete. Access Prometheus at http://localhost:9090 and Grafana at http://localhost:3000."

