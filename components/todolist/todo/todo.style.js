import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {COLORS, FONT, icons, images, SIZES} from '../../../constants';


const styles = StyleSheet.create({
    item: {
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    itemItself:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    CarreUncomplete: {
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },
    CarreComplete: {
        width:24,
        height:24,
        backgroundColor:'#F65555',
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },
    itemText: {
        maxWidth:'80%'
    },
    Circular: {
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5
    }
    
})

export default styles;