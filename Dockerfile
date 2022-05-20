FROM node:latest

COPY . .

EXPOSE 8080

RUN npm install --production

CMD ["node","Server/server.js"]