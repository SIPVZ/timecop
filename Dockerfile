FROM tiangolo/uwsgi-nginx-flask:python3.6

RUN apt-get update && apt-get install -y redis-server python3-celery python-celery-common python3-redis

COPY ./ /app
COPY ./requirements.txt /tmp/
RUN pip3 install --requirement /tmp/requirements.txt
RUN service redis-server start
RUN rm -fr /root/.cache/pip
COPY ./config/timeout.conf /etc/nginx/conf.d/
RUN chmod -R g=u /etc/passwd /app
