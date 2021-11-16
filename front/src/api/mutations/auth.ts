import gql from 'graphql-tag';

type ResponseError = {
  errors: {
    [key: string]: Array<{
      message: string;
      code: string;
    }>;
  };
};

export type ValidateTokenResponse = {
  verifyToken: {
    success: boolean;
    errors: ResponseError;
  };
};

export type ValidateTokenVariables = {
  token: string;
};

export const VALIDATE_TOKEN = gql`
  mutation ValidateToken($token: String!) {
    verifyToken(token: $token) {
      success
      errors
    }
  }
`;

export type LoginResponse = {
  tokenAuth: {
    token: string;
    success: string;
    errors: ResponseError;
  };
};

export type LoginVariables = {
  email: string;
  password: string;
};

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      token
    }
  }
`;
