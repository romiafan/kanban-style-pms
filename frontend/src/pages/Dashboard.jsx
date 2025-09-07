

import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectForm from '../components/ProjectForm';
import { fetchProjects } from '../services/api';
import { useTheme } from '../theme/ThemeContext';

// Minimalistic Bento Grid Dashboard
const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetchProjects().then(setProjects).catch(() => setProjects([]));
  }, []);

  return (
    <div
      style={{
        background: theme.background,
        minHeight: '100vh',
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
      }}
    >
      {/* Projects Bento Grid */}
      <section style={{ background: theme.card, borderRadius: 16, padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h2 style={{ color: theme.text, marginBottom: '1rem' }}>Projects</h2>
        <ProjectForm onCreated={() => fetchProjects().then(setProjects)} />
        {projects.length === 0 ? (
          <p style={{ color: theme.text }}>No projects found.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} name={project.name} />
            ))}
          </div>
        )}
      </section>

      {/* Collaboration Tools Placeholder */}
      <section style={{ background: theme.card, borderRadius: 16, padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h2 style={{ color: theme.text, marginBottom: '1rem' }}>Collaboration</h2>
        <p style={{ color: theme.text }}>Chat, comments, and real-time tools coming soon.</p>
      </section>

      {/* AI-Powered Suggestions Placeholder */}
      <section style={{ background: theme.card, borderRadius: 16, padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h2 style={{ color: theme.text, marginBottom: '1rem' }}>AI Suggestions</h2>
        <button style={{ background: theme.accent, color: theme.card, border: 'none', borderRadius: 8, padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Suggest Next Task
        </button>
        <p style={{ color: theme.text, marginTop: '1rem' }}>AI-powered predictive features coming soon.</p>
      </section>
    </div>
  );
};

export default Dashboard;
