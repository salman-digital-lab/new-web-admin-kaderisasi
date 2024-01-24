import {
  createBrowserRouter
} from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import MainMember from '../pages/MainMember';
import AppLayout from '../components/Layout';
import MainMemberDetail from '../pages/MemberDetail';

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
        element: <h1>Activity</h1>
      },
      { 
        path: '/activity/detail', 
        element: <h1>Activity Detail</h1>
      },
      { 
        path: '/alumni', 
        element: <h1>Alumni</h1>
      },
      { 
        path: '/universities', 
        element: <h1>Universitas</h1>
      },
      { 
        path: '/chat-room', 
        element: <h1>Ruang Curhat</h1>
      },
      { 
        path: '/user', 
        element: <h1>Setting</h1>
      },
    ],
  },
]);

export default routes;