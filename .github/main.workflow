workflow "Docker image" {
  on = "push"
  resolves = ["GitHub Action for Docker-1"]
}

action "GitHub Action for Docker" {
  uses = "actions/docker/cli@master"
  args = "build -t $DOCKER_IMAGE_NAME ."
  secrets = ["DOCKER_IMAGE_NAME"]
}

action "Docker Registry" {
  uses = "actions/docker/login@master"
  needs = ["GitHub Action for Docker"]
  secrets = ["DOCKER_PASSWORD", "DOCKER_USERNAME"]
}

action "GitHub Action for Docker-1" {
  uses = "actions/docker/cli@master"
  needs = ["Docker Registry"]
  secrets = ["DOCKER_IMAGE_NAME"]
  args = "push $DOCKER_IMAGE_NAME"
}