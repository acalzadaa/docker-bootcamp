# Docker Bootcamp

This project is intended to unveil the mistery of Docker and provide the user the ability to wield its power. The goal of this training is learning how closely involve Docker and Docker Hub to the Software Life Cycle, from developement and testing to production, streamlining a continuous deployment pipeline using a CD/CI tool. This learning process is based in the following books:

- Using Docker: Mouat, Adrian. O'Reilly. 2016
- Docker in Action:
- Docker in Practice

## Instructions to run the examples

### Building a website using Python and Flask in a Container

To run this example:

docker build -t identidock .
docker run -d --name dnmonster amouat/dnmonster:1.0
docker run -d -p 5000:5000 -e "ENV=DEV" --link dnmonster:dnmonster identidock

or

docker build -t identidock .
docker-compose up -d