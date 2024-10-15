import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/nav/Navbar';
import Footer from '../components/footer/Footer';
import LoaderPage from '../pages/loading/Loader';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const ProfileFormPage = lazy(() => import('../pages/profileFormPage/ProfileFormPage'));
const ProfileDisplayPage = lazy(() => import('../pages/profileDisplayPage/ProfileDisplayPage'));
const NotFoundPage = lazy(() => import('../pages/notFoundPage/NotFoundPage'));
const Login = lazy(() => import('../pages/login/Login'));
const NoUserFoundPage = lazy(() => import('../pages/notFoundPage/NouserFoundPage'));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Toaster 
        position="top-right" 
        reverseOrder={false} 
      />
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile-form" element={<ProfileFormPage />} />
          <Route path="/profile/:userId" element={<ProfileDisplayPage />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/404" element={<NoUserFoundPage />} /> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
