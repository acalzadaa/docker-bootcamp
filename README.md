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
        {-p : expose this port}
        {--name : give a specific name to this container}

- docker stop $(docker ps -lq)
  - stops all containers

- docker rm $(docker ps -lq)
  - remove all containers

