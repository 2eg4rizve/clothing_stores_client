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
import Dashboard from './Layout/Dashboard';
import Cart from './pages/Cart/Cart';
import AllProduct from './pages/AllProduct/AllProduct';
import ContactUs from './components/ContactUs/ContactUs';
import Subscription from './pages/Subscription/Subscription';

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
        path: "/productUpdate/:id",
        element: <ProductUpdate></ProductUpdate>
      },
      {
        path: "allProducts",
        element: <AllProduct></AllProduct>
      },

      {
        path: "contactUs",
        element: <ContactUs></ContactUs>
      },



    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: "createShop",
        element: <CreateShop></CreateShop>
      },
      {
        path: "addProduct",
        element: <AddProductPage></AddProductPage>

      },
      {
        path: "productTable",
        element: <ProductTable></ProductTable>
      },
      {
        path: "myProducts",
        element: <MyProducts></MyProducts>
      },
      {
        path: "subscription",
        element: <Subscription></Subscription>
      },
    ]

  }
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
