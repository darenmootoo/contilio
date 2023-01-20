# Use a Node.js runtime as the base image
FROM node:14-alpine

# Create a directory for the app
RUN mkdir -p /usr/src/app

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the app
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]