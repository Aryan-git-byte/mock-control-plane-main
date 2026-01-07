/**
 * SQL Editor Page - Mock SQL Query Interface
 * Code editor-style panel with placeholder SQL
 */

import { Database, Play, AlertCircle } from 'lucide-react';
import { MockLabel } from '@/components/ui/MockLabel';

const placeholderSQL = `-- Mock SQL Editor
-- Write your SQL queries here

SELECT 
  id,
  email,
  created_at
FROM users
WHERE status = 'active'
ORDER BY created_at DESC
LIMIT 10;

-- Note: This is a mock interface
-- No queries will be executed`;

export default function SqlEditor() {
  return (
    <div className="p-8 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">SQL Editor</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Write and execute SQL queries
        </p>
      </div>

      {/* Banner */}
      <div className="flex items-center gap-3 px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg mb-6">
        <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
        <p className="text-sm text-foreground">
          <strong>Mock SQL Editor</strong> — No queries will be executed. This is a demonstration interface.
        </p>
      </div>

      {/* Editor */}
      <div className="flex-1 bg-card border border-border rounded-lg overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Query Editor</span>
          </div>
          <button 
            disabled
            className="flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary/50 rounded text-sm cursor-not-allowed"
          >
            <Play className="w-4 h-4" />
            Run Query
          </button>
        </div>

        {/* Code Area */}
        <div className="flex-1 p-4 overflow-auto">
          <pre className="font-mono text-sm text-foreground/80 whitespace-pre-wrap">
            {placeholderSQL}
          </pre>
        </div>
      </div>

      {/* Results Panel */}
      <div className="mt-4 bg-card border border-border rounded-lg">
        <div className="px-4 py-3 bg-muted/50 border-b border-border">
          <span className="text-sm text-muted-foreground">Results</span>
        </div>
        <div className="p-8 text-center">
          <Database className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-50" />
          <p className="text-muted-foreground text-sm">
            Run a query to see results
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            (Mock interface — queries are not executed)
          </p>
        </div>
      </div>
    </div>
  );
}