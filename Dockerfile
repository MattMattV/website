FROM node as build

WORKDIR /home/builder

COPY . .

RUN npm ci && \
    npm run build

############################

FROM httpd

COPY --from=build /home/builder/_site  /usr/local/apache2/htdocs/
