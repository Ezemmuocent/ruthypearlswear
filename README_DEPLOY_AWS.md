# AWS Deploy (Elastic Beanstalk)

This project is prepared for containerized deployment to AWS Elastic Beanstalk using the included Dockerfile and GitHub Actions workflow.

What I added:
- `Dockerfile` — multi-stage build for Next.js
- `.dockerignore`
- `.github/workflows/deploy-to-eb.yml` — CI workflow that builds and uploads a source bundle to Elastic Beanstalk


Prerequisites (on AWS):
- IAM credentials with permissions to manage S3 and Elastic Beanstalk (recommended: scoped to the application and bucket you'll create)

Required GitHub repository secrets (Settings → Secrets → Actions):
- `AWS_ACCESS_KEY_ID` — IAM key with permissions for EB and S3
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` — e.g. `us-east-1`
- `EB_APP_NAME` — Elastic Beanstalk application name to create/use
- `EB_ENV_NAME` — Elastic Beanstalk environment name to create/use
- `EB_S3_BUCKET` — S3 bucket for application versions

How it works (automated):
1. Push to `main` triggers the workflow.
2. Workflow installs deps, builds the Next.js app, creates `app.zip`, ensures the S3 bucket and EB application exist, uploads the bundle, creates an application version, and creates/updates the EB environment.

Notes and next steps:
- The workflow creates the S3 bucket and EB Application if they don't already exist. Creating the environment may take several minutes.
- The workflow uses the `aws-actions/configure-aws-credentials` action to run AWS CLI commands; make sure the provided IAM user has the necessary permissions.
- If you prefer AWS Amplify hosting for Next.js, I can add an `amplify.yml` and an alternative workflow.
- Once you add the GitHub secrets, push to `main` to run a full deploy.

One-time provisioning with CloudFormation (optional)
-----------------------------------------------
If you'd rather provision AWS resources with CloudFormation before using CI, there's a template at `cfn/eb-stack.yaml` that creates an S3 bucket, an Elastic Beanstalk Application and an Environment.

Replace the parameter values and run:

```bash
aws cloudformation deploy --template-file cfn/eb-stack.yaml \
	--stack-name ruthypearlswear-infra \
	--parameter-overrides AppName=RuthyPearlsWear EnvName=RuthyPearlsWear-Env BucketName=my-ruthypearls-bucket \
	--region us-east-1
```

Notes:
- The GitHub Actions workflow will also create the bucket and application if missing, so this is optional but useful for teams that want explicit infrastructure control.
- If you need a CDK/CloudFormation version that also creates IAM users and fine-grained roles, I can add that next.
If you need a CDK/CloudFormation version that also creates IAM users and fine-grained roles, it's included as a CDK app under `cdk/`.

CDK (one-command infra + CI credentials)
--------------------------------------
This repository includes a small AWS CDK app that provisions the S3 bucket, Elastic Beanstalk Application and Environment, and a CI IAM user with access keys (output). The CDK app is in `cdk/`.

To use CDK (from the `cdk/` directory):

```bash
# 1. Install dependencies
cd cdk
npm install

# 2. Bootstrap your account (once)
npx cdk bootstrap aws://<ACCOUNT_ID>/<REGION>

# 3. Deploy the stack
npx cdk deploy --require-approval never
```

After deploy, note the outputs: `CIUserAccessKeyId` and `CIUserSecretAccessKey` — add them to GitHub secrets as `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` for automated CI deploys.

Security note: The generated access key is shown in CloudFormation stack outputs only once; rotate or remove it after configuring GitHub secrets if you prefer short-lived credentials.

