/**
 * Realtime Page - Mock Realtime Service
 * Project-scoped realtime messaging limits and mock info
 */

import { MockLabel } from '@/components/ui/MockLabel';
import { AlertCircle } from 'lucide-react';

export default function Realtime() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Realtime</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Project-scoped realtime messaging. All messages and limits are per project and accessed via a single API (Mock).
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-4 mb-6 text-center">
        <p className="text-xs text-muted-foreground">
          <strong>Project-scoped:</strong> All realtime features are isolated per project.<br />
          <span className="block mt-2">This is a mock demonstration. No real messages are sent or received.</span>
        </p>
      </div>
      <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 border border-border rounded-lg mb-6">
        <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        <p className="text-sm text-muted-foreground">
          Realtime usage and limits are shown here. No actual data is processed.
        </p>
      </div>
    </div>
  );
}
