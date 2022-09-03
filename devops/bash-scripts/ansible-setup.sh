#!/bin/bash

#install pip
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py --user

#install ansible
python3 -m pip install --user ansible

#upgrade to latest version
python3 -m pip install --upgrade --user ansible


echo "====================================================="
echo "Ansible version"
#Confirming ansible installation
ansible --version

