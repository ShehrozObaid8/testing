import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Signup from '../Screen/Signup'
import Portfolio from '../Screen/Portfolio'

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Portfolio />
        },


    ])
    return (
        <RouterProvider router={router} />

    )
}
