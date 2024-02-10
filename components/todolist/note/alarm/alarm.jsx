import { Image, TouchableOpacity, View, Text, Modal, Button, TextInput } from "react-native";
import { useContext, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import styles from "./alarm.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Checkbox from 'expo-checkbox';
import {COLORS, FONT, icons, images, SIZES} from '../../../../constants';
import dbController from "../../../../database/dbController";
import { AlarmsContext } from "../../../../database/AlarmsProvider";

function Alarm ({ iconUrl, dimension, handlePress, route  }) {
    const dbAlarm = new dbController('Alarm')
    
    const [heure, setHeure] = useState(new Date());
    const { alarm, setAlarms } = useContext(AlarmsContext);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || heure;
        setHeure(currentDate);
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        console.log(`Heure sélectionnée : ${hours}:${minutes}`);
    };
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: heure,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };
    
    const showTimepicker = () => {
        showMode('time');
    };
    const [weekDay, setWeekDay] =  useState([
        {day:"L",state:false},
        {day:"M",state:false},
        {day:"M",state:false},
        {day:"J",state:false},
        {day:"V",state:false},
        {day:"S",state:false},
        {day:"D",state:false}]);

    const [activity, setActivity] = useState([
        {name:"Sport",state:false},
        {name:"Etude",state:false},
        {name:"Projet personnel",state:false},
        {name:"Projet groupe",state:false}]);

    const navigation = useNavigation()
    const [nomAlarm, setNomAlarm] = useState("");
    
    function changeNon(text){
        setNomAlarm(text)
        // console.log(text)
    }
    function changeStateDay(key) {
        
        setWeekDay(prevState => prevState.map((item, index) => {
            if (index === key) {
                // console.log("A",item)
                return { ...item, state: !item.state };
            }
            
            return item;
        }));

    }
    function changeStateActivity(key) {
        
        setActivity(prevState => prevState.map((item, index) => {
            if (index === key) {
                // console.log("A",item)
               
                return { ...item, state: !item.state };
            }else{
                
                return { ...item, state: false };
            }
            
            // return item;
        }));
       
        // console.log("C",activity)
    }
    async function completAll() {
        let listAlarms = [];
       
        console.log("LLEE",alarm)
        
        // this.listAlarms
        const date = new Date(heure)
        await dbAlarm.getData()
        .then((result) => {
            // if(result !== null){
            //     // let l = await dbAlarm.getData()
                
            //     listAlarms.push(result)
            //     console.log("1",listAlarms)
            //     const alarmInfo = {
            //         nom:nomAlarm,
            //         day:weekDay,
            //         activity:activity,
            //         time:date,
            //         active:true
            //     }
            //     listAlarms.push(alarmInfo)
            //     console.log("1",listAlarms)
            //     dbAlarm.saveData(listAlarms)
            //     navigation.goBack();
            // }else{
                
            //     const alarmInfo = {
            //         nom:nomAlarm,
            //         day:weekDay,
            //         activity:activity,
            //         time:date,
            //         active:true
            //     }
            //     listAlarms.push(alarmInfo)
            //     console.log("2",listAlarms)
            //     dbAlarm.saveData(listAlarms)
            //     navigation.goBack();
            // }
        })
       
        // dbAlarm.deleteAllData()

    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => (dbAlarm.deleteAllData())}>
                    <Text style={
                        {
                            fontFamily: FONT.KOD.bold,
                            fontSize: SIZES.medium, 
                            color: COLORS.bleuClair, 
                            textAlign: 'justify',
                        }
                    }
                    
                    >Annuler</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                        fontFamily: FONT.KOD.bold,
                        fontSize: SIZES.large
                    }}>Nouveau Training</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => completAll()}>
                    <Text style={{
                        fontFamily: FONT.KOD.bold,
                        fontSize: SIZES.medium, 
                        color: COLORS.bleuClair, 
                        textAlign: 'justify',
                    }}>Terminer</Text>
                </TouchableOpacity>
                
            </View>
            {/* <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
            <View style={styles.inputNameContainer}>
                <Text style={{margin:5,}}>Nom de l'alarme :</Text>
                <TextInput style={{marginLeft:5,}} placeholder="Entrer" onChangeText={(text) => changeNon(text)}>

                </TextInput>
                
            </View>
            
            <View style={styles.checkDayContainer}>
            {
                weekDay.map((day,key) => 
                <View key={key} style={styles.check}>
                    <Text style={styles.paragraph}>{day.day} </Text>
                        <Checkbox value={day.state} color="red" onValueChange={() => changeStateDay(key)} />
                </View>
                )
            }
            </View>
            
            <View style={styles.inputNameContainer}>
                {
                    activity.map((act, key) =>
                        <View key={key} style={styles.selectContainer}>
                            <Text style={styles.paragraph}>{act.name}</Text>
                            <Checkbox value={act.state} color="blue" onValueChange={() => changeStateActivity(key)} />
                        </View>
                        
                    )
                }
            </View>

            <View style={styles.afftimer}>
                <Text style={styles.timer} >
                    {`${heure.getHours().toString().padStart(2, '0')} : ${heure.getMinutes().toString().padStart(2, '0')}`}
                </Text>
            </View>

            <Button onPress={showTimepicker} title="Sélectionner le temps" />
            
            
        </SafeAreaView>
    );
};

export default Alarm;
