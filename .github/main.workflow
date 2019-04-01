workflow "Build, lint and test" {
  on = "push"
  resolves = [
    "Build project",
    "Lint project"
  ]
}

action "Don't skip CI" {
  uses = "ffflorian/actions/last_commit@master"
  args = "^(?:(?!\\[(ci skip|skip ci)\\]).)*$"
}

action "Install dependencies" {
  uses = "docker://node:10-slim"
  needs = "Don't skip CI"
  runs = "yarn"
}

action "Build project" {
  uses = "docker://node:10-slim"
  needs = "Install dependencies"
  runs = "yarn"
  args = "dist"
}

action "Lint project" {
  uses = "docker://node:10-slim"
  needs = "Install dependencies"
  runs = "yarn"
  args = "lint"
}
