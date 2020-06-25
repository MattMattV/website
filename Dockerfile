FROM node as build

WORKDIR /home/builder

COPY . .

RUN npm ci && \
    npm run build

############################

FROM rust as compress

COPY --from=build /home/builder/_site  /site

RUN cargo install static-compress && \
    static-compress -c brotli -e br -j $(nproc) '/site/**/*' && \
    static-compress -c gzip -e gz -j $(nproc) '/site/**/*'
############################
FROM caddy:2

COPY ./Caddyfile /etc/caddy/Caddyfile

COPY --from=compress /site  /site
