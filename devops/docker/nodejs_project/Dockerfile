FROM node:latest

WORKDIR /usr/src/app
#setting working directory

COPY package*.json ./
#copy package files

RUN npm install	#while working in devlopment env
#RUN npm ci --only=production working in production env

COPY . . 
#copying all files available in current directory

EXPOSE 3000
#expose server - keep same as used in server.js
#it's only documenting , it's not going to map/expose that port

CMD [ "node" , "server.js" ]



