import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MainProvider } from './stores/main/index.ts';

// const client = ...

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MainProvider>
    <App />
  </MainProvider>
);

