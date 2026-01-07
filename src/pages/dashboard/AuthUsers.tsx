/**
 * Auth Users Page - Mock User Management
 * Table of mock authenticated users
 */

import { Users, Mail, Phone } from 'lucide-react';
import { MockLabel } from '@/components/ui/MockLabel';
import { mockAuthUsers } from '@/data/mockData';

export default function AuthUsers() {
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Users</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Manage authenticated users
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Total Users</p>
          <p className="text-2xl font-semibold">{mockAuthUsers.length}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Email Provider</p>
          <p className="text-2xl font-semibold">
            {mockAuthUsers.filter(u => u.provider === 'email').length}
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Phone Provider</p>
          <p className="text-2xl font-semibold">
            {mockAuthUsers.filter(u => u.provider === 'phone').length}
          </p>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">User ID</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Email</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Provider</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Created At</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Last Sign In</th>
            </tr>
          </thead>
          <tbody>
            {mockAuthUsers.map((user) => (
              <tr key={user.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  {user.id}
                </td>
                <td className="px-4 py-3">
                  <span className="text-foreground">{user.email}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    {user.provider === 'email' ? (
                      <Mail className="w-3 h-3" />
                    ) : (
                      <Phone className="w-3 h-3" />
                    )}
                    {user.provider}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground text-xs">
                  {formatDate(user.createdAt)}
                </td>
                <td className="px-4 py-3 text-muted-foreground text-xs">
                  {formatDate(user.lastSignIn)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Mock users — read-only view, no edit actions
      </p>
    </div>
  );
}