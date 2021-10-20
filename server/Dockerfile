# build stage
FROM node:lts-alpine
# FROM node:10
WORKDIR /app/api
COPY package*.json ./
RUN npm install
# COPY . .
EXPOSE 9500
CMD [ "npm", "run", "dev" ]