# Refer https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:7.3.0
MAINTAINER qiaobutang.com

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN NPM_CONFIG_REGISTRY=https://registry.npm.taobao.org SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE <%= serverPort %>
CMD [ "npm", "run", "server" ]
