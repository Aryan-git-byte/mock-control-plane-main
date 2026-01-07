/**
 * Dashboard Sidebar - Navigation Component
 * Mock developer platform navigation - SetuBase
 */

import { NavLink, useLocation, useParams, Link } from 'react-router-dom';
import { 
  Folder, 
  Database, 
  Server, 
  ScrollText, 
  Settings,
  Plus,
  Layers,
  Users,
  Key,
  HardDrive,
  Zap,
  Rocket,
  Radio,
  TrendingUp
} from 'lucide-react';


function getNavItems(projectId?: string) {
  if (!projectId) {
    return [
      { to: '/dashboard', icon: Folder, label: 'Projects' },
      { to: '/dashboard/new', icon: Plus, label: 'New Project' },
    ];
  }
  // Unified service catalog, project-centric, single API
  return [
    { to: `/dashboard/project/${projectId}`, icon: Folder, label: 'Overview' },
    { to: `/dashboard/project/${projectId}/api-keys`, icon: Key, label: 'API Keys' },
    { to: `/dashboard/project/${projectId}/usage`, icon: Server, label: 'Usage Stats' },
    { to: `/dashboard/project/${projectId}/backups`, icon: Database, label: 'Backups' },
    // Service Catalog
    { to: `/dashboard/project/${projectId}/databases`, icon: Database, label: 'Database', children: [
      { to: `/dashboard/project/${projectId}/tables`, icon: Layers, label: 'Tables' },
      { to: `/dashboard/project/${projectId}/sql-editor`, icon: Database, label: 'SQL Editor' },
    ]},
    { to: `/dashboard/project/${projectId}/auth`, icon: Key, label: 'Auth', children: [
      { to: `/dashboard/project/${projectId}/auth/users`, icon: Users, label: 'Users' },
      { to: `/dashboard/project/${projectId}/auth/providers`, icon: Key, label: 'Providers' },
    ]},
    { to: `/dashboard/project/${projectId}/realtime`, icon: Radio, label: 'Realtime' },
    { to: `/dashboard/project/${projectId}/storage`, icon: HardDrive, label: 'Storage' },
    { to: `/dashboard/project/${projectId}/edge-functions`, icon: Zap, label: 'Edge Functions' },
    { to: `/dashboard/project/${projectId}/backend`, icon: Server, label: 'Application Runtime' },
    { to: `/dashboard/project/${projectId}/secrets`, icon: Key, label: 'Secrets & Env Vars' },
    { to: `/dashboard/project/${projectId}/logs`, icon: ScrollText, label: 'Logs & Observability' },
    { to: `/dashboard/project/${projectId}/settings`, icon: Settings, label: 'Settings' },
  ];
}


export function DashboardSidebar() {
  const location = useLocation();
  const params = useParams();
  const projectId = params.projectId;
  const navItems = getNavItems(projectId);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <aside className="w-60 bg-sidebar border-r border-sidebar-border flex flex-col min-h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <NavLink to="/" className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-orange-600" />
          <span className="font-semibold text-foreground">SetuBase</span>
          <span className="mock-label ml-auto">Mock</span>
        </NavLink>
      </div>

      {/* Single API Note */}
      {projectId && (
        <div className="px-4 py-2 border-b border-sidebar-border bg-card/80">
          <span className="text-xs text-muted-foreground">
            All services are project-specific and accessed via a single API (Mock)
          </span>
        </div>
      )}

      {/* Show Create Button only if not in a project */}
      {!projectId && (
        <div className="p-3">
          <NavLink 
            to="/dashboard/new" 
            className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Project
          </NavLink>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <div key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === `/dashboard` || item.to.endsWith(`/overview`)}
              className={`nav-item ${isActive(item.to) && !item.children ? 'nav-item-active' : ''}`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
            {item.children && (
              <div className="ml-6 mt-1 space-y-1">
                {item.children.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    className={`nav-item text-sm ${isActive(child.to) ? 'nav-item-active' : ''}`}
                  >
                    <child.icon className="w-3 h-3" />
                    <span>{child.label}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-4">
        {/* Current Plan */}
        <div className="p-3 bg-card/80 rounded-lg border border-sidebar-border">
          <div className="text-xs font-semibold text-foreground mb-1">Current Plan</div>
          <div className="text-sm font-bold text-orange-600 mb-2">STARTER — ₹499/mo</div>
          <Link 
            to="/dashboard/settings"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <TrendingUp className="w-3 h-3" />
            View usage
          </Link>
        </div>

        {/* Pricing Link */}
        <a 
          href="/#pricing"
          className="block px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors text-center border border-sidebar-border"
        >
          See all plans →
        </a>

        {/* Version */}
        <div className="text-xs text-muted-foreground opacity-60">
          <p className="font-mono">Region: India 🇮🇳</p>
          <p className="mt-1">v0.1.0-mock</p>
        </div>
      </div>
    </aside>
  );
}
