/**
 * Secrets & Environment Page - Mock Secrets Management
 * Project-scoped secrets and environment variables (mock)
 */

import { MockLabel } from '@/components/ui/MockLabel';
import { Key, AlertCircle } from 'lucide-react';

export default function Secrets() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Secrets & Environment</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Manage secrets and environment variables for this project. All secrets are project-scoped and accessed via a single API (Mock).
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-4 mb-6 text-center">
        <p className="text-xs text-muted-foreground">
          <strong>Project-scoped:</strong> Secrets and environment variables are isolated per project.<br />
          <span className="block mt-2">This is a mock demonstration. No real secrets are stored or used.</span>
        </p>
      </div>
      <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 border border-border rounded-lg mb-6">
        <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        <p className="text-sm text-muted-foreground">
          Secrets and environment management is for demonstration only. No actual data is stored.
        </p>
      </div>
    </div>
  );
}
