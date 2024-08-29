import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import MainMember from "../pages/Member/MemberList";
import AppLayout from "../components/base";
import MainMemberDetail from "../pages/Member/MemberDetail";
import MainActivity from "../pages/Activity/ActivityList";
import MainUniversity from "../pages/University";
import MainProvince from "../pages/Province";
import ActivityDetail from "../pages/Activity/ActivityDetail";
import { ReactNode } from "react";
import DashboardPage from "../pages/Dashboard";
import RegistrantDetail from "../pages/Activity/RegistrantDetail";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// eslint-disable-next-line react-refresh/only-export-components
const AuthUser = ({ element }: { element: ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <>{element}</>;
};

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AuthUser element={<AppLayout />} />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "member",
        element: <MainMember />,
      },
      {
        path: "member/:id",
        element: <MainMemberDetail />,
      },
      {
        path: "activity",
        element: <MainActivity />,
      },
      {
        path: "activity/:id",
        element: <ActivityDetail />,
      },
      {
        path: "registrant/:id",
        element: <RegistrantDetail />,
      },
      {
        path: "universities",
        element: <MainUniversity />,
      },
      {
        path: "province",
        element: <MainProvince />,
      },
    ],
  },
]);

export default routes;
