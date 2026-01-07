/**
 * New Project Page - Create a Mock Project
 * Form to add a new project to local state
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { useProjects } from '@/contexts/ProjectContext';
import { MockLabel } from '@/components/ui/MockLabel';

const appTypes = ['Next.js', 'Node.js', 'Python'];

export default function NewProject() {
  const navigate = useNavigate();
  const { addProject } = useProjects();
  
  const [formData, setFormData] = useState({
    name: '',
    backend: 'Supabase',
    appType: 'Next.js',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    addProject({
      name: formData.name.trim().toLowerCase().replace(/\s+/g, '-'),
      region: 'India',
      status: 'running',
      type: 'Full Stack App',
      backend: formData.backend,
      appType: formData.appType,
    });

    navigate('/dashboard');
  };

  return (
    <div className="p-8 max-w-2xl">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Create New Project</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Configure your backend and deployment settings
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Project Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Project Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="my-awesome-project"
            className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring font-mono text-sm"
            required
          />
          <p className="text-xs text-muted-foreground">
            Lowercase letters, numbers, and hyphens only
          </p>
        </div>

        {/* Backend */}
        <div className="space-y-2">
          <label htmlFor="backend" className="block text-sm font-medium">
            Backend Provider
          </label>
          <select
            id="backend"
            value={formData.backend}
            onChange={(e) => setFormData({ ...formData, backend: e.target.value })}
            className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
          >
            <option value="Supabase">Supabase (PostgreSQL + Auth)</option>
          </select>
        </div>

        {/* App Type */}
        <div className="space-y-2">
          <label htmlFor="appType" className="block text-sm font-medium">
            Application Type
          </label>
          <select
            id="appType"
            value={formData.appType}
            onChange={(e) => setFormData({ ...formData, appType: e.target.value })}
            className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
          >
            {appTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Region */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Region
          </label>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-md text-sm">
            <Lock className="w-4 h-4 text-muted-foreground" />
            <span>India 🇮🇳</span>
            <span className="text-muted-foreground ml-auto">Locked</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Currently only India region is available
          </p>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}
