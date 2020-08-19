FROM python:3.8.1
RUN pip install Flask==0.10.1
WORKDIR /app
COPY app /app
VOLUME [ "/app" ]
CMD [ "python", "identydock.py" ]