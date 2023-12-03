import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import HomePage from './pages/HomePage/HomePage';
import AuthProvider from './AuthProvider/AuthProvider';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AboutPage from './pages/AboutPage/AboutPage';
import CreateShop from './pages/CreateShop/CreateShop';
import AddProductPage from './pages/AddProductPage/AddProductPage';

import {
  
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import MyProducts from './pages/MyProducts/MyProducts';
import ProductUpdate from './pages/ProductUpdate/ProductUpdate';
import ProductTable from './pages/ProductTable/ProductTable';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "/createShop",
        element: <CreateShop></CreateShop>
      },
      {
        path: "/addProduct",
        element: <AddProductPage></AddProductPage>

      },
      {
        path: "/myProducts",
        element: <MyProducts></MyProducts>
      },
      {
        path:"/productUpdate/:id",
        element: <ProductUpdate></ProductUpdate>
      },
      {
        path: "/productTable",
        element: <ProductTable></ProductTable>
      }


    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
