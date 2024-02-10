import {
  createBrowserRouter
} from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import MainMember from '../pages/MainMember';
import AppLayout from '../components/Layout';
import MainMemberDetail from '../pages/MemberDetail';
import MainActivity from "../pages/MainActivity";
import MainUniversities from "../pages/MainUniversities";
import MainSpecActivity from "../pages/MainSpecActivity";
import MainProvince from "../pages/MainProvince";
import MainCity from "../pages/MainCity";
import ActivityDetail from "../pages/ActivityDetail";

const routes = createBrowserRouter([
  { 
    path: '/login', 
    element: <LoginPage /> 
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { 
        path: '/dashboard', 
        element: <h1>Dashboard</h1>
      },
      {  
        path:'/member',
        element: <MainMember /> 
      },
      { 
        path: '/member/detail', 
        element: <MainMemberDetail /> 
      },
      { 
        path: '/activity', 
        element: <MainActivity />
      },
      { 
        path: '/activity/detail', 
        element: <ActivityDetail/>
      },
      { 
        path: '/activity/specific', 
        element: <MainSpecActivity />
      },
      { 
        path: '/universities', 
        element: <MainUniversities />
      },
      { 
        path: '/province', 
        element: <MainProvince />
      },
      { 
        path: '/city', 
        element: <MainCity />
      },
    ],
  },
]);

export default routes;