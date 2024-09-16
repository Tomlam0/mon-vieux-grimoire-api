terraform {
  required_providers {
    render = {
      source  = "render-oss/render"
      version = "1.1.0"
    }
  }
}

provider "render" {
 # Configuration options
}

resource "render_web_service" "mon-vieux-grimoire-api" {
  name               = "mon-vieux-grimoire-api"
  plan               = "starter"
  region             = "frankfurt"

# Using Docker
  runtime_source = {
    docker = {
      dockerfile_path = "./Dockerfile"
    }
  }
}
