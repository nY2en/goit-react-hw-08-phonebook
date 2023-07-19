import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout';

const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
