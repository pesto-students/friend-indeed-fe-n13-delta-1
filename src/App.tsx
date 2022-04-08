import { Suspense, useContext } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import { ConfigProvider } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  LandingPage,
  Login,
  MyProfile,
  MySessions,
  PrescribeTreatment
} from './pages';

import Home from './pages/Home';
import { AppSkeleton, NotFound, PrivateRoute, Fallback } from './shared/components';
import { ROUTES } from './shared/utils/constants';
import AuthContext from './shared/context/AuthContext'
import theme from './shared/utils/theme';

function App() {

  ConfigProvider.config({
    theme: {
      primaryColor: theme.oliveGreen,
      infoColor: theme.copperBlue,
    }
  })

  const authContextData = useContext(AuthContext)
  
  return (
    <Suspense fallback={<Fallback />} >
      <AuthContext.Provider
        value={authContextData}
      >
        <ConfigProvider>
          <BrowserRouter>
            <Routes>
              <Route path={ROUTES.HOME} element={<AppSkeleton />}>
                <Route path={ROUTES.HOME} element={<LandingPage />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.DASHBOARD}>
                  <Route path={ROUTES.HOME} element={<PrivateRoute><Home /></PrivateRoute>} />
                  <Route path={ROUTES.MY_PROFILE} element={<PrivateRoute><MyProfile /></PrivateRoute>} />
                  <Route path={ROUTES.MY_SESSIONS} element={<PrivateRoute><MySessions /></PrivateRoute>} />
                </Route>
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </AuthContext.Provider>
    </Suspense>
  );
}

export default App;
