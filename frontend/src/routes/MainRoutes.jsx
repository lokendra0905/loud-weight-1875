import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { Register } from "../components/Register/Register";
import { Login } from "../components/Login/Login";
import { WishList } from "../components/WishList";
import { Profile } from "../components/Register/Profile";
import { AdminDashboard } from "../components/AdminDashboard/AdminDashboard";
import DetailsPage from "../components/AdoptionPage/DetailsPage";
import DogsAdoption from "../components/AdoptionPage/DogsAdoption";
import { AdminPetsAndAdoption } from "../components/AdminPetsAndAdoption/AdminPetsAndAdoption";
import { Shelter } from "../components/Pet_Shelters/Shelter";
import PaymentsPage from "../components/Payment/PaymentPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/dogAdoptionPage" element={<DogsAdoption />} />
      <Route path="/DetailsPage/:petId" element={<DetailsPage />} />
      <Route path="/adminpetsandadoption" element={<AdminPetsAndAdoption />} />
      <Route path="/shelters" element={<Shelter />} />
      <Route path="/payment/:amount" element={<PaymentsPage />} />
    </Routes>
  );
};
