/**
 * Projects Page - Dashboard Main View
 * Lists all mock projects with status and actions
 */

import { Link } from 'react-router-dom';
import { Plus, ExternalLink, MapPin } from 'lucide-react';
import { useProjects } from '@/contexts/ProjectContext';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { MockLabel } from '@/components/ui/MockLabel';

export default function Projects() {
  const { projects } = useProjects();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="text-muted-foreground mt-1">
            Manage your deployed applications
          </p>
        </div>
        <Link 
          to="/dashboard/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Project
        </Link>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <div className="text-center py-16 bg-card border border-border rounded-lg">
          <p className="text-muted-foreground mb-4">No projects yet</p>
          <Link 
            to="/dashboard/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create your first project
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <Link 
              key={project.id}
              to={`/dashboard/project/${project.id}`}
              className="block p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors font-mono">
                      {project.name}
                    </h3>
                    <MockLabel />
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <StatusBadge status={project.status} />
                    <span className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.region}
                    </span>
                    <span className="text-muted-foreground">
                      {project.type}
                    </span>
                    <span className="text-muted-foreground">
                      {project.appType}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
