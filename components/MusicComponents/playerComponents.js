
import React, {useState} from 'react';
import { Pressable, Modal, Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Svg from 'react-native-svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as allsvg from '@fortawesome/free-solid-svg-icons'

const windowHeight = Dimensions.get('window').height;

export default function PlayerComponents() {

  const handleIconPress = () => {
    // Logique à exécuter lorsqu'on appuie sur l'icône
    console.log('Icon Pressed');
  };

  

  return (
    <View style={styles.playerContainer}>
        <View style={styles.topPlayerContent}>
            <View style={styles.lect}>
                <Text>A</Text>
            </View>
            <View style={styles.timer}>
                <Text>0:12</Text>
                <Text>3:34</Text>
            </View>
            
        </View>
        <View style={styles.playContainer}>
            <View style={styles.playContent}><FontAwesomeIcon icon={ allsvg.faRepeat } /></View>
            <View style={styles.playContent}><FontAwesomeIcon icon={ allsvg.faForwardStep } /></View>
            <View style={styles.playContent}><FontAwesomeIcon icon={ allsvg.faPlay } /></View>
            <View style={styles.playContent}><FontAwesomeIcon icon={ allsvg.faBackwardStep } /></View>
            <View style={styles.playContent}><FontAwesomeIcon icon={ allsvg.faRandom } /></View>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    playerContainer: {
        flexDirection: 'column',
        borderColor: "red",
        borderWidth: 1,
    },
    playContainer: {
        flexDirection:"row"
    },
    playContent: {
        flex:1,
        alignItems:"center"
    },
    topPlayerContent: {
        flexDirection:"column"
    },
    lect: {
        alignItems:'center'
    },
    timer: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:5,
        paddingRight:5
    }
});
