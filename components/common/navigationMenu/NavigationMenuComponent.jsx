import { Image, TouchableOpacity, View } from "react-native";

import styles from "./NavigationMenuComponent.style";

const NavigationMenu = ({ nom }) => {
  return (
    <View style={styles.container} >
        <Text>{nom}</Text>
    </View>
  );
};

export default NavigationMenu;
