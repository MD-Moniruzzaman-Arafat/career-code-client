import { createBrowserRouter } from 'react-router';
import App from '../App';
import Login from '../components/Login/Login';
import HomePage from '../page/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [{ index: true, Component: HomePage }],
  },
  { path: '/login-page', Component: Login },
]);
