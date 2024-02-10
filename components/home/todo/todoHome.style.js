import { StyleSheet } from "react-native";

import {COLORS, FONT, icons, images, SIZES} from '../../../constants';

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"50px",
        borderRadius:5,
        padding:SIZES.small/2,
        marginVertical:SIZES.small/2,
        backgroundColor:COLORS.lightWhite,

    },
    textStyle:{
        fontFamily:FONT.KOD.bold,
        fontSize:SIZES.large,
        color:COLORS.primary
    }
});

export default styles;
