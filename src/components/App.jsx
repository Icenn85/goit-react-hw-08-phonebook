import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';
import authOperations from '../redux/auth/authOperations';
import AppBar from './AppBar/AppBar';
import RestrictedRoute from './RestrictedRoute';
import PrivatRoute from './PrivateRoute';
import { Audio } from 'react-loader-spinner';
import css from './App.module.css';

const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);


  return (
    <div className={css.container}>
      {isRefreshing ? (
        <Audio heigth="350" width="350" color="grape" arialLabel="loading" />
      ) : (
        <>
          <AppBar />
          <Suspense
            fallback={
              <Audio
                heigth="350"
                width="350"
                color="grape"
                arialLabel="loading"
              />
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={RegisterPage}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={LoginPage}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivatRoute component={ContactsPage} redirectTo="/login" />
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
}
