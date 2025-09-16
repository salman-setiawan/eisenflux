import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './pages/Home';
import Notfound from './pages/404';
import Article from './pages/Article';
import { LanguageProvider } from './data/languageContext';
import Bio from './pages/Bio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/me",
    element: <Bio />,
  },
  {
    path: "/article/:id",
    element: <Article />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
  {
    path: "/404",
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider> 
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
