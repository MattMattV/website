workflow "Docker image" {
  on = "push"
  resolves = ["GitHub Action for Docker"]
}

action "GitHub Action for Docker" {
  uses = "actions/docker/cli@master"
  args = "build -t $DOCKER_IMAGE_NAME ."
  secrets = ["DOCKER_IMAGE_NAME"]
}

action "Docker Login" {
  uses = "actions/docker/login@master"
  needs = ["GitHub Action for Docker"]
  secrets = ["DOCKER_USERNAME", "DOCKER_PASSWORD"]
}

action "GitHub Action for Docker-1" {
  uses = "actions/docker/cli@master"
  needs = ["Docker Login"]
  args = "push $DOCKER_IMAGE_NAME"
  secrets = ["DOCKER_IMAGE_NAME"]
}