import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

export const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <ExclamationCircleIcon className="w-16 h-16 text-darkRed" />
      <p className="text-h1">Page not found</p>
      <Link to="/" className="text-link underline">
        Return to home page
      </Link>
    </div>
  );
};
