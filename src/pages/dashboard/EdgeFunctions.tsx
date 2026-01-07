/**
 * Edge Functions Page - Mock Serverless Functions
 * List of mock edge functions with status
 */

import { Zap, Play, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { MockLabel } from '@/components/ui/MockLabel';
import { mockEdgeFunctions } from '@/data/mockData';

function EdgeFunctions() {
  const { projectId } = useParams<{ projectId: string }>();
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'deployed':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-destructive" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-warning" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deployed':
        return 'text-success';
      case 'error':
        return 'text-destructive';
      default:
        return 'text-warning';
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-semibold">Edge Functions</h1>
              <MockLabel />
            </div>
            <p className="text-muted-foreground">
              Serverless functions running at the edge
            </p>
          </div>
          <button 
            disabled
            className="flex items-center gap-2 px-4 py-2 bg-orange-600/20 text-orange-600/50 rounded-md text-sm cursor-not-allowed"
          >
            <Zap className="w-4 h-4" />
            Deploy Function
          </button>
        </div>
      </div>

      {/* Functions List */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Name</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Runtime</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Invocations</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Last Deployed</th>
            </tr>
          </thead>
          <tbody>
            {mockEdgeFunctions.map((fn) => (
              <tr key={fn.name} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-600" />
                    <span className="font-mono text-foreground">{fn.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {fn.runtime}
                </td>
                <td className="px-4 py-3">
                  <span className={`flex items-center gap-1.5 capitalize ${getStatusColor(fn.status)}`}>
                    {getStatusIcon(fn.status)}
                    {fn.status}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  {fn.invocations.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-muted-foreground text-xs">
                  {formatDate(fn.lastDeployed)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Mock functions — deployment is disabled
      </p>
    </div>
  );
}

export default EdgeFunctions;