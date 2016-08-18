FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
ADD /server-side/node-services/gateway-api-service/ /usr/src/app

# Install app dependenciesi
RUN npm install

EXPOSE 3002
CMD [ "npm", "start" ] 

