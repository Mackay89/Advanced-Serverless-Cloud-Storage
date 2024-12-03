#!/bin/bash
# Kubernetes cluster setup
set -e

echo "Initializing Kubernetes cluster setup..."

# Install kubeadm, kubelet, kubectl
sudo apt update && sudo apt install -y kubeadm kubelet kubectl

# Initialize Kubernetes
sudo kubeadm init --pod-network-cidr=192.168.0.0/16

# Configure kubectl
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

# Deploy a pod network
kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml

echo "Kubernetes cluster setup complete."

