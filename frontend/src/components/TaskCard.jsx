import React from 'react';

// TaskCard displays a single task's title and description.
// Props:
//   title: string - the task's title
//   description: string - the task's description


const TaskCard = ({ title, description, onEdit, onDelete }) => (
  <div style={{ border: '1px solid #61dafb', borderRadius: '8px', padding: '0.5rem', margin: '0.5rem 0', background: '#20232a', color: '#fff', position: 'relative' }}>
    <strong>{title}</strong>
    <p>{description}</p>
    <div style={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: '0.5rem' }}>
      {onEdit && (
        <button onClick={onEdit} style={{ background: 'transparent', color: '#61dafb', border: 'none', cursor: 'pointer' }}>Edit</button>
      )}
      {onDelete && (
        <button onClick={onDelete} style={{ background: 'transparent', color: '#ff5252', border: 'none', cursor: 'pointer' }}>Delete</button>
      )}
    </div>
  </div>
);

export default TaskCard;
