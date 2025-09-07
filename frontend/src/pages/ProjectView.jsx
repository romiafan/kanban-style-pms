import React from 'react';
import Column from '../components/Column';
import TaskCard from '../components/TaskCard';

const ProjectView = () => (
  <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
    <Column name="To Do">
      <TaskCard title="Setup DB" description="Initialize database schema" />
    </Column>
    <Column name="In Progress">
      <TaskCard title="Build API" description="Create CRUD endpoints" />
    </Column>
    <Column name="Done">
      <TaskCard title="Frontend Setup" description="React + Vite initialized" />
    </Column>
  </div>
);

export default ProjectView;
