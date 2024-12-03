#!/bin/bash

# Deploy using Custom IaC tool
cd custom-iac-tool/modules
terraform init
terraform apply -auto-approve

