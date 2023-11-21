
import React, {useState} from 'react';
import { Pressable, Modal, Button, StyleSheet, Text, View, Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;

export default function MusicListe() {

  const handleIconPress = () => {
    // Logique à exécuter lorsqu'on appuie sur l'icône
    console.log('Icon Pressed');
  };

  

  return (
    <View style={styles.musicContainer}>
        <Text>Liste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  musicContainer: {
    paddingTop: 30,
    height: windowHeight - 40,
    flexDirection: 'column',
    borderColor: "red",
    borderWidth: 1,
  },
});
