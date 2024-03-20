import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import { HomePage } from './HomePage.jsx';
import { BlogPreviewCardPage } from './challenges/blog-preview-card/BlogPreviewCardPage.jsx';
import { Layout } from './components/Layout.jsx';

export const challengesData = [
  {
    name: "Blog preview card",
    path: "/blog-preview-card",
    element: <BlogPreviewCardPage />
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  ...challengesData.map(({ path, element }) => ({ path, element }))
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
);
