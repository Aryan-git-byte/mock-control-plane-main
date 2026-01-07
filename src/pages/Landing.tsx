/**
 * Landing Page - SetuBase Developer Platform Mock
 * Minimal, clean landing page with India-first infrastructure
 */

import { Link } from 'react-router-dom';
import { Layers, Database, Server, Zap, ArrowRight, AlertCircle, Check, Code2, Globe, Lock } from 'lucide-react';
import { MockLabel } from '@/components/ui/MockLabel';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-orange-600" />
            <span className="font-bold text-lg">SetuBase</span>
            <MockLabel />
          </div>
          <nav className="flex items-center gap-6">
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <Link 
              to="/dashboard"
              className="text-sm px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              Dashboard →
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col px-6">
        {/* Hero Section */}
        <section className="container mx-auto py-20 space-y-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground border border-border">
              <AlertCircle className="w-4 h-4" />
              Mock Platform — For demonstration purposes
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Backend infrastructure,<br />
                <span className="text-orange-600">
                  simplified
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              One platform. Database, Auth, Realtime, Storage, Edge Functions, and App Runtime. 
              Priced in ₹. Data in India. No vendor lock-in.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link 
                to="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all"
              >
                Launch Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors border border-border"
              >
                See Pricing
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-orange-600" />
                <span>Free tier included</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-orange-600" />
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-orange-600" />
                <span>India infrastructure</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto py-20 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Everything you need</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg bg-card border border-border hover:border-orange-600/50 transition-colors">
                <Database className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">PostgreSQL Database</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enterprise-grade database in India (ap-south-1). From 500 MB on Free tier to 25 GB on Pro. Auto-scaling and point-in-time recovery.
                </p>
              </div>
              <div className="p-8 rounded-lg bg-card border border-border hover:border-orange-600/50 transition-colors">
                <Lock className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Authentication</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built-in auth with email/password, OAuth providers, and MFA. From 1,000 MAU (Free) to 100,000 MAU (Pro).
                </p>
              </div>
              <div className="p-8 rounded-lg bg-card border border-border hover:border-orange-600/50 transition-colors">
                <Zap className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Realtime & Functions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  WebSocket-based realtime subscriptions and serverless Edge Functions. Scale from 50K to 10M messages/month.
                </p>
              </div>
              <div className="p-8 rounded-lg bg-card border border-border hover:border-orange-600/50 transition-colors">
                <Server className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">App Runtime & Deployment</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Deploy Node.js, Python, and more from Git. From shared compute to 2 vCPU with 2 GB RAM on Pro.
                </p>
              </div>
              <div className="p-8 rounded-lg bg-card border border-border hover:border-orange-600/50 transition-colors">
                <Globe className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global CDN & Storage</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Object storage with India-first CDN. From 1 GB (Free) to 100 GB (Pro). Predictable overage pricing at ₹20/GB.
                </p>
              </div>
              <div className="p-8 rounded-lg bg-card border border-border hover:border-orange-600/50 transition-colors">
                <Code2 className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Single Unified API</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No vendor lock-in. All services via one API. Export config as JSON. Self-host option on Enterprise plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto py-20 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-3">Simple, predictable pricing</h2>
              <p className="text-muted-foreground">Pay per project, not per service. In ₹.</p>
              <MockLabel className="mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* FREE */}
              <div className="rounded-lg border border-border p-6 bg-card hover:border-orange-600/50 transition-colors">
                <div className="mb-4">
                  <h3 className="text-lg font-bold">FREE</h3>
                  <p className="text-3xl font-bold text-foreground mt-2">₹0</p>
                  <p className="text-xs text-muted-foreground mt-1">Per month</p>
                </div>
                <p className="text-xs text-muted-foreground mb-6">For learning & prototyping</p>
                <ul className="space-y-3 text-xs mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>1 project</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>500 MB database</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>1,000 MAU</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>50K realtime msgs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>100K functions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>1 GB storage</span>
                  </li>
                </ul>
                <button disabled className="w-full px-4 py-2 bg-muted text-muted-foreground rounded text-sm font-medium cursor-not-allowed opacity-50">
                  Current Plan
                </button>
              </div>

              {/* STARTER */}
              <div className="rounded-lg border-2 border-orange-600 p-6 bg-orange-50/30">
                <div className="inline-block px-2 py-1 bg-orange-600/20 text-orange-700 rounded text-xs font-semibold mb-4">
                  RECOMMENDED
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold">STARTER</h3>
                  <p className="text-3xl font-bold text-orange-600 mt-2">₹499</p>
                  <p className="text-xs text-muted-foreground mt-1">Per month</p>
                </div>
                <p className="text-xs text-muted-foreground mb-6">For indie devs & early production</p>
                <ul className="space-y-3 text-xs mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>3 projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>5 GB database</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>10,000 MAU</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>1M realtime msgs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>1M functions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>10 GB storage</span>
                  </li>
                </ul>
                <Link to="/dashboard" className="w-full px-4 py-2 bg-orange-600 text-white rounded text-sm font-medium hover:bg-orange-700 transition-colors block text-center">
                  Try Now
                </Link>
              </div>

              {/* PRO */}
              <div className="rounded-lg border border-border p-6 bg-card hover:border-orange-600/50 transition-colors">
                <div className="mb-4">
                  <h3 className="text-lg font-bold">PRO</h3>
                  <p className="text-3xl font-bold text-foreground mt-2">₹1,999</p>
                  <p className="text-xs text-muted-foreground mt-1">Per month</p>
                </div>
                <p className="text-xs text-muted-foreground mb-6">For serious production workloads</p>
                <ul className="space-y-3 text-xs mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>10 projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>25 GB database</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>100,000 MAU</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>10M realtime msgs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>10M functions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>100 GB storage</span>
                  </li>
                </ul>
                <Link to="/dashboard" className="w-full px-4 py-2 bg-muted text-foreground rounded text-sm font-medium hover:bg-muted/80 transition-colors block text-center border border-border">
                  Start Free
                </Link>
              </div>

              {/* ENTERPRISE */}
              <div className="rounded-lg border border-border p-6 bg-card hover:border-orange-600/50 transition-colors">
                <div className="mb-4">
                  <h3 className="text-lg font-bold">ENTERPRISE</h3>
                  <p className="text-2xl font-bold text-muted-foreground mt-2">Custom</p>
                  <p className="text-xs text-muted-foreground mt-1">Contact sales</p>
                </div>
                <p className="text-xs text-muted-foreground mb-6">For regulated & large-scale deployments</p>
                <ul className="space-y-3 text-xs mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Custom database size</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Dedicated compute</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>VPC isolation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Self-host option</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>SLA & compliance</span>
                  </li>
                </ul>
                <button disabled className="w-full px-4 py-2 bg-muted text-muted-foreground rounded text-sm font-medium cursor-not-allowed opacity-50">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="text-center text-xs text-muted-foreground">
              <p>Add-ons: ₹50/GB database • ₹20/GB storage • ₹100 per 1M realtime messages • ₹100 per 1M functions</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto py-20 border-t border-border">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-card border border-border rounded-lg p-12">
            <h2 className="text-3xl font-bold">Ready to build?</h2>
            <p className="text-muted-foreground">Start with the Free plan. Scale to Pro when you're ready. No credit card required.</p>
            <Link 
              to="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all"
            >
              Launch Dashboard Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>SetuBase Mock Platform — For demonstration purposes only</p>
        </div>
      </footer>
    </div>
  );
}
