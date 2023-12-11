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
import SalesView from './pages/SalesView/SalesView';
import ManageShop from './pages/ManageShop/ManageShop';
import UserSection from './pages/UserSection/UserSection';
import SalesCount from './pages/SalesCount/SalesCount';
import SalesHistory from './pages/SalesHistory/SalesHistory';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
    element: < PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
      {
        path: "manageShop",
        element: <ManageShop></ManageShop>
      },
      {
        path: "salesView",
        element: <SalesView></SalesView>
      },
      {
        path: "userSection",
        element: <UserSection></UserSection>
      },
      {
        path: "salesCount",
        element: <SalesCount></SalesCount>
      },
      {
        path: "salesHistory",
        element: <SalesHistory></SalesHistory>
      },
    ]

  }
]);

const queryClient = new QueryClient()
import {  HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>

  </React.StrictMode>,
)


//https://clothing-store-f6eaf.web.app