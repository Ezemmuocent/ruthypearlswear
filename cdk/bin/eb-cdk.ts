#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EbStack } from '../lib/eb-stack';

const app = new cdk.App();
new EbStack(app, 'RuthyPearlsEbStack', {
  /* use defaults; parameters can be overridden via context or environment */
});
