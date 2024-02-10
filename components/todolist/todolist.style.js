import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {COLORS, FONT, icons, images, SIZES} from '../../constants';
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 5,
        height: windowHeight - 70,
        flexDirection: 'column',
        // borderWidth:1,
        // borderColor:'red'
    },
    headerContainer: {
        height: 50,
    
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    settingContainer: {
        zIndex: 10,
        backgroundColor: '#34495E',
    
        width: 120,
        borderRadius: 5,
        position: "absolute",
        top: 40,
        right: 20,
        alignItems: "center"
    },
    settingOpa: {
        position: 'absolute',
        marginTop: 40,
        height: windowHeight - 100,
        width: '100%',
        zIndex: 2,
        backgroundColor: 'black',
        opacity: 0.4
    },
    buttonStyle: {
        borderRadius: 50,
        height: 40,
        width: 40,
        backgroundColor: "blue",
    },
    taskContainer: {
        paddingLeft: 10,
        paddingRight: 10
    },
    taskWrapper: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
    
    },
    show: {
        // vos styles pour afficher le composant
    },
    hide: {
        display: 'none', // cela ne fonctionnera pas en React Native
    },

    //!!!!!!!!!!!!!!!
    containerTodoHome:{
        width:"100%",
        height:"50px",
        borderRadius:5,
        padding:SIZES.small/2,
        marginVertical:SIZES.small/2,
        backgroundColor:COLORS.gray,

    },
    textStyleTodoHome:{
        fontFamily:FONT.KOD.bold,
        fontSize:SIZES.large,
    }
});

export default styles;


