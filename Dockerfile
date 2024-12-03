# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port Vite will run on (default is 5173)
EXPOSE 3000

# Command to run the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
