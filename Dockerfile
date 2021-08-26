FROM node:14
WORKDIR .
COPY . .
RUN npm install -g @types/node
RUN npm install --only=production
RUN npm install -g typescript
RUN npm install -g ts-node
