import React, {useState} from 'react';
import { Pressable, Modal, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from './pages/Accueil'
import MusicMain from './pages/MusicPages/MusicMain';

const screenOptions  = {
  tabBarShowLabel:true,
  headerShown:false, //Affichage du nom de la page en haut
  tabBarStyle:{
    position:"absolute",
    bottom:10,
    left:10,
    right:10,
    height:50,
    borderRadius:10
    
  }
}


export default function App() {

  const Tab = createBottomTabNavigator();
  const handleIconPress = () => {
    // Logique à exécuter lorsqu'on appuie sur l'icône
    console.log('Icon Pressed');
  };

  

  return (

    
    <NavigationContainer >
      <Tab.Navigator screenOptions={screenOptions} >
        <Tab.Screen name="Home" component={Accueil} />
        <Tab.Screen name="Music" component={MusicMain} />
        
      </Tab.Navigator>
    </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    paddingTop:30,
    borderWidth: 1,
    borderColor: 'red'

  },
  
  
});
