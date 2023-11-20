import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Pressable, Modal, Button, StyleSheet, Text, View } from 'react-native';

import Accueil from './pages/Accueil';


export default function App() {

  const handleIconPress = () => {
    // Logique à exécuter lorsqu'on appuie sur l'icône
    console.log('Icon Pressed');
  };

  

  return (
    <Accueil></Accueil>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
