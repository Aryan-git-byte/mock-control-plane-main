/**
 * Usage Stats Page - Mock Usage Overview
 * Shows mock usage stats for a project
 */

import { useParams } from 'react-router-dom';
import { mockUsageStats } from '@/data/mockData';
import { MockLabel } from '@/components/ui/MockLabel';

export default function UsageStats() {
  const { projectId } = useParams<{ projectId: string }>();
  const stats = mockUsageStats.find(s => s.projectId === projectId);

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Usage Stats</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">Monitor your project's resource usage</p>
      </div>
      {stats ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-1">Bandwidth</p>
            <p className="text-2xl font-semibold">{stats.bandwidth} GB</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-1">Database Size</p>
            <p className="text-2xl font-semibold">{stats.dbSize} MB</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-1">Storage</p>
            <p className="text-2xl font-semibold">{stats.storage} GB</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-1">Requests (24h)</p>
            <p className="text-2xl font-semibold">{stats.requests}</p>
          </div>
        </div>
      ) : (
        <div className="text-muted-foreground">No usage data for this project.</div>
      )}
    </div>
  );
}
