#base image for build structure
# first stage of building angular image
FROM node:alpine as build-stage

# create folder inside image (-p :  if folder exists)
RUN mkdir -p /app
# point directory
WORKDIR /app
# copy package to the app folder
COPY  package.json /app/

# inside image run this cmd :
RUN npm install

# copy from local to app
COPY . /app/
# builad angular production bundle
RUN npm run build --prod

# final stage 
FROM nginx:alpine
# copy file from build image    ...bookingfrontend to  /usr/share/nginx/html

 
COPY --from=build-stage /app/dist/booking-front-end /usr/share/nginx/html



