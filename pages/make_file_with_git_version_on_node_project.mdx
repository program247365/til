---
title: "Using Git Version on a Node Project in a Makefile for Docker Build"
date: 2021-06-21
tag: make nodejs git docker
---

```make
IMAGE ?= "<YOURIMAGENAMEHERE>"

# This will output something similar to `git describe --always --long`.
# This is being done because we need the build to happen before we are able to reliably tag a commit (due to squash and merge).
VERSION ?= "v$(shell node -e 'console.log(require("./package.json").version)')-g$(shell git rev-parse --short HEAD)"

.PHONY: docker-build
docker-build:
	docker build -t $(IMAGE):$(VERSION) .
```
