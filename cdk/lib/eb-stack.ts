import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as eb from 'aws-cdk-lib/aws-elasticbeanstalk';

export interface EbStackProps extends cdk.StackProps {
  appName?: string;
  envName?: string;
  bucketName?: string;
}

export class EbStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: EbStackProps) {
    super(scope, id, props);

    const appName = props?.appName ?? this.node.tryGetContext('appName') ?? 'RuthyPearlsWear';
    const envName = props?.envName ?? this.node.tryGetContext('envName') ?? 'RuthyPearlsWear-Env';
    const bucketName = props?.bucketName ?? this.node.tryGetContext('bucketName') ?? `${this.account}-ruthypearls-bucket`;

    // S3 bucket for app versions
    const bucket = new s3.Bucket(this, 'AppBucket', {
      bucketName: bucketName,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      versioned: false,
    });

    // Elastic Beanstalk application
    const app = new eb.CfnApplication(this, 'EBApplication', {
      applicationName: appName,
      description: 'RuthyPearls Wear application',
    });

    // Elastic Beanstalk environment (placeholder, version label will be set by CI)
    const env = new eb.CfnEnvironment(this, 'EBEnvironment', {
      applicationName: app.applicationName || appName,
      environmentName: envName,
      solutionStackName: '64bit Amazon Linux 2 v3.6.8 running Docker',
    });

    // IAM User for CI (GitHub Actions) with restricted permissions
    const ciUser = new iam.User(this, 'CICDUser', {
      userName: `${appName}-ci-user`,
    });

    const ciPolicy = new iam.Policy(this, 'CICDPolicy', {
      statements: [
        new iam.PolicyStatement({
          actions: [
            's3:PutObject',
            's3:PutObjectAcl',
            's3:GetObject',
            's3:ListBucket'
          ],
          resources: [bucket.bucketArn, `${bucket.bucketArn}/*`],
        }),
        new iam.PolicyStatement({
          actions: [
            'elasticbeanstalk:CreateApplicationVersion',
            'elasticbeanstalk:UpdateEnvironment',
            'elasticbeanstalk:DescribeEnvironments',
            'elasticbeanstalk:CreateApplication'
          ],
          resources: ['*'],
        }),
        new iam.PolicyStatement({
          actions: ['iam:PassRole'],
          resources: ['*'],
        }),
      ],
    });

    ciUser.attachInlinePolicy(ciPolicy);

    // Create access key for CI user (will be shown in CloudFormation outputs)
    const accessKey = new iam.CfnAccessKey(this, 'CICDAccessKey', {
      userName: ciUser.userName,
    });

    new cdk.CfnOutput(this, 'BucketName', { value: bucket.bucketName });
    new cdk.CfnOutput(this, 'ApplicationName', { value: app.applicationName || appName });
    new cdk.CfnOutput(this, 'EnvironmentName', { value: env.environmentName || envName });
    new cdk.CfnOutput(this, 'CIUser', { value: ciUser.userName });
    new cdk.CfnOutput(this, 'CIUserAccessKeyId', { value: accessKey.ref });
    new cdk.CfnOutput(this, 'CIUserSecretAccessKey', { value: accessKey.attrSecretAccessKey });
  }
}
