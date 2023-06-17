import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/HomePage'
import { Register } from '../components/Register/Register'
import { Login } from '../components/Login/Login'
import { WishList } from '../components/WishList'
import { Profile } from '../components/Register/Profile'
import { AdminDashboard } from '../components/AdminDashboard/AdminDashboard'
import { AdminPetsAndAdoption } from '../components/AdminPetsAndAdoption/AdminPetsAndAdoption'

export const MainRoutes = () => { 
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/pets/:id' element={<WishList />} />
            <Route path='/profile' element={<Profile />}/>
            <Route path='/admindashboard' element={<AdminDashboard />}/>
            <Route path='/adminpetsandadoption' element={<AdminPetsAndAdoption />}/>
        </Routes>
    )
}
