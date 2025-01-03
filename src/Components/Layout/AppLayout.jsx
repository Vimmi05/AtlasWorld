import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import { Outlet, Link } from "react-router-dom"; 

const AppLayout = () => {
    return <>
    <Header />
        <Outlet />
    <Footer />
    </>
}

export default AppLayout