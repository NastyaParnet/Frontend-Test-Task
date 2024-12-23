import React, { useState } from 'react';
import { Form } from './form';
import { PdfReader } from 'components/pdf-reader';

export const Home = () => {
  const [urlFile, setUrlFile] = useState<string>('');

  return (
    <div className="h-screen p-8 lg:p-16 grid grid-rows-[auto_1fr] gap-8 lg:gap-16">
      <Form setUrlFile={setUrlFile} />
      <PdfReader urlFile={urlFile} />
    </div>
  );
};
