#!/bin/sh
IMAGE_NAME=boldor-file-server

echo "Building Docker image '${IMAGE_NAME}'"
docker build -f docker/Dockerfile --pull -t ${IMAGE_NAME}:latest .
