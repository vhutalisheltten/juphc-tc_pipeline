# Final Project Part A: Epic and User Stories

## Epic

**Title:** Modernise Tax Calculator

**Description:**  
The Tax Calculator currently runs as a manually deployed static application and
lacks a robust delivery pipeline. Modernise the application by containerising it,
deploying it to IBM Cloud Code Engine, and managing delivery through a Tekton
pipeline that runs all unit tests before packaging and deployment.

**Business value:**  
Users receive reliable releases faster, while the team gains repeatable builds,
automated quality checks, and scalable cloud hosting.

**Definition of done:**

- The application runs in a Docker container.
- Jasmine unit tests run and pass before an image is built.
- The image is stored in IBM Cloud Container Registry.
- IBM Cloud Code Engine serves the application.
- A Tekton pipeline automates test, build, and deployment.

## User Story 1: Containerise the application

**As a** developer,  
**I want** unit tests to run before the application is packaged in a Docker image,  
**so that** only tested code is deployed in a consistent environment.

**Acceptance criteria:**

- `npm test` runs the Jasmine test suite.
- A failed test stops the delivery process.
- The Dockerfile builds a runnable image.
- The container exposes the application on port `8080`.

## User Story 2: Deploy on IBM Cloud

**As an** operations engineer,  
**I want** the containerised application deployed on IBM Cloud Code Engine,  
**so that** it is scalable and does not depend on self-managed virtual machines.

**Acceptance criteria:**

- The image is tagged and pushed to IBM Cloud Container Registry.
- A Code Engine application is created from the registry image.
- The public application URL loads the Tax Calculator.
- A health endpoint returns a successful response.

## User Story 3: Create a packaging and deployment pipeline

**As a** delivery team member,  
**I want** a Tekton pipeline to automate testing, packaging, and deployment,  
**so that** releases are repeatable and require fewer manual steps.

**Acceptance criteria:**

- Tekton tasks exist for tests, image build/push, and deployment.
- The pipeline runs tasks in the order: test, build/push, deploy.
- Deployment does not run when tests or image build fail.
- A PipelineRun can be started with configurable repository and image values.

