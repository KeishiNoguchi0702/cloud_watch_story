import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  aws_dynamodb as ddb,
} from 'aws-cdk-lib';

export class CwlStoryDynamoDB extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const table = new ddb.TableV2(this, 'Table', {
      partitionKey: { name: 'pk', type: ddb.AttributeType.STRING },
    });    
  }
}
