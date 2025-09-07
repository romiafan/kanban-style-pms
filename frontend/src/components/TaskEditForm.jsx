import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { updateTask } from '../services/api';

// Minimalistic Task Edit Form
const TaskEditForm = ({ task, onUpdated, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateTask({ ...task, title, description });
      if (onUpdated) onUpdated();
    } catch (err) {
      alert('Failed to update task');
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
        {loading ? 'Saving...' : 'Save'}
      </button>
      <button
        type="button"
        onClick={onCancel}
        style={{
          background: 'transparent',
          color: theme.text,
          border: 'none',
          borderRadius: 8,
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default TaskEditForm;
