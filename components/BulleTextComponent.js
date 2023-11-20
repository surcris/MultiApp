import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";


export default function BulleText(props){


    return(
        <View style={styles.container}>
            <Text>{props.p_value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'red',
        height: 30,
        alignSelf: 'flex-start',
        justifyContent:'center',
        paddingLeft:5,
        paddingRight:5
    },
    content_Text: {
        
    }
})