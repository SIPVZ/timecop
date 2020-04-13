FROM tiangolo/uwsgi-nginx-flask:python3.6

RUN apt-get update && apt-get install -y redis-server python3-celery python-celery-common python3-redis


COPY ./ /app

COPY ./requirements.txt /tmp/
RUN pip3 install numpy
RUN pip install --upgrade --no-deps statsmodels
RUN pip3 install --requirement /tmp/requirements.txt

RUN pip install -U numpy

RUN pip3 install pandas scipy patsy matplotlib numdifftools seaborn pyflux tensorflow tbats celery redis h5py
RUN pip3 install -U statsmodels
RUN service redis-server start
RUN rm -fr /root/.cache/pip
COPY ./config/timeout.conf /etc/nginx/conf.d/
RUN chmod -R g=u /etc/passwd /app
