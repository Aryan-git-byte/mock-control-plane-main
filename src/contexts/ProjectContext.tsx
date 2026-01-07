/**
 * Project Context - Mock State Management
 * Manages mock project data in local React state
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Project, initialProjects } from '@/data/mockData';

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'publicUrl'>) => void;
  deleteProject: (id: string) => void;
  toggleProjectStatus: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const addProject = (projectData: Omit<Project, 'id' | 'createdAt' | 'publicUrl'>) => {
    const newProject: Project = {
      ...projectData,
      id: `proj_${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      publicUrl: `https://${projectData.name.toLowerCase().replace(/\s+/g, '-')}-mock.devplatform.app`,
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const toggleProjectStatus = (id: string) => {
    setProjects(prev => prev.map(p => 
      p.id === id 
        ? { ...p, status: p.status === 'running' ? 'stopped' : 'running' } 
        : p
    ));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, deleteProject, toggleProjectStatus }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}
