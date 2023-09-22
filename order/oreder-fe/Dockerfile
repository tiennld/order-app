# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the React application
RUN npm run build

# Expose the port your application will run on (you may need to change this)
EXPOSE 3000

# Command to start your application
CMD ["npm", "run","dev"]
