#! /usr/bin/env bash



service redis-server start
sleep 10;


cd app
celery worker -A app.celery --loglevel=info &
