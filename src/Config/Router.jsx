import React, { useEffect, useState } from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from '../Screen/About'
import Error from '../Screen/Error'
import Home from '../Screen/Home'
import Product from '../Screen/Product'
import ProductDetails from '../Screen/ProductDetails'
import Header from '../Screen/header'
import Signup from '../Screen/Signup'
import Signin from '../Screen/Login'
import Footer from '../Screen/Footer'
import { PostAdForm } from '../Screen/postAd'
import {getAuth,app} from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
const router = createBrowserRouter([

    {
        path: '/signin',
        element: <Signin />,
    },

    {
        path: '/signup',
        element: <Signup />,
    },

    {
        path: '/',
        element: <Main />,
        children: [

            {
                path: '/',
                element: <Product />,
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
                path: '/postadform',
                element: <PostAdForm />
            },

            {
                path: '/ProductDetails/:id',
                element: <ProductDetails />,
            },

            {
                path: '*',
                element: <Error />,
            },

        ]
    }
]
)



function Router() {
    
    return <>
        <RouterProvider router={router} />

    </>
}

function Main() {

    const [user, setUser] = useState()

    const auth = getAuth(app);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
            } else {
                setUser(null)
                // User is signed out
                // ...
            }
        });
    }, [])
    return <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
}


export default Router