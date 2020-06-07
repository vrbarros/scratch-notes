export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    'pk_test_51GrAGyFL5hNY6RikOUVwLoG8Jc1GX78WD6MeXqwwdjP4q3lzkj7qKv15OOVsajGmARqS6tXW8otED4aULx8hv7C00015bvROUK',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'scratch-notes-app-uploads-bvj78apyot',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://fpyo5byrl9.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_3uY1QQRDE',
    APP_CLIENT_ID: '5hi8pt6vroi82cbd3ofgmf94et',
    IDENTITY_POOL_ID: 'us-east-1:881fa5a3-b87e-47df-a406-18747e670692',
  },
};
