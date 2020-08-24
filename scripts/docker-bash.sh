#!/bin/sh
CONTAINER_NAME=boldor-file-server

echo "Executing bash in container '${CONTAINER_NAME}'"
docker exec -it ${CONTAINER_NAME} /bin/sh
