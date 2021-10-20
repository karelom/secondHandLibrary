# build stage
FROM node:lts-alpine as build-stage
# FROM node:10
WORKDIR /app/my-app
COPY package*.json ./
RUN npm install
# COPY . .
# RUN npm run build

# # production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/my-app/dist /usr/share/nginx/html
EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "run", "serve"]
