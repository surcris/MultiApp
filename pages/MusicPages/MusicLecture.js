
import React, {useState} from 'react';
import { Pressable, Modal, Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import PlayerComponents from '../../components/MusicComponents/playerComponents';
import AffTitreComponent from '../../components/MusicComponents/AffTitreComponent';

const windowHeight = Dimensions.get('window').height;

export default function MusicLecture() {

  const handleIconPress = () => {
    // Logique à exécuter lorsqu'on appuie sur l'icône
    console.log('Icon Pressed');
  };

  

  return (
    <View style={styles.musicContainer}>
        <AffTitreComponent/>
        
        <PlayerComponents></PlayerComponents>
    </View>
  );
}

const styles = StyleSheet.create({
  musicContainer: {
    paddingTop: 30,
    height: windowHeight - 40,
    flex:1,
    flexDirection: 'column',
    justifyContent:"space-between",
    // borderColor: "red",
    // borderWidth: 1,
  },
});
