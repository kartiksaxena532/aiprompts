1. create a docker file with the following :

FROM node:20-alpine // current node version

WORKDIR /app // app is the working directory

COPY package*.json . // * was added due to all files with name of package.json will be copied into the container

RUN npm install //for installing external packages

COPY . .  // from current dire to the working directory

EXPOSE 3000 // port number

CMD ["npm", "run" ,"dev"] // command



docker build -t welcome-to-docker .

docker run -p 3000.3000 welcome-to-docker

you can also upload the docker image to the acorn server which can help you if you update the docker image the 
hosted one will be automatically updated.

New Hosting Service aws server to be initiated with ai in backend
