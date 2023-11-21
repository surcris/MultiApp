import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";


export default function EstimValue(){


    return(
        
            <View style={styles.container}>
                <View style={styles.content_top}>
                    <Text>TT</Text>
                    <Text>TTdddd</Text>
                </View>
                <View style={styles.content_bottom}>
                    <Text>toTOO</Text>
                </View>
            </View>
            
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        paddingLeft:5,
        paddingRight:5
    },
    content_top: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    content_bottom: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    }
})