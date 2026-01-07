/**
 * Storage Page - Mock File Storage View
 * Bucket list with mock file sizes and counts
 */

import { HardDrive, Folder, Upload, Globe, Lock, AlertCircle } from 'lucide-react';
import { MockLabel } from '@/components/ui/MockLabel';
import { mockStorageBuckets } from '@/data/mockData';

export default function Storage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-semibold">Storage</h1>
              <MockLabel />
            </div>
            <p className="text-muted-foreground">
              Manage file storage buckets
            </p>
          </div>
          <button 
            disabled
            className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary/50 rounded-md text-sm cursor-not-allowed"
          >
            <Upload className="w-4 h-4" />
            Upload File
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 border border-border rounded-lg mb-6">
        <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        <p className="text-sm text-muted-foreground">
          <strong>Mock storage</strong> — No files are actually stored. This is a demonstration interface.
        </p>
      </div>

      {/* Buckets List */}
      <div className="grid gap-4">
        {mockStorageBuckets.map((bucket) => (
          <div 
            key={bucket.name}
            className="bg-card border border-border rounded-lg p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Folder className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium font-mono text-foreground">{bucket.name}</h3>
                    {bucket.public ? (
                      <span className="flex items-center gap-1 text-xs text-success bg-success/10 px-2 py-0.5 rounded">
                        <Globe className="w-3 h-3" />
                        Public
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        <Lock className="w-3 h-3" />
                        Private
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {bucket.files.toLocaleString()} files • {bucket.size}
                  </p>
                </div>
              </div>
              <MockLabel />
            </div>
          </div>
        ))}
      </div>

      {/* Total Usage */}
      <div className="mt-6 p-4 bg-card border border-border rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HardDrive className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Total Storage Used</p>
              <p className="font-semibold text-foreground">2.47 GB</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Files</p>
            <p className="font-semibold text-foreground">
              {mockStorageBuckets.reduce((acc, b) => acc + b.files, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Mock values — no real storage connection
      </p>
    </div>
  );
}