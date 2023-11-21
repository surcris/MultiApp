
import React, {useState} from 'react';
import { Pressable, Modal, Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import AudioProvider from '../../components/MusicComponents/AudioProvider';


const windowHeight = Dimensions.get('window').height;

export default function MusicListe() {

  const handleIconPress = () => {
    // Logique à exécuter lorsqu'on appuie sur l'icône
    console.log('Icon Pressed');
  };

  

  return (
    <View style={styles.musicContainer}>
        <AudioProvider/>
    </View>
  );
}

const styles = StyleSheet.create({
  musicContainer: {
    paddingTop: 30,
    height: windowHeight - 40,
    flex:1,
    flexDirection: 'column',
    borderColor: "red",
    borderWidth: 1,
  },
});
