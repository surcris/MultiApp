import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import dbController from './dbController';
// Créer le contexte
export const AlarmsContext = createContext({});

// Créer le composant Provider
export const AlarmsProvider = ({ children }) => {
  const db = new dbController('Alarm')
  const [alarm, setAlarms] = useState([]);

  useEffect(() => {
    // Récupérer les données de la base de données
    const fetchData = async () => {
      const data = await db.getData();
      setAlarms(data);

      console.log("Context : ",alarm)
    };

    fetchData();
  }, []); // Le tableau vide signifie que l'effet ne s'exécute qu'au montage du composant
  return (
    <AlarmsContext.Provider value={{alarm, setAlarms}}>
      
    </AlarmsContext.Provider>
  );
};