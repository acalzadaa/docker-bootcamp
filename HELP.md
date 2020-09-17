# DOCKER HELP

## Build the container

    - docker build -t identidock .

## Run the container

- docker run -d -p local-port:container-port alias
- docker run --rm -d -p 5000:5000 --name alias image
        {--rm * |remove the container after stopping it}
        {-d * |detached execution}
        {-p * |expose this port, use -P to let docker use a free port}
        {--name * |give a specific name to this container}
        {-e "Key=Value" * |to send an environment value to Docker}

## Stop the container

- docker stop $(docker ps -lq)
  - stops all containers

## Remove the containers

- docker rm $(docker ps -lq)
  - remove all containers

## Firing up containers using docker compose

- docker-compose.yml -> docker-compose [command]
  - up* |starts a container
  - build* |rebuilds an image
  - ps* |provides info on the status of containers
  - run* |spins up the container to run a one-off command
  - logs* |outputs colored logs
  - stop* |stops containers withour removing them
  - rm* |removes stopped containers ... use -v to remove Docker Volumes also
  
## docker `<command>`

| command | options  | description          | example                        |
| ------- | -------- | -------------------- | ------------------------------ |
| build   | -t (tag) | builds the container | docker build -t container-id . |

## docker-compose `<command>`

| command | options         | description                                              | example              |
| ------- | --------------- | -------------------------------------------------------- | -------------------- |
| up      | -d (\*detached) | construct the images described in the docker-compose.yml | docker-compose up -d |

## build a container from a Dockerfile

docker build -t container-alias .

## create an image from a container

docker commit container-hostname repository_name/image_name:tag_name

## run a container from an image

docker run -d --rm -it --name container-alias image:version /bin/bash
docker exec -it container-alias cmd -c "shell commands"

## check setup of the container

docker inspect container-alias
docker diff container-hostname

## change the status of a container

docker stop container-alias
docker pause container-alias
docker start container-alias
<br>
# Dockerfile syntax

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
<br>
Note* |The command supplied through the RUN instruction is executed during the build time,
whereas the command specified through the CMD instruction is executed when the
container is launched from the newly created image.  

## Running a demo  

docker build -t image-name .
docker run --rm --name image-alias image-name  

## .dockerignore file  

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

## The Data Volume
<br>

## Linking Containers
<br>
The linked containers have a kind of source-recipient relationship, wherein the source container gets linked to the recipient container, and the recipient securely receives a variety of information from the source
container. The linked containers can communicate using secured tunnels without exposing the ports used for the setup, to the external world  

`--link <container>:<alias>`  

`<container` is the name of the source container.  
`<alias>` is the name seen by the recipient container.

### Steps to implement link  

- Launch a container. This will be the source
  - `docker run --rm --name example -it busybox:latest`
  - The file etc/hosts will show
    - 172.17.0.3 a02895551686
  - Environment variables will show
    - HOSTNAME=a02895551686
- Launch a second container and link it to the first container  
  - `docker run --rm --link example:ex -it busybox:latest`
  - The file etc/hosts will show now
    - 172.17.0.4 a02895551686
    - **172.17.0.3 ex**
  - Environment variables will show
    - HOSTNAME=a02895551686
    - **EX_NAME=/berserk_mcclintock/ex**
  - Execute a ping to the linked container ip
    - `ping -c 2 ex`

## Using Docker-Compose

Use by default a **docker-compose.yml** file or specify with `-f` *file_name*  

| keys supported   | description                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| _build_          | path to the directory of the _dockerfile_                                                |
| _cap_add_        | This adds a capability to the container                                                  |
| _cap_drop_       | This drops a capability of the container                                                 |
| _command_        | overrides a default command                                                              |
| _cpu_shares_     | This sets the CPU shares (relative weight)                                               |
| _dns_            | This sets custom DNS servers                                                             |
| _dns_search_     | This sets custom DNS search servers                                                      |
| _domainname_     | This sets the domain name                                                                |
| _entrypoint_     | This overrides the default entrypoint                                                    |
| _env_file_       | This adds environment variables to a file                                                |
| _environment_    | This adds environment variables and uses either an array or a dictionary                 |
| _expose_         | This key exposes ports without publishing them to the host machine                       |
| _expose_         | exposes ports without publishing to host machine                                         |
| _extends_        | This extends another service defined in the same or different                            |
| _external_links_ | links to other containers started externally                                             |
| _hostname_       | This sets a container's host name                                                        |
| _image_          | this is the tag or image id                                                              |
| _links_          | links the container in another service                                                   |
| _mem_limit_      | This limits the memory                                                                   |
| _net_            | This is the networking mode, which has the same values as the Docker client --net option |
| _pid_            | This enables the PID space sharing between the host and the containers                   |
| _port_           | exposes ports                                                                            |
| _ports_          | This key exposes ports and specifies both the ports HOST_port:CONTAINER_port             |
| _privileged_     | This gives extended privileges                                                           |
| _restart_        | This sets the restart policy of the container                                            |
| _stdin_open_     | This enables the standard input facility                                                 |
| _tty_            | This enables text based control such as a terminal                                       |
| _user_           | This sets the default user                                                               |
| _volumes_        | This key mounts paths as volumes                                                         |
| _volumes_from_   | This key mounts all of the volumes from another container configuration file             |
| _working_dir_    | This changes the working directory inside the container                                  |

## The docker-compose command  

usage:  `docker-compose [<options>] <command> [<args>...]`  

| commands | description                                    |
| -------- | ---------------------------------------------- |
| build    | This builds or rebuilds services               |
| kill     | This kills containers                          |
| logs     | This displays the output from the containers   |
| port     | This prints the public port for a port binding |
| ps       | This lists the containers                      |
| pull     | This pulls the service images                  |
| rm       | This removes the stopped containers            |
| run      | This runs a one-off command                    |
| scale    | This sets a number of containers for a service |
| start    | This starts services                           |
| stop     | This stops services                            |
| up       | This creates and starts containers             |
