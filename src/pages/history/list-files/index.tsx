import { Button } from 'components/button';
import React from 'react';

interface ListFilesProps {
  activeFile: string;
  setActiveFile: (url: string) => void;
}

export const ListFiles = ({ activeFile, setActiveFile }: ListFilesProps) => {
  const files: string[] = JSON.parse(localStorage.getItem('files') || '[]');

  return (
    <div className="flex flex-col gap-2 overflow-auto">
      {files.length === 0 ? (
        <p className="text-h2 text-center">You don&apos;t have any converted files yet</p>
      ) : (
        [...files].map((file) => (
          <Button
            key={file}
            variant={activeFile === file ? 'contained' : 'outlined'}
            onClick={() => setActiveFile(file)}
          >
            {`${file.split('/').pop()}.pdf`}
          </Button>
        ))
      )}
    </div>
  );
};