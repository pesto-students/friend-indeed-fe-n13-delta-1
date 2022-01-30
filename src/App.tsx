import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage, Login, MyProfile, MySessions, PrescribeTreatment } from './pages';

import Home from './pages/Home';
import { AppSkeleton, NotFound, PrivateRoute } from './shared/components';
import { ROUTES } from './shared/utils/constants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.DASHBOARD} element={<AppSkeleton />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MY_PROFILE} element={<MyProfile />} />
          <Route path={ROUTES.MY_SESSIONS} element={<MySessions />} />
          <Route path={ROUTES.PRESCRIBE_TREATMENT} element={<PrescribeTreatment />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
