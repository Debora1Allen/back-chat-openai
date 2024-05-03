# Use Node.js LTS as the base image
FROM node:lts-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which the Next.js application will run
EXPOSE 3000

# Start the Next.js application in development mode
CMD ["npm", "run", "dev"]
