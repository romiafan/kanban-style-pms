import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { createTask } from '../services/api';

// Minimalistic Task Creation Form
const TaskForm = ({ projectId, onCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createTask({ title, description, projectId });
      setTitle('');
      setDescription('');
      if (onCreated) onCreated();
    } catch (err) {
      alert('Failed to create task');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Task title"
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
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        style={{
          padding: '0.5rem 1rem',
          borderRadius: 8,
          border: `1px solid ${theme.accent}`,
          background: theme.card,
          color: theme.text,
          outline: 'none',
        }}
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
        {loading ? 'Creating...' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
