/**
 * Project Overview Page
 * Detailed view of a single mock project
 */

import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Database, 
  Shield, 
  Radio, 
  CheckCircle,
  Cpu,
  HardDrive,
  Activity,
  Wifi
} from 'lucide-react';
import { useProjects } from '@/contexts/ProjectContext';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { MockLabel } from '@/components/ui/MockLabel';
import { mockEnvVars, mockMetrics } from '@/data/mockData';

export default function ProjectOverview() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { projects, toggleProjectStatus } = useProjects();

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="p-8">
        <p className="text-muted-foreground">Project not found</p>
        <Link to="/dashboard" className="text-orange-600 hover:underline mt-2 inline-block">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </button>

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-semibold font-mono">{project.name}</h1>
            <MockLabel />
          </div>
          <div className="flex items-center gap-4">
            <StatusBadge status={project.status} />
            <span className="text-sm text-muted-foreground">{project.region}</span>
            <span className="text-sm text-muted-foreground">{project.appType}</span>
          </div>
        </div>
        <button
          onClick={() => toggleProjectStatus(project.id)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            project.status === 'running'
              ? 'bg-warning/10 text-warning hover:bg-warning/20'
              : 'bg-success/10 text-success hover:bg-success/20'
          }`}
        >
          {project.status === 'running' ? 'Stop' : 'Start'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Backend Section */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-orange-600" />
            Backend Stack
            <MockLabel className="ml-auto" />
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Powered by open-source components (Mock)
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Database</span>
              <span className="font-mono text-sm">PostgreSQL</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-muted-foreground flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Auth
              </span>
              <span className="text-success flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Enabled
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-muted-foreground flex items-center gap-2">
                <Radio className="w-4 h-4" />
                Realtime
              </span>
              <span className="text-success flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Enabled
              </span>
            </div>
          </div>
        </div>

        {/* Application Section */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-600" />
            Application
            <MockLabel className="ml-auto" />
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Build Status</span>
              <span className="text-success flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Success
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Public URL</span>
              <a 
                href={project.publicUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline flex items-center gap-1 font-mono text-sm truncate max-w-[200px]"
              >
                {project.publicUrl.replace('https://', '')}
                <ExternalLink className="w-3 h-3 flex-shrink-0" />
              </a>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-muted-foreground">Created</span>
              <span className="text-sm">{project.createdAt}</span>
            </div>
          </div>
        </div>

        {/* Environment Variables */}
        <div className="bg-card border border-border rounded-lg p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">
            Environment Variables
            <MockLabel className="ml-2" />
          </h2>
          <div className="space-y-2">
            {mockEnvVars.map((env) => (
              <div 
                key={env.key}
                className="flex items-center justify-between py-2 px-3 bg-muted/50 rounded font-mono text-sm"
              >
                <span className="text-foreground">{env.key}</span>
                <span className="text-muted-foreground truncate max-w-[400px]">
                  {env.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-card border border-border rounded-lg p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">
            Resources
            <MockLabel className="ml-2" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="metric-card">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Cpu className="w-4 h-4" />
                <span className="text-sm">{mockMetrics.cpu.label}</span>
              </div>
              <p className="text-2xl font-semibold">
                {mockMetrics.cpu.value}<span className="text-sm text-muted-foreground">{mockMetrics.cpu.unit}</span>
              </p>
            </div>
            <div className="metric-card">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <HardDrive className="w-4 h-4" />
                <span className="text-sm">{mockMetrics.memory.label}</span>
              </div>
              <p className="text-2xl font-semibold">
                {mockMetrics.memory.value}<span className="text-sm text-muted-foreground ml-1">{mockMetrics.memory.unit}</span>
              </p>
            </div>
            <div className="metric-card">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Activity className="w-4 h-4" />
                <span className="text-sm">{mockMetrics.requests.label}</span>
              </div>
              <p className="text-2xl font-semibold">
                {mockMetrics.requests.value.toLocaleString()}
              </p>
            </div>
            <div className="metric-card">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Wifi className="w-4 h-4" />
                <span className="text-sm">{mockMetrics.bandwidth.label}</span>
              </div>
              <p className="text-2xl font-semibold">
                {mockMetrics.bandwidth.value}<span className="text-sm text-muted-foreground ml-1">{mockMetrics.bandwidth.unit}</span>
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            These are mock values for demonstration purposes
          </p>
        </div>
      </div>
    </div>
  );
}
