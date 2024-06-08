#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CwlStoryDynamoDB } from '../lib/dyamodb';

const app = new cdk.App();
const synthesizer = new cdk.DefaultStackSynthesizer({
  qualifier: 'cdk0702',
});
