import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import { UserProfileProvider } from './contexts/UserProfileContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <UserProfileProvider>
      <App />
    </UserProfileProvider>
  </React.StrictMode>
);
