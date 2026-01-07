/**
 * API Keys Page - Mock API Key Management
 * Lists and manages mock API keys for a project
 */

import { Key, EyeOff } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { mockApiKeys } from '@/data/mockData';
import { MockLabel } from '@/components/ui/MockLabel';

export default function ApiKeys() {
  const { projectId } = useParams<{ projectId: string }>();
  const keys = mockApiKeys.filter(k => k.projectId === projectId);

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">API Keys</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">Manage your project's API keys</p>
      </div>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Name</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Key</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Created At</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((key) => (
              <tr key={key.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-mono">{key.name}</td>
                <td className="px-4 py-3 font-mono flex items-center gap-2">
                  <span className="select-all">{key.key.slice(0, 12)}•••••••••••</span>
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                </td>
                <td className="px-4 py-3">{key.role}</td>
                <td className="px-4 py-3">{key.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
