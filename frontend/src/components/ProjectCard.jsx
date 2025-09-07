import React from 'react';

const ProjectCard = ({ name }) => (
  <div style={{ border: '1px solid #61dafb', borderRadius: '8px', padding: '1rem', margin: '1rem', background: '#20232a', color: '#fff' }}>
    <h2>{name}</h2>
  </div>
);

export default ProjectCard;
