# 1. Base Image
FROM node:22-alpine AS base

# Set working directory
WORKDIR /app

# 2. Dependencies
FROM base AS deps
# Copy root package.json and yarn.lock
COPY package.json yarn.lock ./
# Copy tsconfig.base.json as it might be needed for workspace setup
COPY tsconfig.base.json ./

# Copy backend package.json to leverage Docker cache for backend-specific deps
COPY backend/package.json ./backend/package.json
# Copy frontend package.json for full workspace context if needed by yarn install
COPY frontend/package.json ./frontend/package.json
# Copy the yarn workspace config
COPY common ./common
# Copy the Prisma schema for the backend, as it's needed for 'prisma generate' during install
COPY backend/prisma ./backend/prisma


# Install all dependencies using Yarn workspaces
# This will also trigger the postinstall script: "yarn workspace backend prisma generate"
RUN yarn install --frozen-lockfile --network-timeout 100000

# 3. Build
FROM base AS build
WORKDIR /app

# Copy necessary artifacts from the build stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/yarn.lock ./yarn.lock
COPY --from=deps /app/tsconfig.base.json ./tsconfig.base.json
COPY --from=deps /app/backend ./backend
COPY --from=deps /app/frontend ./frontend 
COPY --from=deps /app/common ./common

COPY . .
# Build the backend application
RUN yarn workspace common build
RUN yarn workspace backend build

# 4. Runner
FROM node:22-alpine AS runner
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy necessary artifacts from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/yarn.lock ./yarn.lock
COPY --from=build /app/backend/package.json ./backend/package.json
COPY --from=build /app/backend/dist ./backend/dist

COPY --from=build /app/common/package.json ./common/package.json
COPY --from=build /app/common/dist ./common/dist

# Copy the entire prisma directory (schema and migrations) from the build stage
# This is crucial for `prisma migrate deploy` to work in the entrypoint script.
COPY --from=build /app/backend/prisma ./backend/prisma

# Copy the entrypoint script from the backend directory
COPY backend/entrypoint.sh /app/backend/entrypoint.sh
# Make the entrypoint script executable
RUN chmod +x /app/backend/entrypoint.sh

# Expose port (default NestJS port is 3000, update if different)
EXPOSE 3000

# Set the entrypoint script
ENTRYPOINT ["/app/backend/entrypoint.sh"]
# The CMD is now effectively handled by the exec line in entrypoint.sh
# If entrypoint.sh didn't have `exec node backend/dist/main.js`, 
# you would keep CMD ["node", "backend/dist/main.js"] or similar here.
# For this setup, an empty CMD or omitting it is also fine as entrypoint.sh uses exec.
CMD []
