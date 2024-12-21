import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'components/input';
import { Button } from 'components/button';

export const Form = () => {
  const validationSchema = Yup.object().shape({
    text: Yup.string().required('Field is required'),
  });

  const defaultValues = {
    text: '',
  };

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const handleSubmitForm = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmitForm}>
        <Input name="text" label="Text for file" placeholder="Enter text" />
        <Button type="submit">Convert to PDF</Button>
      </form>
    </FormProvider>
  );
};
