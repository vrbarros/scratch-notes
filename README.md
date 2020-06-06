# Scratch Notes

This is a project to study the serverless approach in front-end and back-end applications. All material was built based on [Serverless Stack](https://serverless-stack.com/).

- [Scratch Notes](#scratch-notes)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technology](#technology)
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

## Questions

Please [open an issue](https://github.com/vrbarros/scratch-notes/issues/new) for questions.

