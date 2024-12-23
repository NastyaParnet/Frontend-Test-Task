import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { getFile } from 'api/getFile';
import { useNavigate } from 'react-router-dom';

interface FormProps {
  setUrlFile: (url: string) => void;
}

export const Form = ({ setUrlFile }: FormProps) => {
  const navigate = useNavigate();

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

  const saveFileToLocalStorage = (url: string) => {
    const files = JSON.parse(localStorage.getItem('files') || '[]');
    files.push(url);
    localStorage.setItem('files', JSON.stringify(files));
  };

  const handleSubmitForm = handleSubmit(async (data) => {
    try {
      const url = await getFile(data.text);
      setUrlFile(url);
      saveFileToLocalStorage(url);
    } catch (error) {
      console.error('Error fetching file:', error);
    }
  });

  const handleGoToHistory = () => {
    navigate('/history');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmitForm}>
        <Input name="text" label="Text for file" placeholder="Enter text" />
        <div className="mt-2 grid grid-cols-2 gap-4">
          <Button type="submit">Convert to PDF</Button>
          <Button type="button" onClick={handleGoToHistory}>
            Go to conversion history
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
