# Mon Vieux Grimoire API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-black?style=for-the-badge&logo=fastify&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-black?style=for-the-badge&logo=zod&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3DDC84?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-00338C?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)

## Description

This project is a backend for the "Mon Vieux Grimoire" application.

## Prerequisites

Before setting up the project, ensure you have the following:

- Node.js (version 20.x or higher (LTS))
- pnpm (package manager)
- PostgreSQL
- Prisma CLI
- An AWS account with access to S3 (for storing book images)
- Docker CLI
- Terraform CLI (for infrastructure as code, managing cloud deployments)

## Project Structure

```bash
├── .github/                     # Contains GitHub Actions workflows for CI/CD.
├── doc/                         # Documentation files, including API specs, request collections, and guides.
├── prisma/                      # Contains Prisma files, such as schemas and seed scripts.
├── src/
│   ├── config/                  # Configuration, such as CORS and environment variables.
│   ├── constants/               # Contains common constants used across the application.
│   ├── controllers/             # Contains controllers to handle requests and business logic.
│   ├── lib/                     # Contains modules used in the application.
│   ├── plugins/                 # Plugins to extend Fastify's functionality.
│   ├── routes/                  # Defines the application's routes.
│   ├── schema/                  # Contains Zod schemas for request validation and typing.
│   ├── types/                   # TypeScript type definitions for the application.
```

## Scripts

```bash
# Start the server in development mode with Nodemon
pnpm dev

# Compile TypeScript to JavaScript
pnpm build

# Start the server in production mode
pnpm start

# Run Prisma migrations and start the server in production mode (useful in Dockerfile)
pnpm start:prod

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
 "baseUrl": ".",
 "paths":
   "@/*": ["src/*"],
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

## Prisma and Database

![Prisma](https://img.shields.io/badge/Prisma-3DDC84?style=for-the-badge&logo=prisma&logoColor=white)

1. Generate Prisma Client:

To generate the Prisma client based on the schema with package.json scripts

```bash
pnpm prisma:generate:dev
```

2. Migrate Schema (Dev):

Use the following command to apply the schema changes to the dev database and generate migration files

```bash
pnpm prisma:migrate:dev
```

3. Migrate Schema (Prod):

After generating the migration files in development, apply them to the production database

```bash
pnpm prisma:migrate:prod
```

4. Start the server:

To generate the Prisma client based on the schema with package.json scripts

```bash
pnpm dev
```

## How to Use the HTTP Request Collection

1. **Import the collection**:
   - Open your preferred HTTP client (e.g., Thunder Client, Postman).
   - Import the provided `json` file located in the `doc/` folder.
2. **Configure environment variables**:
   - Ensure you set up environment variables in your HTTP client to run the requests successfully.

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

## GitHub Actions Environment Variables

To securely manage sensitive information, we use GitHub Secrets to store environment variables.  
The following environment variables are required for the Render deployment:

- `RENDER_API_KEY`: Your Render api key.
- `RENDER_OWNER_ID`: Your Render organization ID.

You can obtain `RENDER_OWNER_ID` in your Render dashboard url.
To obtain the `RENDER_API_KEY`, follow these steps:

1. Log in to your Render account.
2. Navigate to the Settings > API Keys
3. Click on the "Create Token" button.
4. Enter a name for your token and click "Create".

### Adding Secrets to GitHub

1. Navigate to your GitHub repository.
2. Click on **Settings**.
3. In the **Security** section, select **Secrets and variables**.
4. Click **New repository secret**.
5. Add the following secrets:
   - `RENDER_API_KEY`
   - `RENDER_OWNER_ID`
   - `DATABASE_URL`
   - `HOST`
   - `JWT_SECRET_KEY`
   - `COOKIE_SECRET`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_FROM`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `AWS_BUCKET_NAME`
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

## GitHub Actions Workflow

The GitHub Actions workflow need to be defined in a YAML file (e.g., `.github/workflows/terraform.yml`).  
This workflow automates the deployment process by running Terraform commands when changes are pushed to the `main` branch.  
It ensures that any infrastructure changes are automatically applied to the Render service using Terraform, keeping the deployment process smooth and consistent.

Terraform within the workflow uses Docker.  
By leveraging Docker, the setup is streamlined, avoiding conflicts with local installations.

### Workflow Configuration to deploy

Create a new file in your repository at `.github/workflows/terraform.yml` and add the following configuration:

```yaml
name: Deploy API to Render with Terraform

on:
  push:
    branches:
      - main

jobs:
  terraform:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v3

      - name: Create terraform.tfvars
        run: |
          cat > terraform.tfvars <<EOF
          RENDER_API_KEY = "${{ secrets.RENDER_API_KEY }}"
          RENDER_OWNER_ID = "${{ secrets.RENDER_OWNER_ID }}"
          DATABASE_URL = "${{ secrets.DATABASE_URL }}"
          HOST = "${{ secrets.HOST }}"
          JWT_SECRET_KEY = "${{ secrets.JWT_SECRET_KEY }}"
          COOKIE_SECRET = "${{ secrets.COOKIE_SECRET }}"
          SMTP_HOST = "${{ secrets.SMTP_HOST }}"
          SMTP_PORT = "${{ secrets.SMTP_PORT }}"
          SMTP_FROM = "${{ secrets.SMTP_FROM }}"
          SMTP_USER = "${{ secrets.SMTP_USER }}"
          SMTP_PASS = "${{ secrets.SMTP_PASS }}"
          GOOGLE_CLIENT_ID = "${{ secrets.GOOGLE_CLIENT_ID }}"
          GOOGLE_CLIENT_SECRET = "${{ secrets.GOOGLE_CLIENT_SECRET }}"
          AWS_BUCKET_NAME = "${{ secrets.AWS_BUCKET_NAME }}"
          AWS_ACCESS_KEY_ID = "${{ secrets.AWS_ACCESS_KEY_ID }}"
          AWS_SECRET_ACCESS_KEY = "${{ secrets.AWS_SECRET_ACCESS_KEY }}"
          EOF

      - name: Terraform Init
        run: terraform init

      - name: Terraform Import
        run: terraform import render_web_service.mon-vieux-grimoire-api srv-crklp508fa8c738gmamg

      - name: Terraform Plan
        run: terraform plan -var-file=terraform.tfvars

      - name: Terraform Apply
        run: terraform apply -var-file=terraform.tfvars -auto-approve

      - name: Clean up tfvars
        run: rm -f terraform.tfvars
```

## Swagger api documentation

![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)

This project leverages Zod for schema validation and uses these schemas, along with route files, to define the OpenAPI documentation.  
The Zod schemas ensure that the request and response data structures are correctly validated and documented, providing a clear and accurate API specification.

http://localhost:4000/api/docs

## Contact

For any questions, please contact contact@thomas-lambert-dev.com.
