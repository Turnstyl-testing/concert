FROM node:14
WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN npm install 
RUN npm install -g ts-node
