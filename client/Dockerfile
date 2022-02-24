FROM node:16-alpine AS build

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/build /usr/src/app/build

COPY ./nginx.conf /etc/nginx/nginx.conf