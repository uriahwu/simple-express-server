FROM alpine:3.11

ENV NODE_VERSION 10.22.0

COPY server.js package.json package-lock.json /app/

WORKDIR /app

RUN apk update && \
    apk add nodejs \
    npm

RUN npm install && npm cache clean --force

CMD node server.js
