# Use Red Hat Universal Base Image (UBI) 8
FROM registry.access.redhat.com/ubi8/nodejs-18

# Switch to the app user
USER 1001

# Tell the app to listen on this port
ENV PORT=8080

# Set the working directory
WORKDIR /opt/app-root/src

# Copy package.json and package-lock.json
COPY --chown=1001:0 package*.json ./

# list files
RUN ls -lhart

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
