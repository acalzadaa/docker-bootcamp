# DOCKER HELP

## Build the container

    - docker build -t identidock .

## Run the container

- docker run -d -p local-port:container-port alias
- docker run --rm -d -p 5000:5000 --name alias image
        {--rm : remove the container after stopping it}
        {-d : detached execution}
        {-p : expose this port, use -P to let docker use a free port}
        {--name : give a specific name to this container}
        {-e "Key=Value" : to send an environment value to Docker}

## Stop the container

- docker stop $(docker ps -lq)
  - stops all containers

## Remove the containers

- docker rm $(docker ps -lq)
  - remove all containers

## Firing up containers using docker compose

- docker-compose.yml -> docker-compose [command]
  - up: starts a container
  - build: rebuilds an image
  - ps: provides info on the status of containers
  - run: spins up the container to run a one-off command
  - logs: outputs colored logs
  - stop: stops containers withour removing them
  - rm: removes stopped containers ... use -v to remove Docker Volumes also
  
docker

| command | options | description | example |
| - | - | - | - |
| build | -t (tag) | builds the container | docker build -t container-id . |

docker-compose

| command | options | description | example |
| - | - | - | - |
| up | -d (*detached) | construct the images described in the docker-compose.yml | docker-compose up -d

### build a container from a Dockerfile

docker build -t container-alias .

### create an image from a container

docker commit container-hostname repository_name/image_name:tag_name

### run a container from an image

docker run -d --rm -it --name container-alias image:version /bin/bash
docker exec -it container-alias cmd -c "shell commands"

### check setup of the container

docker inspect container-alias
docker diff container-hostname

### change the status of a container

docker stop container-alias
docker pause container-alias
docker start container-alias
