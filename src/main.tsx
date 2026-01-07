import ApiKeys from "./pages/dashboard/ApiKeys";
import UsageStats from "./pages/dashboard/UsageStats";
import Backups from "./pages/dashboard/Backups";
import BackendServices from "./pages/dashboard/BackendServices";
import Realtime from "./pages/dashboard/Realtime";
import Secrets from "./pages/dashboard/Secrets";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/layout/DashboardLayout";

// Dashboard pages
import Projects from "./pages/dashboard/Projects";
import NewProject from "./pages/dashboard/NewProject";
import ProjectOverview from "./pages/dashboard/ProjectOverview";
import Databases from "./pages/dashboard/Databases";
import Tables from "./pages/dashboard/Tables";
import SqlEditor from "./pages/dashboard/SqlEditor";
import Auth from "./pages/dashboard/Auth";
import AuthUsers from "./pages/dashboard/AuthUsers";
import AuthProviders from "./pages/dashboard/AuthProviders";
import ProjectStorage from "./pages/dashboard/Storage";
import EdgeFunctions from "./pages/dashboard/EdgeFunctions";
import Services from "./pages/dashboard/Services";
import Deploys from "./pages/dashboard/Deploys";
import Logs from "./pages/dashboard/Logs";
import Settings from "./pages/dashboard/Settings";

import "./index.css";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Index /> },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Projects /> },
          { path: "new", element: <NewProject /> },
          { path: "project/:projectId", element: <ProjectOverview /> },
          { path: "project/:projectId/databases", element: <Databases /> },
          { path: "project/:projectId/tables", element: <Tables /> },
          { path: "project/:projectId/sql-editor", element: <SqlEditor /> },
          { path: "project/:projectId/auth", element: <Auth /> },
          { path: "project/:projectId/auth/users", element: <AuthUsers /> },
          { path: "project/:projectId/auth/providers", element: <AuthProviders /> },
          { path: "project/:projectId/realtime", element: <Realtime /> },
          { path: "project/:projectId/secrets", element: <Secrets /> },
          { path: "project/:projectId/storage", element: <ProjectStorage /> },
          { path: "project/:projectId/edge-functions", element: <EdgeFunctions /> },
          { path: "project/:projectId/services", element: <Services /> },
           { path: "project/:projectId/backend", element: <BackendServices /> },
          { path: "project/:projectId/deploys", element: <Deploys /> },
          { path: "project/:projectId/logs", element: <Logs /> },
          { path: "project/:projectId/settings", element: <Settings /> },
          { path: "project/:projectId/api-keys", element: <ApiKeys /> },
          { path: "project/:projectId/usage", element: <UsageStats /> },
          { path: "project/:projectId/backups", element: <Backups /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
