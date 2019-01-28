FROM node:latest

RUN apt-get update && apt-get upgrade -y

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

RUN npm install -g nodemon

RUN npm install -g sequelize-cli

COPY ./ ./

ENV NODE_ENV development

CMD ["npm", "start"]
