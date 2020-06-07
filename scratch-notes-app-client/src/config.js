const dev = {
  STRIPE_KEY:
    'pk_test_51GrAGyFL5hNY6RikOUVwLoG8Jc1GX78WD6MeXqwwdjP4q3lzkj7qKv15OOVsajGmARqS6tXW8otED4aULx8hv7C00015bvROUK',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'scratch-notes-app-api-dev-attachmentsbucket-1j60evkit1rd3',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://vb0mxdl2k2.execute-api.us-east-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_8fbISG0BL',
    APP_CLIENT_ID: '7e7id9pi2satgvrhlikr9p4i0d',
    IDENTITY_POOL_ID: 'us-east-1:b373529b-ae01-4a82-8837-a86ed3075dc4',
  },
};

const prod = {
  STRIPE_KEY:
    'pk_test_51GrAGyFL5hNY6RikOUVwLoG8Jc1GX78WD6MeXqwwdjP4q3lzkj7qKv15OOVsajGmARqS6tXW8otED4aULx8hv7C00015bvROUK',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'scratch-notes-app-api-prod-attachmentsbucket-1eh1hvf229f7g',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://r7cif75xmc.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_VC3RqZlgH',
    APP_CLIENT_ID: '2i54u7v1tu2b8fe1qshq9grbp',
    IDENTITY_POOL_ID: 'us-east-1:0a9285db-6205-49f0-8345-a236a1847b34',
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
