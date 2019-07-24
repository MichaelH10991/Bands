# https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8082

CMD [ "node", "server.js" ]
