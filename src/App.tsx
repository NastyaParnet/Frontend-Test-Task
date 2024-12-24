import React, { useEffect } from 'react';
import { Router } from 'router/Router';

export const App = () => {
  useEffect(() => {
    return localStorage.clear();
  }, []);

  return <Router />;
};
