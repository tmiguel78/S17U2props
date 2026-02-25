import './App.css';
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');
  
  const addTask = () => {
    const newId = tasks.length + 1;
    
    setTasks([
      ...tasks,
      {
      id: newId,
      text: newTask,
      completed: false
      }
    ])
    setNewTask('');
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  const markAsCompleted = (id)=> {
    setTasks(tasks.map(task => task.id === id ? {...task, completed : !task.completed } : task))
  };
  
  const handleSubmit = (e) => {
        e.preventDefault();
        addTask()
    };
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
    <h1>Lista de tareas</h1>
    <AddTaskForm handleSubmit={handleSubmit} handleChange={handleChange} newTask={newTask}/>
    <ul>
    {tasks.map(
      task => <Task key={task.id} task={task} deleteTask={deleteTask} markAsCompleted={markAsCompleted}/>
    )}
    </ul>
    </>
  );
};

export default App;
