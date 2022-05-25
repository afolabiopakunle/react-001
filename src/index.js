import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const root = createRoot(document.getElementById('root'));
// const root = createRoot(rootElement);

root.render(
    <App />
);
