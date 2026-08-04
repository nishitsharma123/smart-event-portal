FROM node:20-alpine

WORKDIR /app

COPY backend/package*.json ./backend/

WORKDIR /app/backend

RUN npm install

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["node", "backend/app.js"]