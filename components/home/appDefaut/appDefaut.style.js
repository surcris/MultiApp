import { StyleSheet } from "react-native";

import {COLORS, icons, images, SIZES} from '../../../constants';

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:COLORS.lightWhite,
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.small,
        
        marginHorizontal:5
    },
    iconS:{
        backgroundColor:'white'
    }
});

export default styles;
