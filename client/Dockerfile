FROM node:alpine3.11

WORKDIR /app

COPY package.json .
COPY . .

ENV PATH /app/node_modules/.bin:$PATH  

RUN npm install

CMD ["npm","start"]