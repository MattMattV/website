FROM ubuntu:19.10 as build

WORKDIR /home/builder

COPY . .

RUN apt-get update && \
    apt-get install -y --no-install-recommends hugo git

RUN hugo

############################

FROM httpd

COPY --from=build /home/builder/public  /usr/local/apache2/htdocs/