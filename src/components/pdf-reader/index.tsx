import React from 'react';

interface PdfReaderProps {
  urlFile: string;
}

export const PdfReader = ({ urlFile }: PdfReaderProps) => {
  if (!urlFile) return null;

  return (
    <div data-testid="pdf-reader">
      <object data={urlFile} type="application/pdf" width="100%" height="100%">
        <p>Failed to load PDF file</p>
      </object>
    </div>
  );
};
