FROM tiangolo/uwsgi-nginx-flask:python3.6

COPY ./ /app
COPY ./requirements.txt /tmp/
COPY ./config/timeout.conf /etc/nginx/conf.d/

RUN pip install mxnet==1.4.1 gluonts && apt-get update && apt-get install -y redis-server python3-celery python-celery-common python3-redis && rm -rf /var/lib/apt/lists/* && pip3 install numpy pandas && pip3 install --requirement /tmp/requirements.txt && pip3 install fbprophet &&  chmod -R g=u /etc/passwd /app && rm -fr /root/.cache/pip && pip install --upgrade pyflux && service redis-server start
