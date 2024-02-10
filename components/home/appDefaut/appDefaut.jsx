import { View, Text,SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useState,useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import styles from "./appDefaut.style";
import {COLORS, icons, images, SIZES,iconsfa} from '../../../constants';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import TodoHome from "../todo/todoHome";

const list = ["HOME","TODOLIST","MUSIC"]
const AppDefaut = ({app}) => {
    const navigation = useNavigation()
    // const router = useRouter();
    // const [iconD, setIconD] = useState(app)
    
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     console.log(app.iconFa)
    //   });
    const navigateToOtherComponent = () => {
        // Navigue vers le composant OtherComponent
        navigation.navigate(app.nom);
      };
    return (

        <TouchableOpacity style={styles.container} onPress={navigateToOtherComponent}>
            <FontAwesomeIcon  icon={app.iconFa} size={50}></FontAwesomeIcon>
            <Text>{app.nom}</Text>
        </TouchableOpacity>
    )
}

export default AppDefaut;