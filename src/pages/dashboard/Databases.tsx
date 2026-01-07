/**
 * Databases Page - Mock Database View
 * Lists mock database instances
 */

import { Database, Server, MapPin } from 'lucide-react';
import { useProjects } from '@/contexts/ProjectContext';
import { MockLabel } from '@/components/ui/MockLabel';
import { StatusBadge } from '@/components/ui/StatusBadge';

export default function Databases() {
  const { projects } = useProjects();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Databases</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Managed PostgreSQL instances for your projects
        </p>
      </div>

      {/* Database List */}
      {projects.length === 0 ? (
        <div className="text-center py-16 bg-card border border-border rounded-lg">
          <Database className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No databases yet</p>
          <p className="text-sm text-muted-foreground mt-1">
            Create a project to provision a database
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="p-5 bg-card border border-border rounded-lg"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-primary" />
                    <h3 className="font-medium text-foreground font-mono">
                      {project.name}-db
                    </h3>
                    <MockLabel />
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <StatusBadge status={project.status} />
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Server className="w-3 h-3" />
                      PostgreSQL 15
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.region}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    Connection: postgres://mock:****@db.{project.name}.supabase.co:5432/postgres
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
