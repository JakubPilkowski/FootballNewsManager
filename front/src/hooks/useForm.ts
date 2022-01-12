import { useCallback, useState } from 'react';

import { ThemedTextfieldInputAction } from 'common/ThemedTextfield/ThemedTextfield.types';

import inputValidator from 'utils/inputValidator';

type FormValidator = {
  validator: RegExp | string;
  error: string;
};

type FormInput = {
  value: string;
  validators: FormValidator[];
  error: string;
};

export type FormValues = { [key: string]: FormInput };

type UseForm = [
  FormValues,
  {
    onChange: (inputAction: ThemedTextfieldInputAction) => void;
  }
];

export default function useForm(formValues: FormValues): UseForm {
  const [form, setForm] = useState<FormValues>(formValues);

  const onChange = useCallback(
    ({ name, value }: ThemedTextfieldInputAction) => {
      setForm((frm) => {
        const { validators } = form[name];
        return {
          ...frm,
          [name]: {
            validators,
            value,
            error:
              validators.find((validator) => !inputValidator(validator.validator, value))?.error ||
              '',
          },
        };
      });
    },
    [form]
  );

  return [form, { onChange }];
}
