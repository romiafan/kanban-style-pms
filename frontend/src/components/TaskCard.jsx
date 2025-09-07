import React from 'react';

const TaskCard = ({ title, description }) => (
  <div style={{ border: '1px solid #61dafb', borderRadius: '8px', padding: '0.5rem', margin: '0.5rem 0', background: '#20232a', color: '#fff' }}>
    <strong>{title}</strong>
    <p>{description}</p>
  </div>
);

export default TaskCard;
