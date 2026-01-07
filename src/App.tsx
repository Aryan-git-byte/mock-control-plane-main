/**
 * App Component - SetuBase Mock Developer Platform
 * Routes and providers for the entire application
 * 
 * This is a PURE MOCK application - no real backend, auth, or API calls.
 * All data is stored in local React state.
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectProvider } from "@/contexts/ProjectContext";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/layout/DashboardLayout";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ProjectProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<Index />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Projects />} />
              <Route path="new" element={<NewProject />} />
              <Route path="project/:projectId" element={<ProjectOverview />} />
              <Route path="databases" element={<Databases />} />
              <Route path="tables" element={<Tables />} />
              <Route path="sql-editor" element={<SqlEditor />} />
              <Route path="auth/users" element={<AuthUsers />} />
              <Route path="auth/providers" element={<AuthProviders />} />
              <Route path="storage" element={<Storage />} />
              <Route path="edge-functions" element={<EdgeFunctions />} />
              <Route path="services" element={<Services />} />
              <Route path="deploys" element={<Deploys />} />
              <Route path="logs" element={<Logs />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ProjectProvider>
  </QueryClientProvider>
);

export default App;
