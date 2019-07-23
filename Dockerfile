# https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

From node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]

