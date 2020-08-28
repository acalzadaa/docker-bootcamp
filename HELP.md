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

| command | options  | description          | example                        |
| ------- | -------- | -------------------- | ------------------------------ |
| build   | -t (tag) | builds the container | docker build -t container-id . |

docker-compose

| command | options         | description                                              | example              |
| ------- | --------------- | -------------------------------------------------------- | -------------------- |
| up      | -d (\*detached) | construct the images described in the docker-compose.yml | docker-compose up -d |

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

### Dockerfile syntax

 #Comment
 INSTRUCTION arguments

| INSTRUCTION | DESCRIPTION                               | SYNTAX                        | EXAMPLE                                       |
| ----------- | ----------------------------------------- | ----------------------------- | --------------------------------------------- |
| ADD         | like COPY but also fetches                | `ADD <str> ... <dst>`         | ADD web-page-config.tar /                     |
| CMD         | Executes a command after launch           | `CMD ["exec", "arg1"...]`     | `CMD ["echo", "hello world"]`                 |
| COPY        | copy files from host to imaga             | `COPY <str> ... <dst>`        | COPY html /var/www/html                       |
| ENTRYPOINT  | run an app at run                         | `ENTRYPOINT <command>`        | `ENTRYPOINT ["echo", "Dockerfile"]`           |
| ENV         | sets environment variable                 | `ENV <key> <value>`           | `ENV DEBUG_LVL 3`                             |
| EXPOSE      | opens up a container network port         | `EXPOSE <port>[/<proto>]`     | `EXPOSE 7373/udp 8080`                        |
| FROM        | It sets the base image                    | `FROM <image>[:<tag>]`        | FROM ubuntu:14.04                             |
| MAINTAINER  | Sets details in an image                  | `MAINTAINER <autor's details` | `MAINTAINER John Doe <jd@jd.com>`             |
| ONBUILD     | registers a build instruction to an image | `ONBUILD <INSTRUCTION>`       | `ONBUILD ADD config /etc/appconfig`           |
| RUN         | run a command at build                    | `RUN <command>`               | `RUN ["bash", "-c", "rm", "-rf", "/tmp/abc"]` |
| USER        | sets the start up user id                 | USER user                     |                                               |
| VOLUME      | creates a dir in the image filesystem     | `VOLUME <mountpoint>`         |                                               |
| WORKDIR     | changes the current dir from / to         | `WORKDIR <dirpath>`           | `WORKDIR /var/log`                            |

Note: The command supplied through the RUN instruction is executed during the build time,
whereas the command specified through the CMD instruction is executed when the
container is launched from the newly created image.

### running a demo

docker build -t image-name .
docker run --rm --name image-alias image-name

### .dockerignore file

Always mention your .git folder in your .dockerignore file:

.git
.tmp
.cache
**/*.class
*.md

Eliminate:

- build logs
- test scripts/results
- temporary files
- caching/intermediate artifacts
- local secrets
- Local development files such as docker-compose.yml
