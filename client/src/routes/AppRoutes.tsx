import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Dynamic imports for lazy loading components
const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const ProfileFormPage = lazy(() => import('../pages/profileFormPage/ProfileFormPage'));
const ProfileDisplayPage = lazy(() => import('../pages/profileDisplayPage/ProfileDisplayPage'));
const NotFoundPage = lazy(() => import('../pages/notFoundPage/NotFoundPage'));
// Add more pages as needed

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile-form" element={<ProfileFormPage />} />
          <Route path="/profile" element={<ProfileDisplayPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
