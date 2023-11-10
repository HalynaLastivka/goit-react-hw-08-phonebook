import { Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Loader from 'components/Loader/Loader';
import { Suspense, lazy, useEffect } from 'react';
import RestictedRoute from 'components/RestictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import Navigation from 'components/Navigation';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/authReducer';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <RegisterPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },

  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <Box display="flex" width="100vw" height="100vh">
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </Box>
  );
};
