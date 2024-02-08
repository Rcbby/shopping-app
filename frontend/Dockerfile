FROM node:20.5.1

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

ENV PROXY_API=http://localhost:8080/todolist

CMD ["npm", "start"]