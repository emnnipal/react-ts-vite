import './index.scss';
import App from './App';

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
createRoot(container as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
