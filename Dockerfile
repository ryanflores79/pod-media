FROM node:20.11.0 as build
WORKDIR /src
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build
CMD yarn start
