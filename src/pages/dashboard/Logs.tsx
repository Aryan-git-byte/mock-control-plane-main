/**
 * Logs Page - Mock Log Viewer
 * Displays deploy and runtime logs
 */

import { useState } from 'react';
import { ScrollText, Rocket, Play } from 'lucide-react';
import { MockLabel } from '@/components/ui/MockLabel';
import { mockDeployLogs, mockRuntimeLogs } from '@/data/mockData';

type LogTab = 'deploy' | 'runtime';

export default function Logs() {
  const [activeTab, setActiveTab] = useState<LogTab>('deploy');

  const logs = activeTab === 'deploy' ? mockDeployLogs : mockRuntimeLogs;

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'warn':
        return 'text-warning';
      case 'error':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Logs</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          View deployment and runtime logs
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-border">
        <button
          onClick={() => setActiveTab('deploy')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'deploy'
              ? 'border-primary text-foreground'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          <Rocket className="w-4 h-4" />
          Deploy Logs
        </button>
        <button
          onClick={() => setActiveTab('runtime')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'runtime'
              ? 'border-primary text-foreground'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          <Play className="w-4 h-4" />
          Runtime Logs
        </button>
      </div>

      {/* Log Output */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
          <div className="flex items-center gap-2">
            <ScrollText className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {activeTab === 'deploy' ? 'Latest Deployment' : 'Live Output'}
            </span>
          </div>
          <MockLabel />
        </div>
        <div className="p-4 max-h-[500px] overflow-y-auto">
          {logs.map((log, index) => {
            const logWithLevel = log as { timestamp: string; message: string; level?: string };
            return (
              <div key={index} className="log-line flex items-start gap-4">
                <span className="text-muted-foreground/60 flex-shrink-0 w-20">
                  {formatTime(logWithLevel.timestamp)}
                </span>
                {logWithLevel.level && (
                  <span className={`flex-shrink-0 w-12 uppercase text-xs ${getLevelColor(logWithLevel.level)}`}>
                    {logWithLevel.level}
                  </span>
                )}
                <span className={getLevelColor(logWithLevel.level)}>
                  {logWithLevel.message}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        These are mock logs for demonstration purposes
      </p>
    </div>
  );
}
