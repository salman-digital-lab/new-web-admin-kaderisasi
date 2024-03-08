import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainMember from "../pages/MainMember";
import AppLayout from "../components/Layout";
import MainMemberDetail from "../pages/MemberDetail";
import MainActivity from "../pages/MainActivity";
import MainUniversities from "../pages/MainUniversities";
import MainSpecActivity from "../pages/MainSpecActivity";
import MainProvince from "../pages/MainProvince";
import MainCity from "../pages/MainCity";
import ActivityDetail from "../pages/ActivityDetail";
import { ReactNode } from "react";

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
        path: "dashboard",
        element: <h1>Dashboard</h1>,
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
        path: "activity/specific",
        element: <MainSpecActivity />,
      },
      {
        path: "universities",
        element: <MainUniversities />,
      },
      {
        path: "province",
        element: <MainProvince />,
      },
      {
        path: "city",
        element: <MainCity />,
      },
    ],
  },
]);

export default routes;
