FROM node:8-alpine

# Create app directory
WORKDIR /app

# Bundle app source
COPY . /app/

# yarn install
RUN yarn

EXPOSE 9229 3000
CMD [ "yarn", "start:debug-docker"]
