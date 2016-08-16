FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependenciesi
RUN echo | pwd
ADD /deployment/gateway-service/package.json /usr/src/app/
RUN npm install

# Bundle app source
ADD /public/js/node-services/gateway-api-service/ /usr/src/app

EXPOSE 3002
CMD [ "npm", "start" ] 
