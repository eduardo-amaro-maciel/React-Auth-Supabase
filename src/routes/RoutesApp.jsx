import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Loading from '../components/Loading';

const Login = lazy(() => import('../pages/Login/'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

function RoutesApp() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/login' element={<Login />} />

          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default RoutesApp;
