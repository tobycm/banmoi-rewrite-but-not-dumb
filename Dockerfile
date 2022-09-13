FROM node:16.17.0-alpine

WORKDIR /usr/banmoi

COPY package.json .

RUN npm install

COPY . .

# VOLUME [""]

CMD [ "node", "index.js" ]