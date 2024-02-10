import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TasksProvider } from './database/TasksProvider';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { ScreenHeaderBtn, MusicComponent, Home, TodoList } from './components'
import { COLORS, icons, images, SIZES, iconsfa, FONT } from './constants';
import 'react-native-gesture-handler'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Navigation from './Navigation';

const Drawer = createDrawerNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    DMBold: require('./assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('./assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('./assets/fonts/DMSans-Regular.ttf'),
    KodchasanItalic: require('./assets/fonts/Kodchasan-Italic.ttf'),
    KodchasanBold: require('./assets/fonts/Kodchasan-Bold.ttf'),
    KodchasanExtraLight: require('./assets/fonts/Kodchasan-ExtraLight.ttf'),
    KodchasanLight: require('./assets/fonts/Kodchasan-Light.ttf'),
    KodchasanRegular: require('./assets/fonts/Kodchasan-Regular.ttf'),
    KodchasanMedium: require('./assets/fonts/Kodchasan-Medium.ttf'),
    KodchasanSemiBold: require('./assets/fonts/Kodchasan-SemiBold.ttf'),
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  // useEffect(() => {
  //     // Update the document title using the browser API
  //     // console.log(iconsfa.HOME.iconFa)
  //   });

  return (
    <SafeAreaProvider>
      <TasksProvider>
        <NavigationContainer>

          <Navigation />

        </NavigationContainer>
      </TasksProvider>
    </SafeAreaProvider>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
