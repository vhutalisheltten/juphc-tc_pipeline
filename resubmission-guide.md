# Corrected Resubmission Guide

Repository: `https://github.com/vhutalisheltten/juphc-tc_pipeline`

## Ready after the GitHub Actions verification succeeds

1. Paste the contents of `evidence/01-jasmine-tests-passing`.
2. Paste the contents of `evidence/02-dockerfile`.
3. Download the `terminal-evidence` artifact from the latest GitHub Actions run
   and paste `03-docker-build-output`.
4. From the same artifact, paste `04-docker-image`.
7. Submit:
   `https://github.com/vhutalisheltten/juphc-tc_pipeline/blob/main/tekton/tasks.yaml`
8. Submit:
   `https://github.com/vhutalisheltten/juphc-tc_pipeline/blob/main/tekton/pipeline.yaml`
9. Submit:
   `https://github.com/vhutalisheltten/juphc-tc_pipeline/blob/main/tekton/run.yaml`

## Requires your IBM Cloud account

5. Push the image to IBM Cloud Registry and paste the real terminal output.
6. Deploy it to Code Engine and paste the real `ibmcloud ce application get`
   output.
10. Upload a real screenshot of the deployed image built by the pipeline.

Do not submit command examples for Tasks 3-6. The grader requires actual terminal
output.
