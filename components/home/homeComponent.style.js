import { StyleSheet } from "react-native";

import {COLORS, icons, FONT, images, SIZES} from '../../constants';

const styles = StyleSheet.create({
    topTeaseCompo: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    appContainer:{
        flexDirection:'row',
        paddingVertical:SIZES.small,
    },
    todoContainer:{
        flexDirection:'column',
        paddingVertical:SIZES.small/2,
    },
    headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.KOD.bold,
        color: COLORS.primary,
    },
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.KOD.medium,
        color: COLORS.gray,
    },
});

export default styles;
