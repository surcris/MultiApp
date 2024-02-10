import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Component, useEffect, useState } from "react";
import AppDefaut from './appDefaut/appDefaut';
import TodoHome from './todo/todoHome';
import dbController from "../../database/dbController";
import styles from "./homeComponent.style";
import { useNavigation } from '@react-navigation/native';
import { COLORS, icons, images, SIZES, iconsfa } from '../../constants';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toptease from "./topteaseCompo/topteaseCompo";
import { TasksContext } from "../../database/TasksProvider";
import { AlarmsContext } from "../../database/AlarmsProvider";
import TodoList from "../todolist/todolist";
const dbTask = new dbController('tasks');

const todoL = new TodoList()
// const navigation = useNavigation()
class Home extends Component {
    
    static contextType = TasksContext;
    static contextAType = AlarmsContext;

    constructor(props){
        super(props)
        this.state = {
            listTasks: dbTask.data,
            _todoDB: new dbController('tasks'),
            // navigation : useNavigation()
        }
    }

    
    storeData = async (value) => {
        try {
            await AsyncStorage.setItem('tasks', value);
        } catch (e) {
            // saving error
        }
    };

    getData = async () => {

        const [tasks, setTasks] = this.context;
        const [alarm, setAlarms] = this.context;
        try {
            const value = await dbTask.getData();
            // console.log("Value 1",value)
            
            
            if (value !== null) {
                setTasks(value)
                // console.log("Value 2",tasks)
                // console.log(2,this.state.listTasks[1])
            }
        } catch (e) {
            // error reading value
        }
    };
    
    componentDidUpdate(prevProps) {
        
        if (prevProps.listTasks !== this.props.listTasks ) {
            this.getData();
        }
    }
    componentWillUnmount(){
        this.getData()
    }
    componentDidMount(){
        
        this.getData()
        // console.log(2,this.state.listTasks)
    }

    navigateToOtherComponent = () => {
        const navigation = useNavigation()
        // Navigue vers le composant OtherComponent
        navigation.navigate("TodoList");
    };


    render(){
        const [tasks, setTasks] = this.context;
        return (

            <View style={{ flex: 1, padding: SIZES.medium }}>
                <View style={styles.topTeaseCompo} >
                    <Text style={styles.headerTitle} >APP par défaut</Text>
                    <TouchableOpacity>
                        <Text style={styles.headerBtn} >Tout</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.appContainer}>
                    <AppDefaut app={iconsfa.MUSIC} ></AppDefaut>
                    <AppDefaut app={iconsfa.TODOLIST} ></AppDefaut>
                    {/* <AppDefaut app={iconsfa.MUSIC} ></AppDefaut> */}
    
                </View>
                <Toptease name={'TODO'}></Toptease>
                <View style={styles.todoContainer}>
                    {tasks && tasks.length > 0?
                        tasks.slice(0, 3).map( (task,index) => 
                            <TodoHome key={index} tasks={task} />
                        )
                        : todoL.aFaire()
                    }
                </View>
            </View>
        )
    }
    
}

export default Home;