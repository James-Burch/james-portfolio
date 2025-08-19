import { useState } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  status: string;
  image: string;
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
  problem: string;
  solution: string;
  keyFeatures: string[];
  results: string[];
  challenges: string[];
  learnings: string[];
  timeline: string;
  teamSize?: string;
}

export const useProjectModal = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Delay clearing project to allow exit animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  return {
    selectedProject,
    isModalOpen,
    openModal,
    closeModal,
  };
};
