import { View, Text,SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {ScreenHeaderBtn} from '../components'
import {COLORS, icons, images, SIZES} from '../constants';
// import ScreenHeaderBtn from '../components'

const Drawer = createDrawerNavigator();

const Home = () => {
    // const router = useRouter();

    
    return (
        // <NavigationContainer style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        //     <Drawer.Navigator 
        //         screenOptions={{
        //             drawerStyle:{
        //                 backgroundColor: COLORS.lightWhite
        //             },
        //             headerLeft: () => (
        //                 <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
        //             ),
        //             headerRight: () => (
        //                 <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
        //             ),
        //             headerTitle:""
        //         }}    
        //     >
        //         <Drawer.Screen
        //             name="home"
        //             options={{
        //                 drawerLabel:"Home",
        //                 title: "Home",
                        
        //             }}
        //             component={Home}
        //         />

        //     </Drawer.Navigator>


        //     {/* <Stack.Screen options={{
        //         headerStyle: {
        //             backgroundColor: COLORS.lightWhite},
        //             headerLeft: () => (
        //                 <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
        //             ),
        //             headerRight: () => (
        //                 <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
        //             ),
        //             headerTitle:""
        //     }}
        //     /> */}
        //     {/* <ScrollView showsVerticalScrollIndicator={false}>
        //         <View style={{flex:1,padding:SIZES.medium}}>
        //             <Welcome/>
        //             <Popularjobs/>
        //             <Nearbyjobs/>
        //         </View>
        //     </ScrollView> */}
            
        // </NavigationContainer>

        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home;