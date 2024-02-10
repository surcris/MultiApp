import { Image, TouchableOpacity, View, Text } from "react-native";
import { useEffect, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./training.style";
import { useNavigation } from '@react-navigation/native';
import * as iconsExpo from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import dbController from "../../../database/dbController";
import { AlarmsContext } from "../../../database/AlarmsProvider";
import { Switch } from '@rneui/themed';

function Training() {

  const alarmDb = new dbController('Alarm');
  const [intermediateData, setIntermediateData] = useState(null);
  const [alarmDatas, setAlarmDatas] = useState()
  const [open, setOpen] = useState(false);
  let date;
  // const [alarm, setAlarms] = useContext(AlarmsContext);
  const navigation = useNavigation()
  navigateToOtherComponent = () => {
    // getData()
    // Navigue vers le composant OtherComponent
    console.log("A envoyer :", alarmDatas);
    // navigation.navigate("Add Alarm", { listAlarm: [alarmDatas, setAlarmDatas] });
    navigation.navigate("Add Alarm");
  };

  getData = async () => {
    // alarmDatas = [];
    await alarmDb.getData()
    .then((result) => {
      console.log("Main result:", result);
      setAlarmDatas(result)
      // alarmDatas = result
      // const activityData = alarmDatas[1];
      console.log("Main Train:", alarmDatas);
    })
    // const {alarm, setAlarms} = useContext(AlarmsContext);
    
    
    
  };
  

  useEffect(() => {
    const fetchData = async () => {
      await alarmDb.getData()
        .then((result) => {
          setAlarmDatas(result);
          // console.log(alarmDatas)
        })
      // setIntermediateData(data);
      
    };
    fetchData();
    // getData();
  }, []) // tableau de dépendances vide

  useEffect(() => {
    console.log(alarmDatas);
  }, [alarmDatas]); // se déclenche chaque fois que alarmDatas change


  return (


    <View style={{ flex: 1, paddingTop:10 }}>
      
      {alarmDatas && alarmDatas.length > 0  ? 
        alarmDatas.map((item, index) => {
          return (
            <View key={index} style={styles.containerAlarm}>
              <View key={index} style={styles.containerAlarmItem}>
                <TouchableOpacity style={styles.containerAlarmTouch}>
                  <Text>{item.nom}</Text>
                  {/* <Text>{item.time.getHours()}</Text> */}
                  <Switch value={open} onValueChange={setOpen} />
                </TouchableOpacity>
              </View>
            </View>
          )
        })
        : 
        <View  style={styles.containerAlarm}>
          <View  style={styles.containerAlarmItem}>
            <TouchableOpacity style={styles.containerAlarmTouch}>
              <Text>Aucune données</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      

      <iconsExpo.Ionicons
        style={styles.addWrapper}
        name="add-circle-sharp"
        size={70}
        color={COLORS.bleuClair}
        onPress={navigateToOtherComponent}
      />

    </View>

    
  );
};

export default Training;
