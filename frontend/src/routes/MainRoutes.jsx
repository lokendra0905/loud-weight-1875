import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/HomePage'
import { Register } from '../components/Register'
import { Login } from '../components/Login'
import { WishList } from '../components/WishList'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/pets/:id' element={<WishList />} />
        </Routes>
    )
}
