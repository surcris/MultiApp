import { useState, useRef, useLayoutEffect, useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {Text, View, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListCompo } from "./components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as iconsExpo from "@expo/vector-icons";
import { COLORS } from "./constants";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import dbController from './database/dbController';
import { TasksContext } from './database/TasksProvider';



let nameRouteAct = "";
const db = new dbController('tasks')
const Tab = createBottomTabNavigator()
function TabGroup({navigation, route}) {
    const [etatMenu, setEtatMenu] = useState(false);
    
    const [tasks, setTasks] = useContext(TasksContext);
   
    async function getData (){
       
        try {
            const value = await db.getData();
            console.log('Get Nav', value)
            // const myObj = JSON.parse(value)
            setTasks(value)
            console.log('Get Nav 2', tasks)
        } catch (e) {
            // error reading value
        }
    };
    async function deleteAll() {
        
        
        await db.deleteAllData().then(
            () => {
                setTasks([]); // Utilisez un tableau vide
                // getData(); // Utilisez des parenthèses
                setEtatMenu(false); // Utilisez des parenthèses
                console.log("delete All", tasks);
                
            },
            // Utilisez des virgules
        );
          
        
    }
    async function deleteComplete() {
        await db.deleteCompleteTask().then(
            () => {
                
                getData()
                setEtatMenu(false)
                console.log('delete Complete', tasks)
            },
        )
    }
    
    // let etatMenu = true;
    function optionBtn() {
        
        return (
            
            
            <View >
                <iconsExpo.Ionicons style={{marginRight:10}} name={"ellipsis-vertical"} 
                        size={24} onPress={() => {setEtatMenu(!etatMenu);}} />
                <View  style={ etatMenu ? styles.container : {display:"none"}}>
                    <Text style={styles.textStyleOne} onPress={() => deleteComplete()}>Clear task complete</Text>
                    <Text style={styles.textStyle} onPress={() => deleteAll()}>Clear All</Text>
                </View>
                
            </View>
            
            
        )
    }

    const styles = StyleSheet.create({
        container:{
            position: "absolute", 
            top: 30,
            right: 10,
            borderColor:'black',
            borderWidth:2,
            borderRadius:5,
            padding:5,
            backgroundColor:'white'
        },
        textStyleOne:{
            paddingVertical:3,
            fontSize:16,
            fontWeight:"500",
            borderTopWidth:0
        },
        textStyle:{
            paddingVertical:3,
            fontSize:16,
            fontWeight:"500",
            borderTopWidth:1
        }
    })

    // useLayoutEffect(() => {
    //     console.log(route)
    //     navigation.setOptions({ headerTitle: getHeaderTitle(route) });
    // }, [navigation, route]);
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;

                    if (route.name === "Accueil") {
                        color = focused ? 'black' : "lightgray"
                        iconName = "home"
                    } else if (route.name === "Music") {
                        color = focused ? 'black' : "lightgray"
                        iconName = "musical-notes"
                    } else if (route.name === "Outils") {
                        color = focused ? 'black' : "lightgray"
                        iconName = "list"
                    }

                    return <iconsExpo.Ionicons name={iconName} size={24} color={color} />
                },
                headerShown:true,
                headerLeft:()=>{
                    return <iconsExpo.Ionicons style={{marginLeft:10}} name={"menu"} size={24} onPress={() => {navigation.openDrawer()}} />
                }

            })}
        >
            <Tab.Screen name="Accueil" component={ListCompo.Home}
                options={{
                    
                }}
            />
            <Tab.Screen name="Music" component={ListCompo.MusicComponent}
                
            />
            <Tab.Screen name="Outils" component={TopTapsTodo}
                
                options={{
                    headerRight:()=>{
                        return optionBtn()
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const TopTabs = createMaterialTopTabNavigator()
function TopTapsTodo() {
    return (
        <TopTabs.Navigator>
            <TopTabs.Screen name="TodoList" component={ListCompo.TodoList} />
            <TopTabs.Screen name="Training" component={ListCompo.Training} />
        </TopTabs.Navigator>
    )
}

const Drawer = createDrawerNavigator()
function DrawerGroup({route, navigation}) {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: COLORS.lightWhite,

                },
                headerShown:false
                // headerRight:(route) => (
                    //     console.log()
                    //     <iconsExpo.Ionicons style={{marginRight:10}} name="options" size={24} />
                    // )

            }}
        >
            <Drawer.Screen
                name="Multi Tools"
                options={{
                    drawerLabel: "Multi Tools",
                    title: "Multi Tools",
                    // drawerIcon: () => (
                    //     <ScreenHeaderBtn iconUrl={iconsfa.HOME.iconFa} dimension="60%" />
                    // )
                    headerRight:(route) => {
                        // console.log(nameRouteAct)
                        if (nameRouteAct === "TodoList") {
                            return <iconsExpo.Ionicons style={{marginRight:10}} name="options" size={24} />
                        }
                        
                    },
                    
                }}
                
                component={TabGroup}
            />
            <Drawer.Screen
                name="Options"
                options={{
                    drawerLabel: "Options",
                    title: "Options",
                    // drawerIcon: () => (
                    //     <ScreenHeaderBtn iconUrl={iconsfa.TODOLIST.iconFa} dimension="60%" />
                    // )
                    
                }}
                component={TopTapsTodo}
            />
            {/* <Drawer.Screen
                name="Music"
                options={{
                    drawerLabel: "Music",
                    title: "Music",
                    // drawerIcon: () => (
                    //     <ScreenHeaderBtn iconUrl={iconsfa.MUSIC.iconFa} dimension="60%" />
                    // )
                }}
                component={ListCompo.MusicComponent}
            /> */}

        </Drawer.Navigator>
    )
}

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Accueil" component={DrawerGroup} />
            <Stack.Screen name="Music" component={ListCompo.MusicComponent} />
            <Stack.Screen name="Outils" component={ListCompo.TodoList} />
            <Stack.Screen name="Add Alarm" component={ListCompo.Alarm}
                
                options={() => ({
                    // headerShown:true,
                    title:"APPP",
                    presentation: "modal"
                    
                })}
            />
            {/* <Stack.Screen name="Note" component={ListCompo.TodoList} />
                <Stack.Screen name="TodoList" component={ListCompo.TodoList} /> */}
        </Stack.Navigator>
            // <DrawerGroup />
            // {/* <TabGroup/> */}
        
    )
}