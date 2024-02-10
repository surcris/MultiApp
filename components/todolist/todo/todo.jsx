import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./todo.style";

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handlePropsTask = () => {
        this.props.onCompleteChange();
        
    }
    componentDidMount(){
        // console.log(this.props.myTask)
    }
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.itemItself}>
                    <TouchableOpacity onPress={() => this.handlePropsTask()}
                     style={this.props.myTask.complete ? styles.CarreComplete : styles.CarreUncomplete}></TouchableOpacity>
                    <Text style={styles.itemText}>{this.props.myTask.task}</Text>
                </View>
                {/* <View style={styles.Circular}>

                </View> */}
            </View>
        );
    }
}


