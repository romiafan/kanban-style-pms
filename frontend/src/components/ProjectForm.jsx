import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { createProject } from '../services/api';

// Minimalistic Project Creation Form
const ProjectForm = ({ onCreated }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createProject({ name });
      setName('');
      if (onCreated) onCreated();
    } catch (err) {
      alert('Failed to create project');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Project name"
        style={{
          padding: '0.5rem 1rem',
          borderRadius: 8,
          border: `1px solid ${theme.accent}`,
          background: theme.card,
          color: theme.text,
          outline: 'none',
        }}
        required
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          background: theme.accent,
          color: theme.card,
          border: 'none',
          borderRadius: 8,
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        {loading ? 'Creating...' : 'Create Project'}
      </button>
    </form>
  );
};

export default ProjectForm;
