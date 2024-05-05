# Use Node.js as base image
FROM node:14-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose port 3005 to the outside world
EXPOSE 3000

# Command to run the React app when the container starts
CMD ["npm", "start"]
