# docker-nginx-node
docker nginx node proxy_pass



## Dockerfile FOR CUSTOM

````
FROM node:14-alpine3.14
WORKDIR /var/www/app/
COPY package.json /var/www/app/
RUN npm install
COPY app.js /var/www/app/
CMD ["npm", "start"]
````
