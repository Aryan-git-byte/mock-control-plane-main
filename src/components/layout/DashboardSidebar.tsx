/**
 * Dashboard Sidebar - Navigation Component
 * Mock developer platform navigation - SetuBase
 */

import { NavLink, useLocation } from 'react-router-dom';
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
  Rocket
} from 'lucide-react';

const navItems = [
  { to: '/dashboard', icon: Folder, label: 'Projects' },
  { to: '/dashboard/databases', icon: Database, label: 'Databases', children: [
    { to: '/dashboard/tables', icon: Layers, label: 'Tables' },
    { to: '/dashboard/sql-editor', icon: Database, label: 'SQL Editor' },
  ]},
  { to: '/dashboard/auth', icon: Key, label: 'Auth', children: [
    { to: '/dashboard/auth/users', icon: Users, label: 'Users' },
    { to: '/dashboard/auth/providers', icon: Key, label: 'Providers' },
  ]},
  { to: '/dashboard/storage', icon: HardDrive, label: 'Storage' },
  { to: '/dashboard/edge-functions', icon: Zap, label: 'Edge Functions' },
  { to: '/dashboard/services', icon: Server, label: 'Services' },
  { to: '/dashboard/deploys', icon: Rocket, label: 'Deploys' },
  { to: '/dashboard/logs', icon: ScrollText, label: 'Logs' },
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

export function DashboardSidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname.startsWith('/dashboard/project');
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <aside className="w-60 bg-sidebar border-r border-sidebar-border flex flex-col min-h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <NavLink to="/" className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-primary" />
          <span className="font-semibold text-foreground">SetuBase</span>
          <span className="mock-label ml-auto">Mock</span>
        </NavLink>
      </div>

      {/* Create Button */}
      <div className="p-3">
        <NavLink 
          to="/dashboard/new" 
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Project
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <div key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/dashboard'}
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
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground">
          <p className="font-mono">Region: India 🇮🇳</p>
          <p className="mt-1 opacity-60">v0.1.0-mock</p>
        </div>
      </div>
    </aside>
  );
}
