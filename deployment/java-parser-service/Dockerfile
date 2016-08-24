FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
ADD /server-side/node-services/java-parser-service/ /usr/src/app

# Install app dependencies
RUN npm install

EXPOSE 3006
CMD [ "npm", "start" ] 
