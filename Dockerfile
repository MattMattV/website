FROM node as build

WORKDIR /home/builder

COPY . .

RUN npm ci && \
    npm run build

############################

FROM caddy:2

COPY ./Caddyfile /etc/caddy/Caddyfile

COPY --from=build /home/builder/_site  /site
