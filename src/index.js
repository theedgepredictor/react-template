import React, { useContext, useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './components/App';
import { AuthProvider } from './context/AuthContext';

import '@fortawesome/fontawesome-free/css/all.css'; // Import all Font Awesome icons

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthProvider >
    <App />
  </AuthProvider>
);
