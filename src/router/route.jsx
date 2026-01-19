import { createBrowserRouter } from 'react-router';
import App from '../App';
import AddJobPage from '../page/AddJobPage';
import ApplyFormPage from '../page/ApplyFormPage';
import HomePage from '../page/HomePage';
import JobsDetailsPage from '../page/JobsDetailsPage';
import LoginPage from '../page/LoginPage';
import MyApplyJobListPage from '../page/MyApplyJobListPage';
import MyPostedJobListPage from '../page/MyPostedJobListPage';
import RegisterPage from '../page/RegisterPage';
import { getSingleJobs } from '../utils/api';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: HomePage },
      {
        path: '/jobs/:id',
        element: (
          <PrivateRoute>
            <JobsDetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) => getSingleJobs(params.id),
      },
      {
        path: '/apply-form/:id',
        element: (
          <PrivateRoute>
            <ApplyFormPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-apply-job',
        element: (
          <PrivateRoute>
            <MyApplyJobListPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/job-post',
        element: (
          <PrivateRoute>
            <AddJobPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-posted-jobs',
        element: (
          <PrivateRoute>
            <MyPostedJobListPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: '/login-page', Component: LoginPage },
  { path: '/register-page', Component: RegisterPage },
]);
