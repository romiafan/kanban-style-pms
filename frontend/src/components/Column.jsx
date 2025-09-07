import React from 'react';

// Column displays a list of tasks for a given status (e.g., To Do, In Progress, Done).
// Props:
//   name: string - the column's name
//   children: ReactNode - the tasks/cards to display in this column

const Column = ({ name, children }) => (
  <div style={{ minWidth: '250px', background: '#282c34', borderRadius: '8px', padding: '1rem', margin: '1rem', color: '#fff' }}>
    <h3>{name}</h3>
    {children}
  </div>
);

export default Column;
