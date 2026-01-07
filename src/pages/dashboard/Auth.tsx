/**
 * Auth Page - Authentication & Authorization Management
 * Container page that shows auth overview or redirects to users/providers
 */

import { useParams, Link } from 'react-router-dom';
import { Key, Users, Server } from 'lucide-react';
import { MockLabel } from '@/components/ui/MockLabel';

export default function Auth() {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Authentication</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Manage user authentication and OAuth providers
        </p>
      </div>

      {/* Auth Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Users */}
        <Link
          to={`/dashboard/project/${projectId}/auth/users`}
          className="block p-6 bg-card border border-border rounded-lg hover:border-orange-600/50 transition-colors group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-orange-600/10 rounded-lg">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-orange-600 transition-colors">
            Users
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage project users and authentication records
          </p>
        </Link>

        {/* Providers */}
        <Link
          to={`/dashboard/project/${projectId}/auth/providers`}
          className="block p-6 bg-card border border-border rounded-lg hover:border-orange-600/50 transition-colors group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-orange-600/10 rounded-lg">
              <Key className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-orange-600 transition-colors">
            Providers
          </h3>
          <p className="text-sm text-muted-foreground">
            Configure OAuth and authentication providers
          </p>
        </Link>
      </div>

      {/* Info Banner */}
      <div className="mt-8 p-4 bg-muted/30 border border-border rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Auth Status:</strong> All authentication features are mock-only for demonstration purposes.
        </p>
      </div>
    </div>
  );
}
