import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Signup from '../Screen/Signup'
import About from '../Screen/About'
import Error from '../Screen/Error'
import Home from '../Screen/Home'
import Product from '../Screen/Product'
import ProductDetails from '../Screen/ProductDetails'
import Header from '../Screen/header'
import Signup from '../Screen/Signup'

const router = createBrowserRouter([

    {
        path: '/',
        element: <Header />,
        // children: [
    },
    {
        path: '/home',
        element: <Home />,
    },

    {
        path: '/about',
        element: <About />,
    },

    {
        path: '/product',
        element: <Product />,
    },

    {
        path: '/ProductDetails/:id',
        element: <ProductDetails />,
    },

    {
        path: '/signup',
        element: <Signup />,
    },

    {
        path: '*',
        element: <Error />,
    },

    // ]
    // },
]
)



export default function Router() {
    return <>
        <RouterProvider router={router} />
    </>
}
