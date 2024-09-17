# Build phase
FROM node:20-alpine AS build

WORKDIR /app

# Install all dependencies for building
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# Production phase
FROM node:20-alpine
WORKDIR /app
RUN npm install -g pnpm

# Install only production dependencies
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN pnpm install --prod --frozen-lockfile

# Copy the compiled files from the build step
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

EXPOSE 4000
CMD ["node", "dist/src/server.js"]
