import { Image, TouchableOpacity, View, Text } from "react-native";

import styles from "./topteaseCompo.style";
import { useNavigation } from '@react-navigation/native';

const Toptease = ({ name }) => {
  const navigation = useNavigation()
  navigateToOtherComponent = () => {
    
    // Navigue vers le composant OtherComponent
    navigation.navigate("Outils", { screen: 'TodoList' });
};

  return (
    <View style={styles.topTeaseCompo} >
      <Text style={styles.headerTitle} >{name}</Text>
      <TouchableOpacity onPress={navigateToOtherComponent}>
        <Text style={styles.headerBtn} >Tout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Toptease;
