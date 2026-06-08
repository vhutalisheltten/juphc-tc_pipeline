# Corrected Resubmission Guide

Repository: `https://github.com/vhutalisheltten/juphc-tc_pipeline`

## Ready after the GitHub Actions verification succeeds

1. Paste the contents of `evidence/01-jasmine-tests-passing`.
2. Paste the contents of `evidence/02-dockerfile`.
3. Paste the contents of `evidence/03-docker-build-output`.
4. Paste the contents of `evidence/04-docker-image`.
7. Submit:
   `https://github.com/vhutalisheltten/juphc-tc_pipeline/blob/main/tasks.yaml`
8. Submit:
   `https://github.com/vhutalisheltten/juphc-tc_pipeline/blob/main/pipeline.yaml`
9. Submit:
   `https://github.com/vhutalisheltten/juphc-tc_pipeline/blob/main/run.yaml`

## Requires your IBM Cloud account

5. Push the image to IBM Cloud Registry and paste the real terminal output.
6. Deploy it to Code Engine and paste the real `ibmcloud ce application get`
   output.
10. Upload a real screenshot of the deployed image built by the pipeline.

Do not submit command examples for Tasks 3-6. The grader requires actual terminal
output.
