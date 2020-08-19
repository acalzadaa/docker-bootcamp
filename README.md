# First Exercise

Building a website using Python and Flask in a Container.

To run this example:

Build the container:
    - docker build -t identidock .
Run the container:

- docker run -d -p 5000:5000 identidock
- docker run --rm -d -p 5000:5000 --name identidock identidock
        {--rm : remove the container after stopping it}
        {-d : detached execution}
        {-p : expose this port, use -P to let docker use a free port}
        {--name : give a specific name to this container}
        {-e "Key=Value" : to send an environment value to Docker}

- docker stop $(docker ps -lq)
  - stops all containers

- docker rm $(docker ps -lq)
  - remove all containers

- docker-compose.yml -> docker-compose [command]
  - up: starts a container
  - build: rebuilds an image
  - ps: provides info on the status of containers
  - run: spins up the container to run a one-off command
  - logs: outputs colored logs
  - stop: stops containers withour removing them
  - rm: removes stopped containers ... use -v to remove Docker Volumes also