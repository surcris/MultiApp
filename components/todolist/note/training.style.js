import { StyleSheet } from "react-native";

import {COLORS, FONT, icons, images, SIZES} from '../../../constants';

const styles = StyleSheet.create({
    container:{
        

    },
    textStyle:{
        position: 'relative',
        alignSelf:"center",
        justifyContent:"center",
        // fontFamily:FONT.KOD.bold,
        // fontSize:30,
    },
    addWrapper: {
        position: 'absolute',
        bottom: 10,
        // left: "50%",
        alignSelf:"center",
        justifyContent:"center",
        // width: 60,
        // height: 60,
        // backgroundColor: COLORS.bleuClair,
        // borderRadius: 60,
        // borderColor: '#C0C0C0',
        // borderWidth: 1,
    },
    containerAlarm:{
        paddingLeft: 10,
        paddingRight: 10,
        
    },
    containerAlarmTouch:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    containerAlarmItem:{
        backgroundColor:'#fff',
        paddingHorizontal:15,
        borderRadius:10,
        marginBottom:10
    }
});

export default styles;
