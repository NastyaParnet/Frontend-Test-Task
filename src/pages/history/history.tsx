import React from 'react';

export const History = () => {
  const files = JSON.parse(localStorage.getItem('files') || '[]');

  return <div>History</div>;
};
