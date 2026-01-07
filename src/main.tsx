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
import AuthUsers from "./pages/dashboard/AuthUsers";
import AuthProviders from "./pages/dashboard/AuthProviders";
import Storage from "./pages/dashboard/Storage";
import EdgeFunctions from "./pages/dashboard/EdgeFunctions";
import Services from "./pages/dashboard/Services";
import Deploys from "./pages/dashboard/Deploys";
import Logs from "./pages/dashboard/Logs";
import Settings from "./pages/dashboard/Settings";

import "./index.css";

const router = createBrowserRouter(
  [
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
            { path: "databases", element: <Databases /> },
            { path: "tables", element: <Tables /> },
            { path: "sql-editor", element: <SqlEditor /> },
            { path: "auth/users", element: <AuthUsers /> },
            { path: "auth/providers", element: <AuthProviders /> },
            { path: "storage", element: <Storage /> },
            { path: "edge-functions", element: <EdgeFunctions /> },
            { path: "services", element: <Services /> },
            { path: "deploys", element: <Deploys /> },
            { path: "logs", element: <Logs /> },
            { path: "settings", element: <Settings /> },
          ],
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
