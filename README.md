# Scratch Notes

This is a project to study the serverless approach in front-end and back-end applications. All material was built based on [Serverless Stack](https://serverless-stack.com/).

- [Scratch Notes](#scratch-notes)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technology](#technology)
  - [Further Reading](#further-reading)
  - [Questions](#questions)

## Requirements

You just need a couple of things to work through this project:
*   [Node v8.10+ and NPM v5.5+](https://nodejs.org/en/) installed on your machine.
*   A free [GitHub account](https://github.com/join).
*   And basic knowledge of how to use the command line.

For back-end:
*   Configure your AWS account
*   Create your database using DynamoDB
*   Set up S3 for file uploads
*   Set up Cognito User Pools to manage user accounts
*   Set up Cognito Identity Pool to secure our file uploads
*   Set up the Serverless Framework to work with Lambda & API Gateway
*   Write the various backend APIs
*   Working with external APIs (Stripe)
*   Deploy your app through the command line

For front-end:
*   Set up our project with Create React App
*   Add favicons, fonts, and a UI Kit using Bootstrap
*   Set up routes using React-Router
*   Use AWS Cognito SDK to login and signup users
*   Plugin to the backend APIs to manage our notes
*   Use the AWS JS SDK to upload files
*   Accepting credit card payments in React
*   Environments in Create React App
*   Deploy your frontend to production using Netlify
*   Configure custom domains through Netlify

Automate backend deployments:
*   Configure DynamoDB through code
*   Configure S3 through code
*   Configure Cognito User Pool through code
*   Configure Cognito Identity Pool through code
*   Environment variables in Serverless Framework
*   Working with secrets in Serverless Framework
*   Unit tests in Serverless
*   Automating deployments using Seed
*   Configuring custom domains through Seed

Monitoring and debugging Serverless apps:
*   Set up error reporting in React using Sentry
*   Configure an Error Boundary in React
*   Add error logging to our Serverless APIs
*   Cover the debugging workflow for common Serverless errors

## Installation

Clone this project to your local folder using:

```sh
git clone https://github.com/vrbarros/scratch-notes.git
```

## Usage


## Technology

We’ll be using the following set of technologies and services to build our serverless application.

*   [Lambda](https://aws.amazon.com/lambda/) & [API Gateway](https://aws.amazon.com/api-gateway/) for our serverless API
*   [DynamoDB](https://aws.amazon.com/dynamodb/) for our database
*   [Cognito](https://aws.amazon.com/cognito/) for user authentication and securing our APIs
*   [S3](https://aws.amazon.com/s3/) for hosting our app and file uploads
*   [CloudFront](https://aws.amazon.com/cloudfront/) for serving out our app
*   [Route 53](https://aws.amazon.com/route53/) for our domain
*   [Certificate Manager](https://aws.amazon.com/certificate-manager) for SSL
*   [CloudWatch](https://aws.amazon.com/cloudwatch/) for Lambda and API access logs
*   [React.js](https://facebook.github.io/react/) for our single page app
*   [React Router](https://github.com/ReactTraining/react-router) for routing
*   [Bootstrap](http://getbootstrap.com) for the UI Kit
*   [Stripe](https://stripe.com) for processing credit card payments
*   [Seed](https://seed.run) for automating Serverless deployments
*   [Netlify](https://netlify.com) for automating React deployments
*   [GitHub](https://github.com) for hosting our project repos
*   [Sentry](https://sentry.io) for error reporting

## Further Reading

The following can be used to drill down in detail for some of the technologies and services used in this repository.

*   [Serverless Framework Documentation](https://serverless.com/framework/docs/): Documentation for the Serverless Framework
*   [DynamoDB, explained](https://www.dynamodbguide.com): A Primer on the DynamoDB NoSQL database
*   [React JS Docs](https://reactjs.org/docs/hello-world.html): The official React docs
*   [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html): Learn JSX in a bit more detail
*   [Create React App User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md): The really comprehensive Create React App user guide
*   [React-Bootstrap Docs](https://react-bootstrap.github.io/getting-started/introduction): The official React-Bootstrap docs
*   [Bootstrap v3 Docs](http://getbootstrap.com/docs/3.3/getting-started/): The Bootstrap v3 docs that React-Bootstrap is based on
*   [React Router Docs](https://reacttraining.com/react-router/web/guides/philosophy): The official React Router v4 docs
*   [AWS Amplify Developer Guide](https://aws.github.io/aws-amplify/media/developer_guide): The AWS Amplify developer guide
*   [AWS Amplify API Reference](https://aws.github.io/aws-amplify/api/): The AWS Amplify API reference
*   [AWS CloudFormation Docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/GettingStarted.Walkthrough.html): The AWS user guide for CloudFormation
*   [Jest Unit Test Docs](https://facebook.github.io/jest/docs/en/getting-started.html): The official Jest docs
*   [Seed Docs](https://seed.run/docs/): The official Seed docs
*   [Netlify Docs](https://www.netlify.com/docs/): The official Netlify docs

## Questions

Please [open an issue](https://github.com/vrbarros/scratch-notes/issues/new) for questions.

