# Cloud Native Tax Calculator Final Project

This submission implements the JavaScript lab option and covers the Part A
planning brief plus all ten criteria in the final project overview.

## Run locally

```sh
npm install
npm test
npm start
```

Open `http://localhost:8080` and verify `http://localhost:8080/health`.

## Docker

```sh
docker build -t tax-calculator:latest .
docker run --rm -p 8080:80 tax-calculator:latest
```

## IBM Cloud Container Registry and Code Engine

Replace `REGION`, `RESOURCE_GROUP`, and `YOUR_NAMESPACE`.

```sh
ibmcloud login
ibmcloud target -g RESOURCE_GROUP
ibmcloud plugin install container-registry
ibmcloud plugin install code-engine
ibmcloud cr region-set REGION
ibmcloud cr login
ibmcloud cr namespace-add YOUR_NAMESPACE

docker tag tax-calculator:latest REGION.icr.io/YOUR_NAMESPACE/tax-calculator:latest
docker push REGION.icr.io/YOUR_NAMESPACE/tax-calculator:latest

ibmcloud ce project create --name tax-calculator-project
ibmcloud ce project select --name tax-calculator-project
ibmcloud ce application create --name tax-calculator \
  --image REGION.icr.io/YOUR_NAMESPACE/tax-calculator:latest \
  --port 8080
ibmcloud ce application get --name tax-calculator
```

## Tekton

Install the catalog `git-clone` task, apply the supplied resources, then run:

```sh
kubectl apply -f tekton/tasks.yaml
kubectl apply -f tekton/pipeline.yaml
kubectl create -f tekton/run.yaml
tkn pipelinerun logs --last -f
```

Before running, replace placeholders in `tekton/run.yaml` and configure
registry authentication plus IBM Cloud credentials in the pipeline environment.

## Grading criteria map

| # | Criterion | Evidence/artifact |
|---|---|---|
| 1 | Run unit tests using Jasmine | `spec/taxSpec.js`, `npx jasmine` |
| 2 | Create Dockerfile | `Dockerfile` |
| 3 | Build Docker image | `docker build -t tax-calculator:latest .` |
| 4 | Deploy/test local container | `docker run`, `docker ps` |
| 5 | Tag/push to IBM Cloud Registry | IBM Cloud commands above |
| 6 | Deploy on IBM Cloud | `ibm-cloud/code-engine.yaml`, Code Engine commands |
| 7 | Create Tekton tasks | `tekton/tasks.yaml` |
| 8 | Extend pipeline to call tasks | `tekton/pipeline.yaml` |
| 9 | Run Tekton pipeline | `tekton/run.yaml` |
| 10 | Deploy image built by pipeline | Pipeline build output |

## Submission evidence

Capture terminal output or screenshots for each runtime-dependent criterion:

1. Passing `npm test` output.
2. Successful `docker build` output.
3. Running container and loaded application.
4. Registry image listing after push.
5. Code Engine application URL and loaded application.
6. Successful Tekton PipelineRun task list/logs.

The IBM Cloud deployment and pipeline run require your IBM Cloud account,
namespace, credentials, and a hosted Git repository.
