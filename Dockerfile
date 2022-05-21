FROM node:latest

COPY . .

EXPOSE 8080

RUN npm install --production

CMD ["node","server/app.js"]