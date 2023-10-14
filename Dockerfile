# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 to the outside
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
