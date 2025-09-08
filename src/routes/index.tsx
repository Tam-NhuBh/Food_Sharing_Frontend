import { lazy, Suspense } from 'react';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const About = lazy(() => import('../pages/About'));
const RecipeLayout = lazy(() => import('../pages/recipes/RecipeLayout'));
const AddRecipe = lazy(() => import('../pages/recipes/AddRecipe'));
const RecipeList = lazy(() => import('../pages/recipes/RecipeList'));
const RecipeDetail = lazy(() => import('../pages/recipes/RecipeDetail'));
// const Dashboard = lazy(() => import('../pages/Dashboard'));
// const Login = lazy(() => import('../pages/Login'));
const NotFound = lazy(() => import('../pages/NotFound'));
import { useRoutes, type RouteObject } from 'react-router-dom';
//import ProtectedRoute from './protected-route';
import App from '../App';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'recipes',
        element: <RecipeLayout />,
        children: [
          {
            index: true,
            element: <RecipeList />,
          },
          {
            path: 'add',
            element: <AddRecipe />,
          },
          {
            path: ':id',
            element: <RecipeDetail/>,
          },
        ]
      },
      {
        path: 'sign-up',
        element: <SignUp/>
      },
      // {
      //   path: 'stories',
      //   element: <StoriesLayout />,
      //   children: [
      //     {
      //       index: true,
      //       element: <StoryList />,
      //     },
      //     {
      //       path: ':id',
      //       element: <StoryDetail />,
      //     },
      //   ],
      // },
      // {
      //   path: 'dashboard',
      //   element: (
      //     <ProtectedRoute>
      //       <Dashboard />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default function AppRoutes() {
  const appRoutes = useRoutes(routes);

  return <Suspense fallback={<div>Loading ...</div>}>{appRoutes}</Suspense>;
}
