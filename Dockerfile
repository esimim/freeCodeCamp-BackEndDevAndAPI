# Use Red Hat Universal Base Image (UBI) 8
FROM registry.access.redhat.com/ubi8/nodejs-18

# Create an app user
RUN useradd -m app

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Change ownership of the /app directory to the app user
RUN chown -R app:app /app

# Switch to the app user
USER app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY --chown=app:app . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
