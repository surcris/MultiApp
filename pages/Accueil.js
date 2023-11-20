import React from "react";
import { Modal, View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native";
import ProfilComponent from "../components/ProfilComponent";
import InfoRandom from "../components/InfoRandomComponent";
import BulleText from "../components/BulleTextComponent";
import CardOnOff from "../components/CardOnOff";
import EstimValue from "../components/EstimValueComponent";




const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function Accueil() {

    
    
    const cardInf = [
        {
            nom:"Bed",
            describ:"Bed"
        },
        {
            nom:"Salle de bain",
            describ:"Bed"
        },
        {
            nom:"Cuisine",
            describ:"Bed"
        },
        {
            nom:"Salon",
            describ:"Bed"
        }
    ]
    return(
        <View style={styles.accueilContainer}>
            
            
            <View style={{flex:1,borderWidth: 1,borderColor: 'purple',}}>
                <ProfilComponent p_text="je suis une props"/>
            </View>
            <View style={{flex:1,borderWidth: 1,borderColor: 'purple',}}>
                <InfoRandom />
            </View>
            <View style={styles.contentCate}>
                <ScrollView horizontal={true}>
                    <BulleText p_value={"All"} />
                    <BulleText p_value={"Champignons"} />
                    <BulleText p_value={"Pomme"} />
                    <BulleText p_value={"Champignons"} />
                    <BulleText p_value={"Champignons"} />
                    <BulleText p_value={"Champignons"} />
                    <BulleText p_value={"Champignons"} />
                </ScrollView>
            </View>
            <View style={styles.zoneOnOff}>
                <View style={styles.zoneOnOffLigne}>
                    <CardOnOff info={cardInf[0]}></CardOnOff>
                    <CardOnOff info={cardInf[1]}></CardOnOff>
                </View>
                <View style={styles.zoneOnOffLigne}>
                    <CardOnOff info={cardInf[2]}></CardOnOff>
                    <CardOnOff info={cardInf[3]}></CardOnOff>
                </View>
            </View>
            <View style={{flex:1,borderWidth: 1,borderColor: 'blue'}}>
                <EstimValue></EstimValue>
            </View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    accueilContainer: {
        paddingTop:40,
        flex:1,
        flexDirection:'column',
    },
    contentCate: {
        alignItems:'center',
        flexDirection:'row',
        paddingBottom:5,
        paddingTop:5,
        paddingLeft:5,
    },
    zoneOnOff: {
        flex:6,
        maxWidth:"100%",
        flexDirection:'column',
        flexWrap:'wrap',
        borderWidth: 1,
        borderColor: 'blue'
    },
    zoneOnOffLigne: {
        flex:1,
        
        flexDirection:'row',
        
        borderWidth: 1,
        borderColor: 'blue'
    }

})