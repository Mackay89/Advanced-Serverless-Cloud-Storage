#!/bin/bash
# High-Performance Computing cluster setup script
set -e

echo "Initializing HPC cluster setup..."

# Install essential HPC tools
sudo apt update && sudo apt install -y slurm-wlm nfs-common

# Configure Slurm
sudo cp /etc/slurm/slurm.conf /etc/slurm/slurm.conf.backup
sudo bash -c 'cat > /etc/slurm/slurm.conf' <<EOF
# Basic Slurm configuration
ClusterName=hpc-cluster
SlurmctldHost=localhost
SlurmdPort=6818
...
EOF

# Start Slurm
sudo systemctl restart slurmctld
sudo systemctl enable slurmctld
sudo systemctl enable slurmd

echo "HPC cluster setup complete."

