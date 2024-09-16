FROM node:20.17.0-alpine3.20@sha256:558a6416c5e0da2cb0f19bbc766f0a76825a7e76484bc211af0bb1cedbb7ca1e

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .
COPY ./src ./src

RUN npm install

COPY ./test ./test
COPY ./jest.config.js ./jest.config.js
COPY ./eslint.config.mjs ./eslint.config.mjs
COPY ./prettier.config.js ./prettier.config.js
COPY ./interest-calculator ./interest-calculator
