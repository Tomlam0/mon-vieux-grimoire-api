# Mon Vieux Grimoire - Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-black?style=for-the-badge&logo=fastify&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3DDC84?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-00338C?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-black?style=for-the-badge&logo=zod&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)

## Description

This project is a backend for the "Mon Vieux Grimoire" application.

## Prerequisites

Before setting up the project, ensure you have the following:

- Node.js (version 20.x or higher (LTS))
- pnpm (package manager)
- PostgreSQL
- Prisma CLI
- An AWS account with access to S3 (for storing book images)

## Project Structure

```bash
├── api/                         # Contains file for serverless functions for connecting to Vercel.
├── prisma/                      # Contains Prisma files, such as schemas and seed scripts.
├── src/
│   ├── config/                  # Configuration, such as CORS and environment variables.
│   ├── constants/               # Contains common constants used across the application.
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

# Check the codebase for linting errors using ESLint
pnpm lint

# Fix linting errors in the codebase using ESLint
pnpm lint:fix

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
 "paths":
   "@/*": ["*"],
   "@config/*": ["config/*"],
   "@constants/*": ["constants/*"],
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

![Prisma](https://img.shields.io/badge/Prisma-3DDC84?style=for-the-badge&logo=prisma&logoColor=white)

1. Generate Prisma Client:

To generate the Prisma client based on the schema with package.json scripts

```bash
pnpm prisma:generate:dev
```

2. Migrate Schema:

Use the following command to apply the schema changes to the database

```bash
pnpm prisma:migrate:dev
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

For more granular control and advanced features, it is recommended to use a specific DB UI.

## Setting Up AWS S3 for Storing Book Images

![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)

1. Create an S3 Bucket:

Log in to your AWS console, go to S3, and create a new S3 bucket to store your files.  
Take note of the bucket name and region (e.g., eu-west-3 for Paris).

2. Create an IAM User:

Go to the AWS IAM console, create a new IAM user specifically for your project.  
This user should have the `AmazonS3FullAccess` permission, or you can create a custom policy that provides the necessary permissions for accessing your S3 bucket.

3. Create Access Keys:

After creating the IAM user, generate a set of access keys for programmatic access to AWS services, including S3.

## Swagger api documentation endpoint

![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)

http://localhost:4000/api/docs

## Contact

For any questions, please contact contact@thomas-lambert-dev.com.
