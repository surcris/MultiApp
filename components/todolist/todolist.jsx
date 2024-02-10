import React, { Component, useState, useEffect, useContext } from 'react';
import { Image, TouchableOpacity, View, Text, Dimensions, KeyboardAvoidingView, TextInput, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./todolist.style";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Todo from './todo/todo';
import dbController from '../../database/dbController';
import { TasksContext } from '../../database/TasksProvider';
const windowHeight = Dimensions.get('window').height;


const dbTask = new dbController('tasks');


export default class TodoList extends Component {

  static contextType = TasksContext;

  constructor(props) {
    super(props);
    this.state = {
      task: null,
      taskItems: [],
      settingBtn: false,
      compt: null
    }
  }

  // storeData = async (value) => {
  //   try {
  //     await AsyncStorage.setItem('tasks', JSON.stringify(value));
  //   } catch (e) {
  //     console.error("Erreur lors de l'enregistrement des tâches");
  //   }
  // };

  getData = async () => {
    const [tasks, setTasks] = this.context; 
    // console.log('cont',tasks)
    try {
      const value = await dbTask.getData();
      // const myObj = JSON.parse(value)
      
      if (value !== null) {
        setTasks(value)
        // console.log('Get Todo',this.state.taskItems)
        this.setState({ taskItems: value })
        // console.log('Get Todo2',this.state.taskItems)
      }
    } catch (e) {
      // error reading value
    }
  };

  addTask() {
    
    if (this.state.task !== null && this.state.task !== "") {
      const [tasks, setTasks] = this.context;

      let tasksTempo = tasks;
      
      const newTask = {
        complete: false,
        task: this.state.task
      }
      console.log('Add Tâche', newTask)
      tasksTempo.push(newTask)

      // console.log('Add Deb 1', tasksTempo)
      setTasks(tasksTempo)
      // console.log('Add Deb 2', tasks)
      dbTask.saveData(tasks)
      this.setState({ task: null })
      this.getData()
    }
    
    
  }

  
  handleCompleteChange(index) {
    const [tasks, setTasks] = this.context;
    let tasksTempo = tasks;
    // console.log(' handle Deb 1',tasksTempo)
    tasksTempo[index].complete = !tasksTempo[index].complete;
    // console.log(' handle Deb 2',tasksTempo)
    setTasks(tasksTempo)
    dbTask.saveData(tasks)
    this.getData()
    
  }

  aFaire(){

    return(
      <Text>Aucune tâche à éffectuer</Text>
    )
  }


  componentDidMount() {
    this.getData()
    // const [tasks, setTasks] = this.context; 
    // console.log('cont',tasks)
  }

  render() {
    const [tasks, setTasks] = this.context; 
    return (


      <View style={styles.mainContainer}>
        {/* <View style={styles.headerContainer}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>To-Do</Text>
          <TouchableOpacity onPress={() => this.handleSetting()}>
            <FontAwesomeIcon icon={faEllipsisVertical} size={23}></FontAwesomeIcon>
          </TouchableOpacity>

        </View> */}

        <TouchableOpacity onPress={() => this.setState({ settingBtn: false })} style={this.state.settingBtn ? styles.settingOpa : ''}>

        </TouchableOpacity>

        <View style={[styles.settingContainer, this.state.settingBtn ? styles.show : styles.hide]}>
          <TouchableOpacity onPress={() => this.deleteCompleteTask()}
            style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#FDFEFE', }}>Clear complete</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.deleteAllTask()}
            style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#FDFEFE', }}>Clear all</Text>
          </TouchableOpacity>


        </View>
        <View style={styles.taskContainer}>
          {tasks && tasks.length > 0  ?
            tasks.map((item, index) => {
              return (
                <TouchableOpacity key={index}>
                  <Todo myTask={item} onCompleteChange={() => this.handleCompleteChange(index)}></Todo>
                  {// onCompleteChange est une props qui contient une fonction
                  }
                </TouchableOpacity>
              )

            })
            : null
          }


        </View>



        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? "padding" : "height"}
          style={styles.taskWrapper}
        >
          <TextInput style={styles.input} placeholder='Ecrit une tache'
            onChangeText={(text) => this.setState({ task: text })}
            value={this.state.task}></TextInput>
          <TouchableOpacity onPress={() => this.addTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
};


