terraform {
  required_providers {
    render = {
      source  = "render-oss/render"
      version = "1.1.0"
    }
  }
}

provider "render" {
  api_key = var.RENDER_API_KEY
  owner_id = var.RENDER_OWNER_ID
}

resource "render_web_service" "mon-vieux-grimoire-api" {
  name               = "mon-vieux-grimoire-api"
  // Since starter is the lowest option you need to switch to 'free' in Render directly after hosting
  plan               = "starter" 
  region             = "frankfurt"

# Using Docker
  runtime_source = {
    docker = {
      repo_url        = "https://github.com/Tomlam0/mon-vieux-grimoire-api"
      branch          = "main"
      dockerfile_path = "./Dockerfile"
    }
  }

  env_vars = {
    NODE_ENV = { value = "production" }

    HOST = { value = var.HOST }

    DATABASE_URL = { value = var.DATABASE_URL }

    ORIGIN = { value = "https://mon-vieux-grimoire-livres.vercel.app" }
    CREDENTIALS = { value = true }

    JWT_SECRET_KEY = { value = var.JWT_SECRET_KEY }
    COOKIE_SECRET = { value = var.COOKIE_SECRET }

    GOOGLE_CLIENT_ID = { value = var.GOOGLE_CLIENT_ID }
    GOOGLE_CLIENT_SECRET = { value = var.GOOGLE_CLIENT_SECRET }

    AWS_REGION = { value = "eu-west-3" }
    AWS_BUCKET_NAME = { value = var.AWS_BUCKET_NAME }
    AWS_ACCESS_KEY_ID = { value = var.AWS_ACCESS_KEY_ID }
    AWS_SECRET_ACCESS_KEY = { value = var.AWS_SECRET_ACCESS_KEY }

    ENABLE_SWAGGER = { value = false }
  }
}

variable "RENDER_API_KEY" {
  type = string
}
variable "RENDER_OWNER_ID" {
  type = string
}

variable "DATABASE_URL" {
  type = string
}

variable "HOST" {
  type = string
}

variable "JWT_SECRET_KEY" {
  type = string
}
variable "COOKIE_SECRET" {
  type = string
}

variable "GOOGLE_CLIENT_ID" {
  type = string
}
variable "GOOGLE_CLIENT_SECRET" {
  type = string
}

variable "AWS_BUCKET_NAME" {
  type = string
}
variable "AWS_ACCESS_KEY_ID" {
  type = string
}
variable "AWS_SECRET_ACCESS_KEY" {
  type = string
}
