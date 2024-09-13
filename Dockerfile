# Build phase
FROM node:20-alpine AS build

RUN npm install -g pnpm
WORKDIR /app

# Install all dependencies for building
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# Production phase
FROM node:20-alpine
RUN npm install -g pnpm
WORKDIR /app

# Install only production dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# Copy the compiled files from the build step
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

EXPOSE 4000
CMD ["node", "dist/server.js"]
