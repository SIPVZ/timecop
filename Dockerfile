FROM tiangolo/uwsgi-nginx-flask:python3.6

RUN apt-get update && apt-get install -y redis-server python3-celery python-celery-common python3-redis && rm -rf /var/lib/apt/lists/*

COPY ./ /app
COPY ./requirements.txt /tmp/
RUN pip3 install --requirement /tmp/requirements.txt

COPY ./config/timeout.conf /etc/nginx/conf.d/
RUN chmod -R g=u /etc/passwd /app && rm -fr /root/.cache/pip && service redis-server start
