/**
 * Auth Providers Page - Mock Auth Provider Configuration
 * List of authentication providers with status
 */

import { Key, Mail, Phone, Chrome, Github, Apple, CheckCircle, XCircle } from 'lucide-react';
import { MockLabel } from '@/components/ui/MockLabel';
import { mockAuthProviders } from '@/data/mockData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Phone,
  Chrome,
  Github,
  Apple,
};

export default function AuthProviders() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Auth Providers</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Configure authentication methods
        </p>
      </div>

      {/* Providers List */}
      <div className="space-y-4">
        {mockAuthProviders.map((provider) => {
          const IconComponent = iconMap[provider.icon] || Key;
          
          return (
            <div 
              key={provider.name}
              className="bg-card border border-border rounded-lg p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${provider.enabled ? 'bg-primary/10' : 'bg-muted'}`}>
                    <IconComponent className={`w-5 h-5 ${provider.enabled ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{provider.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {provider.enabled 
                        ? 'Users can sign in with this method' 
                        : 'Not configured (Mock)'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {provider.enabled ? (
                    <span className="flex items-center gap-1.5 text-success text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Enabled
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <XCircle className="w-4 h-4" />
                      Disabled
                    </span>
                  )}
                  <MockLabel />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-muted-foreground mt-6 text-center">
        Mock configuration — provider settings are not persisted
      </p>
    </div>
  );
}