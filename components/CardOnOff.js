import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";


export default function CardOnOff(props){


    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.square}></View>
                <View style={styles.square}></View>
            </View>
            <View style={styles.middle}>
                <Text>{props.info.nom}</Text>
                <Text>{props.info.describ}</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.square}></View>
                <View style={styles.square}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
        // borderWidth: 1,
        // borderColor: 'red',
        padding:5,
        width:"50%",
        maxHeight:250,
        minHeight:200,
        flexDirection:'column'
    },
    top: {
        borderWidth: 1,
        borderColor: 'blue',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    middle: {
        
        flex:2,
        borderWidth: 1,
        borderColor: 'green',
        
        
    },
    bottom: {
        borderWidth: 1,
        borderColor: 'blue',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    square: {
        height:30,
        width:30,
        backgroundColor:'red'
    }
})