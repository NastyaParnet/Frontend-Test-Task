import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { getFile } from 'api/getFile';

interface FormProps {
  setUrlFile: (url: string) => void;
}

export const Form = ({ setUrlFile }: FormProps) => {
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

  const handleSubmitForm = handleSubmit(async (data) => {
    try {
      const url = await getFile(data.text);
      setUrlFile(url);
    } catch (error) {
      console.error('Error fetching file:', error);
    }
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
