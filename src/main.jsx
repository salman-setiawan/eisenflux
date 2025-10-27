import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { LanguageProvider } from './data/languageContext';
import Home from './pages/Home';
import Notfound from './pages/404';

// ✅ Lazy load pages
const About = lazy(() => import('./pages/About'));
const Article = lazy(() => import('./pages/Article'));
const Gallery = lazy(() => import('./pages/Gallery'));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/me", element: <About /> },
  { path: "/article/:slug", element: <Article /> },
  { path: "/gallery/:slug", element: <Gallery /> },
  { path: "/404", element: <Notfound /> },
  { path: "*", element: <Navigate to="404" /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      {/* ✅ Suspense untuk handle loading state */}
      <Suspense fallback={<div className='flex text-[#ffaa50] font-semibold h-screen justify-center items-center w-full'>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </LanguageProvider>
  </React.StrictMode>
);
