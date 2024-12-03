#!/bin/bash

# Rollback deployment to previous version
kubectl rollout undo deployment/app-deployment

