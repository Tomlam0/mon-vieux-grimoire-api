# Mon Vieux Grimoire - Backend

![Node.js](https://img.shields.io/badge/Node.js-%20-339933?style=for-the-badge&logo=node.js)
![Fastify](https://img.shields.io/badge/Fastify-%20-black?style=for-the-badge&logo=fastify)
![TypeScript](https://img.shields.io/badge/TypeScript-%20-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-%20-3DDC84?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%2300338C.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-%20-76D04B?style=for-the-badge&logo=nodemon)
![Zod](https://img.shields.io/badge/Zod-%20-black?style=for-the-badge&logo=zod)
![Swagger](https://img.shields.io/badge/Swagger-%20-85EA2D?style=for-the-badge&logo=swagger)

## Description

This project is a backend for the "Mon Vieux Grimoire" application.

## Prerequisites

- Node.js (version 20.x or higher)
- MongoDB (a MongoDB Atlas instance is recommended)
- PNPM (package manager)
- Prisma CLI

## Project Structure

```bash
├── api/                         # Contains file for serverless functions for connecting to Vercel.
├── prisma/                      # Contains Prisma files, such as schemas and seed scripts.
├── src/
│   ├── config/                  # Configuration, such as CORS and environment variables.
│   ├── controllers/             # Contains controllers to handle requests and business logic.
│   ├── lib/                     # Contains modules used in the application like Prisma client.
│   ├── plugins/                 # Plugins to extend Fastify's functionality.
│   ├── routes/                  # Defines the application's routes.
│   ├── schema/                  # Contains Zod schemas for request validation and typing.
│   ├── types/                   # TypeScript type definitions for the application.
```

## Scripts

```bash
# Start the server in development mode with Nodemon
pnpm dev

# Start the server in production mode
pnpm start

# Compile TypeScript to JavaScript
pnpm build

# Format the codebase using Prettier settings
pnpm format

# Check if the codebase is formatted according to Prettier rules
pnpm format:check

# Generate the Prisma client for development
pnpm prisma:generate:dev

# Run Prisma migrations for development
pnpm prisma:migrate:dev

# Push the Prisma schema state to the database for development
pnpm prisma:push:dev

# Seed the database for development
pnpm prisma:seed:dev

# Reset the database for development
pnpm prisma:reset:dev

# Open Prisma Studio for development
pnpm prisma:studio:dev

# Update Prisma client and push schema for development
pnpm prisma:update:dev

# Generate the Prisma client for production
pnpm prisma:generate:prod

# Run Prisma migrations for production
pnpm prisma:migrate:prod

# Push the Prisma schema state to the database for production
pnpm prisma:push:prod

# Seed the database for production
pnpm prisma:seed:prod

# Open Prisma Studio for production
pnpm prisma:studio:prod
```

## Import Aliases

This project uses import aliases for easier module resolution.  
The aliases are defined in the tsconfig.json file as follows:

```bash
 "baseUrl": "./src",
 "paths": {
   "@/*": ["*"],
   "@config/*": ["config/*"],
   "@controllers/*": ["controllers/*"],
   "@lib/*": ["lib/*"],
   "@plugins/*": ["plugins/*"],
   "@routes/*": ["routes/*"],
   "@schema/*": ["schema/*"],
   "@types/*": ["types/*"]
```

These aliases allow you to import modules using the @ prefix instead of relative paths.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tomlam0/mon-vieux-grimoire-api.git
   cd mon-vieux-grimoire-backend
   ```

2. Install the dependencies:

   ```bash
   pnpm i
   ```

3. Create env files

Create the env files for dev and prod

```bash
.env.development
.env.production
```

The application requires all the environment variables in the .env.example file

## Usage

1. Generate Prisma Client:

To generate the Prisma client based on the schema with package.json scripts

```bash
pnpm prisma:generate:dev
```

2. Apply Schema Changes to the Database:

Since migrations are not available for MongoDB, use the following command to apply the schema changes to the database

```bash
pnpm prisma:push:dev
```

3. Start the server:

To generate the Prisma client based on the schema with package.json scripts

```bash
pnpm dev
```

3. Use Prisma Studio:

Prisma Studio is a visual editor for your database.  
It allows you to view and edit the data in your database with a user-friendly interface.  
This is particularly useful for debugging and managing your data during development.

```bash
pnpm prisma:studio:dev
```

For more granular control and advanced features, it is recommended to use MongoDB Compass.

## Swagger api documentation endpoint

http://localhost:3000/api/docs
