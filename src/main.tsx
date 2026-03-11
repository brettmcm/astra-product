import React from 'react';
import ReactDOM from 'react-dom/client';
import DesignSystemOverview from './DesignSystemOverview';
import { ThemeProvider } from './ThemeProvider';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <DesignSystemOverview />
    </ThemeProvider>
  </React.StrictMode>
);
