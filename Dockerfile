# Official Node.js Image
FROM node:20-alpine

# Working directory inside container
WORKDIR /app

# Copy package files
COPY backend/package*.json ./backend/

# Install dependencies
RUN cd backend && npm install

# Copy project files
COPY . .

# Expose application port
EXPOSE 3000

# Start application
CMD ["node", "backend/app.js"]