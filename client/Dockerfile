# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Production Stage (Nginx)
FROM nginx:alpine

# Copy the built Vite assets to Nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration if required (SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose standard web port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
