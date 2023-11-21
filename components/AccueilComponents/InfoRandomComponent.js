import React, {useState} from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";


export default function InfoRandom(){


    return(
        <View style={styles.container}>
            <View style={styles.content_Text}>
                <Text>Motion</Text>
                <Text>Design</Text>
            </View>
            <View style={styles.content_Text}>
                <Text>Motion</Text>
                <Text>Design</Text>
            </View>
            <View style={styles.content_Text}>
                <Text>Motion</Text>
                <Text>Design</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'blue',
        height: 70,
        flexDirection:'row',
        
        alignItems:'center',
        paddingLeft:5,
        paddingRight:5

    },
    content_Text: {
        borderWidth: 1,
        borderColor: 'red',
        flex:1,
        flexDirection:'column',
        alignItems:'center'
    }
})