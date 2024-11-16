# Use the official Node.js image from the Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the application will run on (default is 5000)
EXPOSE 5000

# Set the environment variable for the NODE_ENV
ENV NODE_ENV=production

# Start the server
CMD ["node", "server.js"]
