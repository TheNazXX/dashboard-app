import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ContextProvider } from './context/ContextProvider';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);
