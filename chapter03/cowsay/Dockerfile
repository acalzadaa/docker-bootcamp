FROM ubuntu:latest
LABEL Alejandro Calzada <alejandro.calzada.algravez@gmail.com>
RUN apt-get update && apt-get install -y cowsay fortune
COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]
VOLUME /data