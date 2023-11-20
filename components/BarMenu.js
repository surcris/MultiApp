import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Music from "../pages/Music";
import Accueil from "../pages/Accueil";

const Tab = createBottomTabNavigator();
export default function BarMenu(){


    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Accueil} />
            <Tab.Screen name="Music" component={Music} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'red',
        width:"100%",
        position: "absolute",
        bottom: 5
    },
    content_Text: {
        
    }
})