FROM node:20.17.0-alpine3.20@sha256:558a6416c5e0da2cb0f19bbc766f0a76825a7e76484bc211af0bb1cedbb7ca1e

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .
COPY ./src ./src
COPY ./test ./test

RUN npm install

COPY ./interest-calculator ./interest-calculator
