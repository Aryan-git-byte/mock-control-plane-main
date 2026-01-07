/**
 * Backend Services Page - Mock Backend Hosting
 * List and manage backend services for a project
 */

import { useParams } from 'react-router-dom';
import { MockLabel } from '@/components/ui/MockLabel';
import { mockBackendServices } from '@/data/mockData';
import { Plus } from 'lucide-react';

export default function BackendServices() {
  const { projectId } = useParams<{ projectId: string }>();
  // In a real app, filter services by projectId

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Backend Services</h1>
          <p className="text-muted-foreground mt-1">
            Host and manage your backend APIs and servers with one click
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700 transition-colors">
          <Plus className="w-4 h-4" />
          Deploy New Service
        </button>
      </div>
      <div className="grid gap-6">
        {mockBackendServices.length === 0 ? (
          <div className="text-center py-16 bg-card border border-border rounded-lg">
            <p className="text-muted-foreground mb-4">No backend services deployed yet</p>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700 transition-colors mb-4">
              <Plus className="w-4 h-4" />
              Deploy New Service
            </button>
            <p className="text-xs text-muted-foreground mt-4">Want only a backend, no database? You can deploy standalone APIs and microservices here without linking a database.</p>
          </div>
        ) : (
          mockBackendServices.map(service => (
            <div key={service.id} className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-lg text-foreground">{service.name}</span>
                  <MockLabel />
                </div>
                <p className="text-muted-foreground text-sm mb-1">{service.description}</p>
                <p className="text-xs text-muted-foreground">{service.url}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs px-2 py-1 rounded ${service.status === 'running' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                  {service.status}
                </span>
                <button className="px-3 py-1 text-xs bg-muted rounded hover:bg-muted/70 transition-colors">View Logs</button>
                <button className="px-3 py-1 text-xs bg-muted rounded hover:bg-muted/70 transition-colors">Restart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
