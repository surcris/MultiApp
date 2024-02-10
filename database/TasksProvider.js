import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import dbController from './dbController';
// Créer le contexte
export const TasksContext = createContext();

// Créer le composant Provider
export const TasksProvider = ({ children }) => {
  const db = new dbController('tasks')
  const [tasks, setTasks] = useState([]);

  useEffect(() =>{
    
    // setTasks({tasks:db.getData()})
  })
  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {children}
    </TasksContext.Provider>
  );
};