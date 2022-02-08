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
      primaryColor: theme.copperBlue,
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
                  <Route path={ROUTES.HOME} element={<Home />} />
                  <Route path={ROUTES.MY_PROFILE} element={<MyProfile />} />
                  <Route path={ROUTES.MY_SESSIONS} element={<MySessions />} />
                  <Route path={ROUTES.PRESCRIBE_TREATMENT} element={<PrescribeTreatment />} />
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
