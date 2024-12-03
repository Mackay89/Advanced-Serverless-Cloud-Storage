#!/bin/bash
# Script to create VMs using libvirt
set -e

VM_NAME="compute-node"
DISK_PATH="/var/lib/libvirt/images/${VM_NAME}.qcow2"
ISO_PATH="/path/to/ubuntu.iso"

# Create disk image
qemu-img create -f qcow2 ${DISK_PATH} 20G

# Define and start VM
virt-install \
  --name ${VM_NAME} \
  --ram 4096 \
  --vcpus 2 \
  --os-variant ubuntu20.04 \
  --network network=default \
  --disk path=${DISK_PATH},format=qcow2 \
  --cdrom ${ISO_PATH} \
  --graphics none \
  --console pty,target_type=serial

