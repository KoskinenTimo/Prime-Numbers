FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install --only=prod

CMD [ "npm", "start" ]