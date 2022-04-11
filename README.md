# docker-nginx-node
docker nginx node proxy_pass


## clone repo

````
git clone https://github.com/wachira90/docker-nginx-node.git
cd docker-nginx-node/
````

## start
````
docker-compose up -d && docker-compose logs -f
````

## result

proxy_pass from nodejs:5000 to nginx:9001

````
http://localhost:9001/
````

## custom nginx config

````
./config_nginx/default.conf

````

## Dockerfile for custom node

````
FROM node:14-alpine3.14
WORKDIR /var/www/app/
COPY package.json /var/www/app/
RUN npm install
COPY app.js /var/www/app/
CMD ["npm", "start"]
````
