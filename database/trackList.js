import { useState, useEffect } from "react";
import * as MediaLibrary from 'expo-media-library'

const Tracklist = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const permissionAlert = () => {
        Alert.alert('Permission required', 'This app needs to read audio files', [
            { text: 'Allow', onPress: () => this.getPermission() },
            { text: 'Cancel', onPress: () => this.permissionAlert() },
        ]);
    };
    const getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync();

        if (permission.granted) {
            getAudioFiles();
        }

        if (!permission.granted && permission.canAskAgain) {
            const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();

            if (status === 'denied' && canAskAgain) {
                permissionAlert();
            }

            if (status === 'granted') {
                getAudioFiles();
            }

            if (status === 'denied' && !canAskAgain) {
                alert('Vous devez autorisé l\'accées au fichier ')
            }
        }
    }

    const getAudioFiles = async () => {
        setIsLoaded(true)
        try {
            const mediaCountFunc = await MediaLibrary.getAssetsAsync({
                mediaType: 'audio',
                mediaSubtypes: ['mp3']
            });
            setIsLoaded(false)

            const totalCountvar = mediaCountFunc.totalCount;

            const media = await MediaLibrary.getAssetsAsync({
                mediaType: 'audio',
                first: totalCountvar,
                mediaSubtypes: ['mp3'],
            });

            const directoriesToExclude = ['file:///storage/emulated/0/Music/Recordings/Standard Recordings/'];
            const filteredMedia = media.assets.filter(item => (item.filename.endsWith('.mp3') || item.filename.endsWith('.m4a') &&
                !directoriesToExclude.some(dir => item.uri.startsWith(dir))));
            setData({ fichierAudio: filteredMedia.filter(item => !directoriesToExclude.some(dir => item.uri.startsWith(dir))) })
        } catch (error) {
            setError(error)
            alert('Il y a un problème')
        } finally {
            setIsLoaded(false)
        }
    };

    useEffect(() => {
        getPermission();
    }, []);


    return {data, isLoaded, error};
}

export default Tracklist;