FROM node:latest

USER root

RUN mkdir -p /app/
WORKDIR /app/

COPY ./app/package.json /app/
RUN npm install

COPY ./app/ /app

EXPOSE 8042
CMD ["npm", "start"]
