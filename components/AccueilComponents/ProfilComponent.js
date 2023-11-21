import React, {Component, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button,Image } from "react-native";

export default function ProfilComponent({p_text}) {
    const [isProfil, setIsProfil] = useState(false)
    
    const titre = "Open N";


    return (
        <View style={styles.container}>
            <View style={styles.info_Profil}>
                <Text style={{
                    borderWidth: 1,
                    borderColor: 'green', flex: 1
                }}>Manager</Text>
                <Text style={{
                    borderWidth: 1,
                    borderColor: 'red', flex: 2, fontSize: 20
                }}>Abdallah Niel</Text>
            </View>
            <View style={styles.img_Profil}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
        borderWidth: 1,
        borderColor: 'red',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5

    },
    img_Profil: {
        height: 60,
        width: 60,
        backgroundColor: 'red',
        borderRadius: 50
    },
    info_Profil: {
        borderWidth: 1,
        borderColor: 'black',
        height: 60,
        flexDirection:'column',
        
    }
})