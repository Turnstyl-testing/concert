FROM node:14
WORKDIR /usr/src/app
COPY . /usr/src/app/
ENV GOOGLE_APPLICATION_CREDENTIALS=bigQueryServiceCredentials.json
RUN npm install 
RUN npm install -g ts-node
