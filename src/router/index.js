import {
  createBrowserRouter
} from "react-router-dom";

import  Auth from '../components/Auth/Auth.jsx'

import Index from "../views/Index/Index";
import CheckAdd from "../views/CheckAdd/CheckAdd";
import CheckList from "../views/CheckList/CheckList";
import CheckChange from "../views/CheckChange/CheckChange";
import OaHome from "../views/OaHome/OaHome";
import Login from "../views/Login/Login";
import UsersList from "../views/UsersList/UsersList";

// const Index = lazy(() => import('../views/Index/Index'));
// const CheckAdd = lazy(() => import('../views/CheckAdd/CheckAdd'));
// const CheckList = lazy(() => import('../views/CheckList/CheckList'));
// const CheckChange = lazy(() => import('../views/CheckChange/CheckChange'));
// const OaHome = lazy(() => import('../views/OaHome/OaHome'));
// const Login = lazy(() => import('../views/Login/Login'));
// const UsersList = lazy(() => import('../views/UsersList/UsersList'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth><Index /></Auth>,
    children: [
      {
        path: 'oa/home',
        element: <OaHome />
      },
      {
        path: 'check/add',
        element: <CheckAdd />
      },
      {
        path: 'check/list',
        element: <CheckList />
      },
      {
        path: 'check/change',
        element: <CheckChange />
      },
      {
        path: 'users/list',
        element: <UsersList />
      }
    ]
  }, {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: '404'
  }

]);

export default router;