import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApolloError, useMutation } from '@apollo/client';

import {
  ResendActivationEmailResponse,
  ResendActivationEmailVariables,
  RESEND_ACTIVATION_EMAIL,
  ResponseError,
} from 'api/mutations/auth';

export default function useResendActivationEmail(email: string) {
  const { t } = useTranslation();

  const [resendActivationEmailError, setResendActivationEmailError] = useState<string | null>(null);
  const [resendActivationEmailMessage, setResendActivationEmailMessage] = useState<string | null>(
    null
  );

  const [resendActivationEmail, { loading }] = useMutation<
    ResendActivationEmailResponse,
    ResendActivationEmailVariables
  >(RESEND_ACTIVATION_EMAIL);

  const onResendActivationEmail = useCallback(() => {
    setResendActivationEmailError('');
    resendActivationEmail({
      variables: {
        email,
      },
    })
      .then(({ data }) => {
        if (data?.resendActivationEmail.errors) {
          const errors = data.resendActivationEmail.errors;
          const errorKeys = Object.keys(errors) as [keyof ResponseError];
          const firstError = errorKeys[0];
          setResendActivationEmailError(
            t(`auth:resend_activation_${firstError}_${errors[firstError][0].code}`)
          );
        } else {
          setResendActivationEmailMessage(t('auth:resend_activation_email_message'));
        }
      })
      .catch((err: any) => {
        if (err instanceof ApolloError) setResendActivationEmailError(err.message);
      });
  }, [email, resendActivationEmail, t]);

  return {
    onResendActivationEmail,
    loading,
    resendActivationEmailMessage,
    resendActivationEmailError,
  };
}
