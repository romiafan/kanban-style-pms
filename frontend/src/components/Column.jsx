import React from 'react';

const Column = ({ name, children }) => (
  <div style={{ minWidth: '250px', background: '#282c34', borderRadius: '8px', padding: '1rem', margin: '1rem', color: '#fff' }}>
    <h3>{name}</h3>
    {children}
  </div>
);

export default Column;
