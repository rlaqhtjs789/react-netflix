import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: ":movieId", element: <DetailPage /> },
      { path: "search", element: <SearchPage /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
