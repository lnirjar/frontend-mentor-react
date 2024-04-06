import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import { Layout } from './components/Layout.jsx';
import { HomePage } from './HomePage.jsx';
import { BlogPreviewCardPage } from './challenges/blog-preview-card/BlogPreviewCardPage.jsx';
import { SocialLinksProfilePage } from './challenges/social-links-profile/SocialLinksProfilePage.jsx';
import { FAQAccordionPage } from './challenges/faq-accordion/FAQAccordionPage.jsx';

export const challengesData = [
  {
    name: "Blog preview card",
    path: "/blog-preview-card",
    element: <BlogPreviewCardPage />
  },
  {
    name: "Social links profile",
    path: "/social-links-profile",
    element: <SocialLinksProfilePage />
  },
  {
    name: "FAQ accordion",
    path: "/faq-accordion",
    element: <FAQAccordionPage />
  }
];

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
