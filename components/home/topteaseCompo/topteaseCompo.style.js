import { StyleSheet } from "react-native";

import { COLORS, SIZES,FONT } from "../../../constants";

const styles = StyleSheet.create({
    topTeaseCompo: {
        flexDirection:'row',
        justifyContent:'space-between'
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
