import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

import styles from "./todoHome.style";
import dbController from "../../../database/dbController";

const TodoHome = ({tasks}) => {
    const [listTasks, setListTasks] = useState()
    const {navigate} = useNavigation()
    // const _todoDB = new dbController('tasks')


    useEffect(() => {

        // console.log(tasks.task);
        
    }, []);
    const navigateToOtherComponent = () => {
        // Navigue vers le composant OtherComponent
        // navigation.navigate("TodoList");
      };

    
    return (

        <TouchableOpacity style={styles.container} onPress={() => {
            navigate("Outils", { screen: 'TodoList' })
        }}>
            <Text style={styles.textStyle}>{tasks.task}</Text>
        </TouchableOpacity>
    )
}

export default TodoHome;