import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const ProfileFormPage = lazy(() => import('../pages/profileFormPage/ProfileFormPage'));
const ProfileDisplayPage = lazy(() => import('../pages/profileDisplayPage/ProfileDisplayPage'));
const NotFoundPage = lazy(() => import('../pages/notFoundPage/NotFoundPage'));
const Login = lazy(() => import('../pages/login/Login'));


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile-form" element={<ProfileFormPage />} />
          <Route path="/profile" element={<ProfileDisplayPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
