#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

# Run Prisma migrations
echo "Applying database migrations..."
# Assuming prisma is a dev dependency, npx is a good way to run it
# Adjust the path to prisma CLI if needed, or use yarn workspace command
# Explicitly point to the schema location within the /app directory structure
npx prisma migrate deploy --schema=/app/backend/prisma/schema.prisma

# Start the application
echo "Starting the application..."
exec node backend/dist/main.js
