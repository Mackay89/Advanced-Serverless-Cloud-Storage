#!/bin/bash

# Deploy application to Kubernetes
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml

