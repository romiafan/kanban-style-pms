import React, { useState } from 'react';
import Column from '../components/Column';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import TaskEditForm from '../components/TaskEditForm';
import { deleteTask, updateTask } from '../services/api';


// Example: projectId would come from route params in a real app
const projectId = 1;

const ProjectView = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Setup DB', description: 'Initialize database schema', status: 'To Do' },
    { id: 2, title: 'Build API', description: 'Create CRUD endpoints', status: 'In Progress' },
    { id: 3, title: 'Frontend Setup', description: 'React + Vite initialized', status: 'Done' },
  ]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  // For demo, add to 'To Do'. In real app, fetch tasks and update status.
  const handleTaskCreated = () => {
    // Placeholder: fetch tasks from backend after creation
  };

  const handleEdit = (taskId) => setEditingTaskId(taskId);
  const handleCancelEdit = () => setEditingTaskId(null);
  const handleUpdate = async (updatedTask) => {
    await updateTask(updatedTask);
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
    setEditingTaskId(null);
  };
  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <div style={{ flex: 1 }}>
        <TaskForm projectId={projectId} onCreated={handleTaskCreated} />
        <Column name="To Do">
          {tasks.filter(t => t.status === 'To Do').map(task => (
            editingTaskId === task.id ? (
              <TaskEditForm
                key={task.id}
                task={task}
                onUpdated={() => handleUpdate({ ...task, title: task.title, description: task.description })}
                onCancel={handleCancelEdit}
              />
            ) : (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                onEdit={() => handleEdit(task.id)}
                onDelete={() => handleDelete(task.id)}
              />
            )
          ))}
        </Column>
      </div>
      <Column name="In Progress">
        {tasks.filter(t => t.status === 'In Progress').map(task => (
          editingTaskId === task.id ? (
            <TaskEditForm
              key={task.id}
              task={task}
              onUpdated={() => handleUpdate({ ...task, title: task.title, description: task.description })}
              onCancel={handleCancelEdit}
            />
          ) : (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              onEdit={() => handleEdit(task.id)}
              onDelete={() => handleDelete(task.id)}
            />
          )
        ))}
      </Column>
      <Column name="Done">
        {tasks.filter(t => t.status === 'Done').map(task => (
          editingTaskId === task.id ? (
            <TaskEditForm
              key={task.id}
              task={task}
              onUpdated={() => handleUpdate({ ...task, title: task.title, description: task.description })}
              onCancel={handleCancelEdit}
            />
          ) : (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              onEdit={() => handleEdit(task.id)}
              onDelete={() => handleDelete(task.id)}
            />
          )
        ))}
      </Column>
    </div>
  );
};

export default ProjectView;
