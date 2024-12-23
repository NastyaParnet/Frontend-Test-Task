import React, { useState } from 'react';
import { Form } from './form';

export const Home = () => {
  const [urlFile, setUrlFile] = useState<string | null>(null);

  return (
    <div className="container mx-auto">
      <Form setUrlFile={setUrlFile} />
    </div>
  );
};
