
import React, {useState} from 'react';
import { Pressable, Modal, Button, StyleSheet, Text, View, Dimensions,Image } from 'react-native';


const windowHeight = Dimensions.get('window').height;

export default function AffTitreComponent() {

  const handleIconPress = () => {
    // Logique à exécuter lorsqu'on appuie sur l'icône
    console.log('Icon Pressed');
  };

  

  return (
    <View style={styles.playerContainer}>
        <Image
            style={styles.imageSize}
            source={require('../../assets/images/ImageMusic.jpg')}
        />

        
    </View>
  );
}

const styles = StyleSheet.create({
    playerContainer: {
        
        // borderColor: "red",
        // borderWidth: 1,
        
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
    },
    playContainer: {
        flexDirection:"row"
    },
    playContent: {
        flex:1,
        alignItems:"center"
    },
    imageSize:{
        
        width:"90%"
    }
});
