import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo';

export default class Results extends React.Component {

    constructor(props) {
      super(props)

    }

    render() {
        return (
            <LinearGradient
              colors={colorSuccess}
              style={{alignItems: 'center', flex: 1}}
            >
                <View style={styles.resultsCard}>
                    <View style={styles.averageCircle}>
                        <Text style={styles.average}>1 min 08 sec</Text>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

let time1 = 69;
let time3 = 72;
let time2 = 66;

//time1, time2, time3 - показатели трех судей. Могут быть взяты из this.props

const styles = StyleSheet.create({
    resultsCard: {
      flex: 3,
      width: 300,
      height: 380,
      backgroundColor: "#fff",
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 18,
      borderColor: "#E1E1E1",
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },

    averageCircle: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 20,
      width: 240,
      height: 240,
      backgroundColor: "#fff",
      borderRadius: 120,
      borderWidth: 2,
      borderColor: "#2ECC71",
    },

    average: {
      fontSize: 33,
      color: "#2ECC71",
    }
});

const colorSuccess = ["#2ECC71", "#1ABC9C"];
const colorFailure = ["#E74C3C", "#B53471"];
