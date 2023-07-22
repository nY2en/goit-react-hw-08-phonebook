import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from 'components/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/authSlice/operations';
import { selectIsRefreshing } from 'redux/authSlice/selectors';

import { RestrictedRoute } from './UserMenu/RestrictedRoute';
import { PrivateRoute } from './UserMenu/PrivateRoute';

const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          ></Route>
        </Route>
      </Routes>
    )
  );
};
