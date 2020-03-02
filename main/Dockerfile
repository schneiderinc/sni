# Download the base image and make it as Stage First to generate the build file
FROM node:12.16.0-alpine AS builder

#Change the work directory to APP
WORKDIR /app

# Copy all the content from Source repository to the work Directory
COPY . .

#Install NPM and Run a Build
RUN npm install && npm run build

#Download bass image to host our build file using ionic serve
FROM node:12.16.0-alpine

#Install the ionic serve
RUN npm install -g serve

#Change the workdir to APP
WORKDIR /app

#Copy the build folder content to workdir of build image
COPY --from=builder /app/build .
# Serve the build file 
CMD ["serve", "-p", "8080", "-s", "."]


#This could be alternate host image using nginx
#FROM nginx 

#Expose the port for host
#EXPOSE 80
#COPY --from=builder /SCHNEIDER-MVP/build /usr/share/nginx/html
