FROM ubuntu:14.04

RUN apt-get update
RUN apt-get upgrade -y

RUN apt-get install -y nodejs npm nodejs-legacy git ruby
RUN gem install sass

RUN npm install -g bower grunt-cli

RUN npm config set registry http://registry.npmjs.org/

## install node gyp 
RUN npm install -g node-gyp


## npm install
ADD package.json /src/package.json
RUN cd /src && npm install 

## bower install
ADD bower.json /src/bower.json
ADD .bowerrc /src/.bowerrc
RUN cd /src && bower install --allow-root 

ADD . /src

EXPOSE 8080

WORKDIR ./src

