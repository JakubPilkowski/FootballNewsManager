import gql from 'graphql-tag';

export type ResponseError = {
  nonFieldErrors: Array<{
    message: string;
    code: string;
  }>;
  [key: string]: Array<{
    message: string;
    code: string;
  }>;
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

export type RegisterResponse = {
  register: {
    success: boolean;
    errors: ResponseError;
  };
};

export type RegisterVariables = {
  email: string;
  password1: string;
  password2: string;
};

export const REGISTER = gql`
  mutation Register($email: String!, $password1: String!, $password2: String!) {
    register(email: $email, password1: $password1, password2: $password2) {
      success
      errors
    }
  }
`;

export type ResendActivationEmailResponse = {
  resendActivationEmail: {
    success: boolean;
    errors: ResponseError;
  };
};

export type ResendActivationEmailVariables = {
  email: string;
};

export const RESEND_ACTIVATION_EMAIL = gql`
  mutation ResendActivationEMail($email: String!) {
    resendActivationEmail(email: $email) {
      success
      errors
    }
  }
`;

export type VerifyAccountResponse = {
  verifyAccount: {
    success: boolean;
    errors: ResponseError;
  };
};

export type VerifyAccountVariables = {
  token: string;
};

export const VERIFY_ACCOUNT = gql`
  mutation VerifyAccount($token: String!) {
    verifyAccount(token: $token) {
      success
      errors
    }
  }
`;
