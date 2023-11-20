import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Pressable, Modal, Button, StyleSheet, Text, View } from 'react-native';




export default function Music() {

  const handleIconPress = () => {
    // Logique à exécuter lorsqu'on appuie sur l'icône
    console.log('Icon Pressed');
  };

  

  return (
    <View>
        
    </View>
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
