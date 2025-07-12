// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import StoreOwnerDashboard from './pages/StoreOwnerDashboard';
import ProtectedRoute from './auth/ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/admin" element={<ProtectedRoute roles={["ADMIN"]}><AdminDashboard /></ProtectedRoute>} />
    <Route path="/user" element={<ProtectedRoute roles={["USER"]}><UserDashboard /></ProtectedRoute>} />
    <Route path="/owner" element={<ProtectedRoute roles={["STORE_OWNER"]}><StoreOwnerDashboard /></ProtectedRoute>} />
  </Routes>
);

export default AppRoutes;
