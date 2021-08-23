FROM node:14
WORKDIR .
COPY . .
RUN npm i --save-dev @types/node
RUN npm install --only=production
RUN npm install -g typescript
RUN npm install -g ts-node





