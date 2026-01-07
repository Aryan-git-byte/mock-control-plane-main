/**
 * Pricing Page - Setu Mock Pricing (India-first, infra-correct)
 * Project-based, simple, predictable pricing
 */

import { MockLabel } from '@/components/ui/MockLabel';

const pricingTiers = [
  {
    name: 'FREE',
    color: 'bg-success/10 text-success',
    price: '₹0',
    description: 'For learning & prototyping (Not for production)',
    features: [
      'Projects: 1',
      'Database: PostgreSQL up to 500 MB',
      'Auth: Up to 1,000 MAU',
      'Realtime: 50,000 messages / month',
      'Edge Functions: 100,000 invocations / month',
      'App Runtime: Shared compute, no SLA',
      'Storage: 1 GB',
      'Logs: 24 hours retention',
    ],
  },
  {
    name: 'STARTER',
    color: 'bg-orange-600/10 text-orange-600',
    price: '₹499 / month',
    description: 'For indie devs and early production apps',
    features: [
      'Projects: Up to 3',
      'Database: PostgreSQL up to 5 GB',
      'Auth: Up to 10,000 MAU',
      'Realtime: 1 million messages / month',
      'Edge Functions: 1 million invocations / month',
      'App Runtime: 1 shared vCPU, 512 MB RAM',
      'Storage: 10 GB',
      'Logs: 7 days retention',
      'Daily backups enabled',
    ],
  },
  {
    name: 'PRO',
    color: 'bg-purple-100 text-purple-700',
    price: '₹1,999 / month',
    description: 'For serious production workloads',
    features: [
      'Projects: Up to 10',
      'Database: PostgreSQL up to 25 GB',
      'Auth: Up to 100,000 MAU',
      'Realtime: 10 million messages / month',
      'Edge Functions: 10 million invocations / month',
      'App Runtime: 2 vCPU, 2 GB RAM',
      'Storage: 100 GB',
      'Logs: 30 days retention',
      'Point-in-time recovery enabled',
      'Priority email support (Mock)',
    ],
  },
  {
    name: 'ENTERPRISE',
    color: 'bg-destructive/10 text-destructive',
    price: 'Custom Pricing',
    description: 'For regulated, large-scale, or self-hosted deployments',
    features: [
      'Unlimited projects',
      'Dedicated compute',
      'Custom database sizing',
      'VPC / network isolation',
      'SLA & compliance (conceptual)',
      'Self-host / on-prem option',
      'Contact sales for pricing',
    ],
  },
];

const addOns = [
  'Extra database storage: ₹50 / GB / month',
  'Extra object storage: ₹20 / GB / month',
  'Extra realtime messages: ₹100 per 1 million',
  'Extra function invocations: ₹100 per 1 million',
];

export default function Pricing() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Mock Pricing</h1>
        <MockLabel />
        <p className="text-muted-foreground mt-4 text-sm">
          <strong>Pricing unit = PROJECT</strong><br />
          One project includes all services: Database, Auth, Realtime, Storage, Edge Functions, App Runtime.<br />
          Not per service. Not per seat. Not per API.<br />
          <span className="text-xs">One project, one bill. Scales linearly.</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {pricingTiers.map(tier => (
          <div key={tier.name} className={`rounded-lg border border-border p-6 flex flex-col items-center ${tier.color}`}>
            <h2 className="text-xl font-semibold mb-1">{tier.name}</h2>
            <div className="text-2xl font-bold mb-2">{tier.price}</div>
            <p className="text-xs text-muted-foreground mb-3 text-center">{tier.description}</p>
            <ul className="text-xs text-left list-disc pl-4 space-y-1 mb-2">
              {tier.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Add-ons (overage, not upsells)</h3>
        <ul className="text-xs list-disc pl-6 space-y-1">
          {addOns.map(a => <li key={a}>{a}</li>)}
        </ul>
      </div>
      <div className="bg-card border border-border rounded-lg p-6 text-sm text-muted-foreground">
        <p className="mb-2 font-semibold">About Mock Pricing</p>
        <p className="mb-3">
          This is mock pricing for demonstration purposes only. 
          There is no real billing, payments, or Stripe integration. 
          All pricing shown is illustrative and meant to help developers understand what different tiers provide.
        </p>
        <p className="mb-2 font-semibold">How it works</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Pricing is per project, not per service or per user</li>
          <li>All services belong to your project: Database, Auth, Realtime, Storage, Edge Functions, App Runtime</li>
          <li>No feature gating by plan — all services are available in all tiers</li>
          <li>Only resource limits change between tiers</li>
          <li>Overages are predictable and published upfront</li>
        </ul>
      </div>
    </div>
  );
}
