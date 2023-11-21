import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from "../pages/Accueil";
import Music from "../pages/Music";


const screenOptions  = {
    tabBarShowLabel:true,
    headerShown:true, //Affichage du nom de la page en haut
    tabBarStyle:{
      position:"absolute",
      bottom:10,
      left:20,
      right:20,
      height:50,
      borderRadius:10,
      backgroundColor:'red'
    }
  }
const Tab = createBottomTabNavigator();
export default function BarMenu(){
    

    return (
        <NavigationContainer style={styles.tabBarre}>
            <Tab.Navigator screenOptions={screenOptions} >
                <Tab.Screen name="Home" component={Accueil} />
                <Tab.Screen name="Music" component={Music} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'red',
        width:"100%",
        position: "absolute",
        bottom: 5,
        
    },
    content_Text: {
        
    }
})