import App from './App.tsx';
import * as R from 'react';
import * as RC from 'react-dom/client';

RC.createRoot(document.getElementById('root')!).render(
  <R.StrictMode children={<App />} />
);
