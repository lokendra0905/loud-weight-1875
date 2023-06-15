import { Route, Routes } from "react-router-dom"
import { AdminDashboard } from "../components/AdminDashboard/AdminDashboard"

export const AdminRoutes = () => { 
    return (
        <Routes>            
            <Route path='/admindashboard' element={<AdminDashboard />}/>
        </Routes>
    )
}