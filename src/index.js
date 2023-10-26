import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Welcome from './Welcome'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomLegends from './CustomLegends';
import CustomCardForm from './CustomCardForm';
import CardTemplate from './CardTemplate';
import LorePage from './LorePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  }, 
  {
    path: "/CustomCardCreator",
    element: <App />
  },
  {
    path: "/LorePage",
    element: <LorePage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
