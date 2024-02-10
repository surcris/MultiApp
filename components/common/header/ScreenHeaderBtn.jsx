import { Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as fa from '@fortawesome/free-solid-svg-icons';
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <FontAwesomeIcon icon={iconUrl} size={23} ></FontAwesomeIcon>
      {/* <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      /> */}
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
