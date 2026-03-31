FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies exclusively (avoids devDependencies in prod later if we want)
RUN npm install

# Copy application source code
COPY . .

# Expose backend port
EXPOSE 5001

# Command to run the application
CMD [ "npm", "start" ]
