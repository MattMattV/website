FROM node as dependencies

WORKDIR /home/builder

COPY . .

RUN npm ci

############################

FROM ruby:2.5 as jekyllBuilder

WORKDIR /home/builder

COPY --from=dependencies /home/builder .

RUN gem install jekyll && \
    jekyll build

############################

FROM node as extraSteps

WORKDIR /home/builder

COPY --from=jekyllBuilder /home/builder .

RUN npx gulp build

############################

FROM httpd

COPY --from=extraSteps /home/builder/_site /usr/local/apache2/htdocs/