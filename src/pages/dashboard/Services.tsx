/**
 * Services Page - Mock Services View
 * Lists deployed services/applications
 */

import { Link } from 'react-router-dom';
import { Server, Globe, MapPin } from 'lucide-react';
import { useProjects } from '@/contexts/ProjectContext';
import { MockLabel } from '@/components/ui/MockLabel';
import { StatusBadge } from '@/components/ui/StatusBadge';

export default function Services() {
  const { projects } = useProjects();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Services</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Deployed applications and web services
        </p>
      </div>

      {/* Services List */}
      {projects.length === 0 ? (
        <div className="text-center py-16 bg-card border border-border rounded-lg">
          <Server className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No services deployed</p>
          <p className="text-sm text-muted-foreground mt-1">
            Create a project to deploy a service
          </p>
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
                    <Server className="w-5 h-5 text-primary" />
                    <h3 className="font-medium text-foreground font-mono group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">
                      {project.appType}
                    </span>
                    <MockLabel />
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <StatusBadge status={project.status} />
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      Web Service
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.region}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {project.publicUrl}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
