// import * as SQLite from 'expo-sqlite';
import AsyncStorage from '@react-native-async-storage/async-storage';


class dbController {

  constructor(db) {
    this.db = db;
    this.data = [];
  }
  saveData = async (tasks) => {
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem(this.db, jsonValue);

      console.log("Données enregistrées",tasks);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement des données");
    }
  };

  getData = async () => {
    try {
      const dataJson = await AsyncStorage.getItem(this.db);
      this.data = JSON.parse(dataJson);
      // console.log(JSON.parse(dataJson))
      return JSON.parse(dataJson);
    } catch (error) {
      console.error("Erreur lors de la récupération des données");
      throw error;
    }
  };

  deleteAllData = async () => {
    try {
      await AsyncStorage.setItem(this.db, '');
      // this.getData()
      console.log("Données supprimer");
    } catch (error) {
      console.error("Erreur lors de l'enregistrement des données");
    }
  }

  deleteCompleteTask= async () => {

    await this.getData()
    let itemsCopy = this.data // copie le tableau taskItems au nouveau tableau
    console.log('delete DBCONT',this.data)

    for (let index = 0; index < itemsCopy.length; index++) {

        if (itemsCopy[index].complete) { // si complete est vrai 
            //console.log(itemsCopy[index].complete)
            itemsCopy.splice(index, 1) // alors je retire l'objet
        }
    }
    
    this.data = itemsCopy;
    this.saveData(this.data)
    // this.setState({ taskItems: itemsCopy },()=>{
    //     this.saveTasks();
    // })// met a jout le tableau taskItems avec les valeur du tableau newTaskItems
    
}

deleteCompleteTaskDD() {
  // this.getData()
  let itemsCopy = this.data // copie le tableau taskItems au nouveau tableau
  for (let index = 0; index < this.data.length; index++) {

      if (this.data[index].complete) { // si complete est vrai 
          //console.log(itemsCopy[index].complete)
          this.data.splice(index, 1) // alors je retire l'objet
      }
  }
  
  // this.data = itemsCopy;
  this.saveData(this.data)
  // this.setState({ taskItems: itemsCopy },()=>{
  //     this.saveTasks();
  // })// met a jout le tableau taskItems avec les valeur du tableau newTaskItems
  
}

}

export default dbController;