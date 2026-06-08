# Final Project Submission Answers

Use this sheet after selecting **Begin**. Replace every placeholder URL with your
actual GitHub, IBM Cloud Registry, Code Engine, or pipeline URL.

## 1. Run unit tests using Jasmine

**Relevant file:** `spec/taxSpec.js`

**Command:**

```sh
npm test
```

**Verified terminal output:**

```text
Started
.....

5 specs, 0 failures
Finished in 0.065 seconds
```

**GitHub URL:**  
`https://github.com/vhutalisheltten/juphc-tc_pipeline/blob/main/spec/taxSpec.js`

**Evidence to upload:** Screenshot of the passing Jasmine terminal output.

## 2. Create the Dockerfile

**Relevant file:** `Dockerfile`

```dockerfile
FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json server.js ./
COPY public ./public
USER node
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/health || exit 1
CMD ["node", "server.js"]
```

**GitHub URL:**  
`https://github.com/vhutalisheltten/juphc-tc_pipeline/blob/main/Dockerfile`

## 3. Build the Docker image

**Command:**

```sh
docker build -t tax-calculator:latest .
docker images tax-calculator
```

**Evidence to upload:** Screenshot showing the successful build and image list.

## 4. Deploy and test in a local Docker container

**Commands:**

```sh
docker run --rm -p 8080:8080 --name tax-calculator tax-calculator:latest
curl http://localhost:8080/health
```

**Expected health response:**

```json
{"status":"ok"}
```

**Evidence to upload:** Screenshot of `http://localhost:8080` and the health
response.

## 5. Tag and push to IBM Cloud Registry

**Commands:**

```sh
ibmcloud cr login
docker tag tax-calculator:latest REGION.icr.io/YOUR_NAMESPACE/tax-calculator:latest
docker push REGION.icr.io/YOUR_NAMESPACE/tax-calculator:latest
ibmcloud cr images
```

**Registry image URL:**  
`REGION.icr.io/YOUR_NAMESPACE/tax-calculator:latest`

**Evidence to upload:** Screenshot of the successful push and `ibmcloud cr images`.

## 6. Deploy the Tax Calculator on IBM Cloud

**Relevant file:** `ibm-cloud/code-engine.yaml`

**Commands:**

```sh
ibmcloud ce project create --name tax-calculator-project
ibmcloud ce project select --name tax-calculator-project
ibmcloud ce application create --name tax-calculator \
  --image REGION.icr.io/YOUR_NAMESPACE/tax-calculator:latest \
  --port 8080
ibmcloud ce application get --name tax-calculator
```

**Deployed application URL:**  
`https://YOUR_CODE_ENGINE_URL`

**Evidence to upload:** Screenshot of the deployed Tax Calculator in the browser.

## 7. Create the Tekton Pipeline tasks

**Relevant file:** `tekton/tasks.yaml`

The file defines three tasks:

- `jasmine-test`
- `build-and-push`
- `deploy-code-engine`

**GitHub URL:**  
`https://github.com/vhutalisheltten/juphc-tc_pipeline/blob/main/tekton/tasks.yaml`

## 8. Extend the Pipeline to call required tasks

**Relevant file:** `tekton/pipeline.yaml`

The pipeline calls tasks in this order:

```text
clone -> test -> build-push -> deploy
```

Each task uses `runAfter`, so a failure prevents later stages from running.

**GitHub URL:**  
`https://github.com/vhutalisheltten/juphc-tc_pipeline/blob/main/tekton/pipeline.yaml`

## 9. Run the Tekton pipeline

**Relevant file:** `tekton/pipelinerun.yaml`

**Commands:**

```sh
kubectl apply -f tekton/tasks.yaml
kubectl apply -f tekton/pipeline.yaml
kubectl create -f tekton/pipelinerun.yaml
tkn pipelinerun logs --last -f
tkn pipelinerun list
```

**Evidence to upload:** Screenshot showing a successful PipelineRun and all tasks.

## 10. Deploy the image built using pipeline

The final `deploy-code-engine` task updates the Code Engine application using the
same image produced by the `build-and-push` task.

**Relevant files:**

- `tekton/tasks.yaml`
- `tekton/pipeline.yaml`

**Evidence to upload:** Screenshot of the successful deploy task plus the updated
application running at the Code Engine URL.

## Final Submission Checklist

- Replace every `YOUR_NAMESPACE`, `REGION`, and cloud URL placeholder.
- Push the complete project to GitHub.
- Capture the six runtime screenshots listed above.
- Ensure each uploaded screenshot clearly shows the command and successful output.
- Submit answers for all ten questions, then select **Submit assignment**.
