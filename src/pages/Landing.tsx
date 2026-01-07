/**
 * Landing Page - SetuBase Developer Platform Mock
 * Entry point with hero section and CTA
 */

import { Link } from 'react-router-dom';
import { Layers, Database, Server, Zap, ArrowRight, AlertCircle } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">SetuBase</span>
            <span className="mock-label">Mock</span>
          </div>
          <Link 
            to="/dashboard"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-8">
          {/* Mock Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
            <AlertCircle className="w-4 h-4" />
            This is a mock UI, not a live platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            One platform for backend and deployment
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Provision database, auth, and deploy apps from a single control plane. 
            All infrastructure, unified.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Mock Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-8 border-t border-border">
            <div className="p-6 rounded-lg bg-card border border-border text-left">
              <Database className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Backend Stack</h3>
              <p className="text-sm text-muted-foreground">
                PostgreSQL + Auth + Realtime. Powered by open-source components.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-left">
              <Server className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Auto Deployment</h3>
              <p className="text-sm text-muted-foreground">
                Deploy from Git with zero configuration. Support for Node.js, Python, and more.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-left">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Edge Network</h3>
              <p className="text-sm text-muted-foreground">
                Global CDN with India-first infrastructure for low latency.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>SetuBase Mock Platform — For demonstration purposes only</p>
        </div>
      </footer>
    </div>
  );
}
