
import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { Pressable, Modal, Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import MusicLecture from './MusicLecture';
import MusicListe from './MusicListe';
// import AudioProvider from '../../components/MusicComponents/AudioProvider';


const windowHeight = Dimensions.get('window').height;


export default function MusicMain() {

    const [isPlayerListe, setIsPlayerListe] = useState(false);
    
    
    const handleIconPress = () => {
        // Logique à exécuter lorsqu'on appuie sur l'icône
        console.log('Icon Pressed');
    };



    return (
        <View style={styles.musicContainer}>
            <View style={styles.musicMenuContainer}>
                {/* <View ><Button title="Player"></Button></View>
            <View style={styles.musicButtonContainer}><Button title="Liste"></Button></View> */}
                <TouchableOpacity onPress={() => {setIsPlayerListe(true)}} style={styles.musicButtonContainer}>
                    <Text>Player</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setIsPlayerListe(false)}} style={styles.musicButtonContainer}>
                    <Text>Liste</Text>
                </TouchableOpacity>

            </View>
            
            <View style={styles.musicPageContainer}>
                {isPlayerListe ? <MusicLecture/> : <MusicListe/>}
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  musicContainer: {
    marginTop: 30,
    height: windowHeight - 70,
    flexDirection: 'column',
    // borderColor: "red",
    // borderWidth: 1,
  },
  musicMenuContainer:{
    width:"100%",
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderColor: "blue",
    borderWidth: 1,
  },
  musicButtonContainer:{
    alignItems:"center",
    justifyContent:'center',
    height:30,
    width:"50%"
  },
  musicPageContainer:{
    flex:1,
    // borderColor: "green",
    // borderWidth: 1,
  }
});
