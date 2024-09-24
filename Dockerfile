# Build phase
FROM node:20-alpine AS build
WORKDIR /app

# Install all dependencies for building
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN npm i -g pnpm && pnpm i --frozen-lockfile
COPY . .
RUN pnpm prisma:generate:prod && pnpm build

# Production phase
FROM node:20-alpine
WORKDIR /app
RUN npm i -g pnpm

# Install only production dependencies
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN pnpm i --prod --frozen-lockfile

# Copy the compiled files from the build step
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/tsconfig-paths-bootstrap.js ./tsconfig-paths-bootstrap.js

EXPOSE 4000
CMD ["pnpm", "run", "start:prod"]
