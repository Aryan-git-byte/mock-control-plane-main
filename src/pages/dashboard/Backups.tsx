/**
 * Backups Page - Mock Project Backups
 * Lists mock backups for a project
 */

import { useParams } from 'react-router-dom';
import { mockBackups } from '@/data/mockData';
import { MockLabel } from '@/components/ui/MockLabel';

export default function Backups() {
  const { projectId } = useParams<{ projectId: string }>();
  const backups = mockBackups.filter(b => b.projectId === projectId);

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Backups</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">View and manage your project's backups</p>
      </div>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Backup ID</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Created At</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Size</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {backups.map((backup) => (
              <tr key={backup.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-mono">{backup.id}</td>
                <td className="px-4 py-3">{new Date(backup.createdAt).toLocaleString()}</td>
                <td className="px-4 py-3">{backup.size}</td>
                <td className="px-4 py-3">{backup.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
