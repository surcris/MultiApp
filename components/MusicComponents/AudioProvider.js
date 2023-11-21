import React, { Component, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as MediaLibrary from 'expo-media-library'
import { Alert } from 'react-native';
import { ScrollView } from 'react-native';

export default class AudioProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fichierAudio:[]
        };
    }
    
    permisionAlert = () => {
        Alert.alert('Permission requise','Cette application à besion d\'avoir acccés à vos fichiers', [
            {
                text:'Je suis prêt',
                onPress: () => this.getPermission()
            },
            {
                text:'Fermer',
                onPress: () => this.permisionAlert()
            }
        ])
    }
    //   {"canAskAgain": true, "expires": "never", "granted": false, "status": "undetermined"}
    getPermission = async () => {
        
        const permision = await MediaLibrary.getPermissionsAsync();
        // permision.granted = false;
        if (permision.granted) {
            this.getFichierAudio();
        } else if (!permision.granted && permision.canAskAgain) {
            const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync()
            if (status === 'denied' && canAskAgain) {
                this.permisionAlert();
            } else if (status === "granted") {
                this.getFichierAudio();
            } else if (status === "denied" && !canAskAgain) {

            }
        }


    }

    async getFichierAudio(){
        const media = await MediaLibrary.getAssetsAsync({
            mediaType:'audio'
        })
        this.setState({...this.state,fichierAudio:media.assets})
        // console.log(this.state.fichierAudio)
    }
    componentDidMount() {
        this.getPermission();
    }


    render() {
        return (
            <ScrollView>
                {this.state.fichierAudio.map(item => <Text>{item.filename}</Text>)}
            </ScrollView>
        );
    }
}
