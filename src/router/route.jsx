import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomePage from '../page/HomePage';
import JobsDetailsPage from '../page/JobsDetailsPage';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import { getSingleJobs } from '../utils/api';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: HomePage },
      {
        path: '/jobs/:id',
        element: <JobsDetailsPage />,
        loader: ({ params }) => getSingleJobs(params.id),
      },
    ],
  },
  { path: '/login-page', Component: LoginPage },
  { path: '/register-page', Component: RegisterPage },
]);
