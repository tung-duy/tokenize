FROM node:latest

RUN apt-get update && apt-get upgrade -y

WORKDIR /usr/app

COPY ./package*.json ./

COPY ./wait-for-it.sh ./

RUN npm install

RUN npm audit fix

COPY ./ ./

EXPOSE 3000

CMD ["npm", "start"]
