/**
 * Settings Page - Project Configuration
 * Mock settings with disabled actions
 */

import { useState } from 'react';
import { MapPin, Download, Server, Trash2, AlertTriangle, FileJson, Info, Zap } from 'lucide-react';
import { MockLabel } from '@/components/ui/MockLabel';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Settings() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = () => {
    setShowDeleteConfirm(false);
    // Mock action - just closes the dialog
  };

  return (
    <div className="p-8 max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Platform and project configuration
        </p>
      </div>

      <div className="space-y-6">
        {/* Plan & Usage */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <Zap className="w-5 h-5 text-orange-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium mb-1">Plan & Usage</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Current plan and resource usage (Mock)
              </p>
              
              {/* Current Plan */}
              <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Current Plan</span>
                  <span className="text-sm font-mono font-bold text-orange-600">STARTER — ₹499/mo</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  For indie devs and early production apps
                </p>
                <button className="text-xs text-orange-600 hover:underline">
                  Change plan
                </button>
              </div>

              {/* Usage Indicators */}
              <div className="space-y-4">
                {/* Database Storage */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Database Storage</span>
                    <span className="font-mono text-sm">2.3 GB / 5 GB</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-orange-600 rounded-full h-2" 
                      style={{ width: '46%' }}
                    ></div>
                  </div>
                </div>

                {/* Monthly Active Users (Auth) */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Monthly Active Users</span>
                    <span className="font-mono text-sm">3,420 / 10,000</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-orange-600 rounded-full h-2" 
                      style={{ width: '34%' }}
                    ></div>
                  </div>
                </div>

                {/* Realtime Messages */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Realtime Messages</span>
                    <span className="font-mono text-sm">245,000 / 1,000,000</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-orange-600 rounded-full h-2" 
                      style={{ width: '24%' }}
                    ></div>
                  </div>
                </div>

                {/* Function Invocations */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Function Invocations</span>
                    <span className="font-mono text-sm">156,000 / 1,000,000</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-orange-600 rounded-full h-2" 
                      style={{ width: '15%' }}
                    ></div>
                  </div>
                </div>

                {/* Storage */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Object Storage</span>
                    <span className="font-mono text-sm">4.2 GB / 10 GB</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-orange-600 rounded-full h-2" 
                      style={{ width: '42%' }}
                    ></div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                <MockLabel /> All usage values are simulated for demonstration. 
                Soft warnings appear at 80% utilization.
              </p>
            </div>
          </div>
        </div>

        {/* Region */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium mb-1">Region</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Infrastructure location for your resources
              </p>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-md text-sm w-fit">
                <span>India 🇮🇳</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">ap-south-1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Export Project Configuration */}
        <div className="bg-card border border-border rounded-lg p-6 opacity-60">
          <div className="flex items-start gap-4">
            <FileJson className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium">Export Project Configuration (JSON)</h3>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Export your entire project configuration as JSON. This enables portability and ensures no vendor lock-in — you can migrate your setup to any compatible platform.</p>
                  </TooltipContent>
                </Tooltip>
                <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">
                  Disabled
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Download your complete project setup for backup or migration
              </p>
              <button 
                disabled
                className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm cursor-not-allowed"
              >
                Export Configuration
              </button>
            </div>
          </div>
        </div>

        {/* Data Export */}
        <div className="bg-card border border-border rounded-lg p-6 opacity-60">
          <div className="flex items-start gap-4">
            <Download className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium">Data Export</h3>
                <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">
                  Disabled
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Export your database and configuration
              </p>
              <button 
                disabled
                className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm cursor-not-allowed"
              >
                Export Data
              </button>
            </div>
          </div>
        </div>

        {/* Self-host */}
        <div className="bg-card border border-border rounded-lg p-6 opacity-60">
          <div className="flex items-start gap-4">
            <Server className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium">Self-host Option</h3>
                <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">
                  Coming Later
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Deploy to your own infrastructure
              </p>
              <button 
                disabled
                className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm cursor-not-allowed"
              >
                Configure Self-hosting
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-card border border-destructive/30 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <Trash2 className="w-5 h-5 text-destructive mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-destructive mb-1">Danger Zone</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Permanently delete this project and all associated resources
              </p>
              
              {!showDeleteConfirm ? (
                <button 
                  onClick={() => setShowDeleteConfirm(true)}
                  className="px-4 py-2 bg-destructive/10 text-destructive border border-destructive/30 rounded-md text-sm hover:bg-destructive/20 transition-colors"
                >
                  Delete Project
                </button>
              ) : (
                <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <div className="flex items-center gap-2 text-destructive mb-3">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm font-medium">Are you sure?</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    This is a mock action. In a real platform, this would delete everything.
                  </p>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleDelete}
                      className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md text-sm hover:bg-destructive/90 transition-colors"
                    >
                      Yes, Delete (Mock)
                    </button>
                    <button 
                      onClick={() => setShowDeleteConfirm(false)}
                      className="px-4 py-2 bg-muted text-foreground rounded-md text-sm hover:bg-muted/80 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
