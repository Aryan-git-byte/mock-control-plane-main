
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Rocket, CheckCircle, XCircle, GitBranch, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { MockLabel } from '@/components/ui/MockLabel';
import { mockDeploys } from '@/data/mockData';

function Deploys() {

  const { projectId } = useParams<{ projectId: string }>();
  // In a real app, filter deploys by projectId
  const [expandedDeploy, setExpandedDeploy] = useState<string | null>(null);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Deploys</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Deployment history and logs
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Total Deploys</p>
          <p className="text-2xl font-semibold">{mockDeploys.length}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Successful</p>
          <p className="text-2xl font-semibold text-success">
            {mockDeploys.filter(d => d.status === 'success').length}
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Failed</p>
          <p className="text-2xl font-semibold text-destructive">
            {mockDeploys.filter(d => d.status === 'failed').length}
          </p>
        </div>
      </div>

      {/* Deploys Timeline */}
      <div className="space-y-4">
        {mockDeploys.map((deploy) => (
          <div 
            key={deploy.id}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            {/* Deploy Header */}
            <button
              onClick={() => setExpandedDeploy(expandedDeploy === deploy.id ? null : deploy.id)}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                {deploy.status === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-success" />
                ) : (
                  <XCircle className="w-5 h-5 text-destructive" />
                )}
                <div className="text-left">
                  <p className="font-medium text-foreground">{deploy.commit}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3" />
                      {deploy.branch}
                    </span>
                    <span className="font-mono">{deploy.sha}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {deploy.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {formatDate(deploy.timestamp)}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  deploy.status === 'success' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-destructive/10 text-destructive'
                }`}>
                  {deploy.status.toUpperCase()}
                </span>
                {expandedDeploy === deploy.id ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            </button>

            {/* Deploy Logs (Expanded) */}
            {expandedDeploy === deploy.id && (
              <div className="border-t border-border bg-muted/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Deploy Logs</span>
                  <MockLabel />
                </div>
                <div className="bg-background rounded border border-border p-3 max-h-[200px] overflow-y-auto">
                  {deploy.logs.map((log, i) => (
                    <div key={i} className="font-mono text-xs flex gap-3 py-0.5">
                      <span className="text-muted-foreground/60 flex-shrink-0">
                        {formatTime(log.timestamp)}
                      </span>
                      <span className={
                        log.message.includes('ERROR') || log.message.includes('failed')
                          ? 'text-destructive'
                          : 'text-muted-foreground'
                      }>
                        {log.message}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-6 text-center">
        Mock deployment history — no real builds
      </p>
    </div>
  );
}

export default Deploys;