import { Route, Routes } from "react-router-dom"
import { AdminDashboard } from "../components/AdminDashboard/AdminDashboard"
import { AdminPetsAndAdoption } from "../components/AdminPetsAndAdoption/AdminPetsAndAdoption"
import { Profile } from "../components/Register/Profile"
import { Login } from "../components/Login/Login"
import { Register } from "../components/Register/Register"

export const AdminRoutes = () => { 
    return (
        <Routes> 
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />}/>
            <Route path='/admindashboard' element={<AdminDashboard />}/>
            <Route path='/adminpetsandadoption' element={<AdminPetsAndAdoption />}/>
        </Routes>
    )
}