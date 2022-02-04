import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ComponentForTest } from 'ComponentForTest';

export function Home() {
  return (
    <Routes>
      <Route path="/home" element={<ComponentForTest />} />{' '}
      <Route path="/test" element={<ComponentForTest />} />{' '}
    </Routes>
  );
}
