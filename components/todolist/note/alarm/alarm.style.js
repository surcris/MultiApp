import { StyleSheet } from "react-native";

import {COLORS, FONT, icons, images, SIZES} from '../../../../constants';

const styles = StyleSheet.create({
    container:{
        

    },
    topContainer:{
        padding:10,
        alignItems:'flex-end',
        flexDirection:"row",
        justifyContent:'space-between'
    },
    textStyle:{
        fontFamily:FONT.KOD.bold,
        fontSize:SIZES.large,
    },
    inputNameContainer:{
        margin:10,
        backgroundColor:'white',
        borderRadius:5,
    },
    
    checkContainer:{
        width:"100%",
        borderColor:'black',
        flexDirection:"row",
        flexWrap:"wrap",
        
        
    },
    checkDayContainer:{
        paddingHorizontal:10,
        justifyContent:"space-evenly",
        flexDirection:"row",
        flexWrap:"wrap",
        
    },
    checkAllContainer:{
        marginTop:20,
        paddingLeft:15,
        
        flexDirection:"row",
        flexWrap:"wrap",
        
    },
    check:{
        
        justifyContent:"flex-start",
        flexDirection:"row",
        padding:5,
    },
    selectContainer:{
        margin:10,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    afftimer:{
        margin:10,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    timer:{
        fontFamily:FONT.KOD.bold,
        fontSize:SIZES.xxLarge
    }
});

export default styles;
