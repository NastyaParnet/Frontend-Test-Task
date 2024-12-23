import React from 'react';
import { ListFiles } from './list-files';
import { PdfReader } from 'components/pdf-reader';

export const History = () => {
  const [activeFile, setActiveFile] = React.useState<string>('');

  return (
    <div className="h-screen p-8 lg:p-16 grid grid-rows-[1fr_3fr] gap-4 lg:gap-8">
      <ListFiles activeFile={activeFile} setActiveFile={setActiveFile} />
      <PdfReader urlFile={activeFile} />
    </div>
  );
};
