import { Error } from 'pages/error/error';
import { History } from 'pages/history/history';
import { Home } from 'pages/home/home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
