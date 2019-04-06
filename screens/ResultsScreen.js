import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { Header, Left, Body, Button, Title, Text } from 'native-base';

export default class Results extends React.Component {

    constructor(props) {
      super(props)

    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={{backgroundColor: "#000"}}>
                    <Left>
                        <Button transparent>
                            <Ionicons name='md-arrow-back' style={{color: "#fff", fontSize: 25}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Results</Title>
                    </Body>
                </Header>
                <View style={{backgroundColor: '#fff', flex: 2, alignItems: 'center'}}>
                    <View style={{marginTop: 20}}>
                        <BarChart
                            data={data}
                            width={270}
                            height={188}
                            chartConfig = {{
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                color: (opacity = 1) => `rgba(0, 158, 92, ${opacity})`,
                                strokeWidth: 1,
                            }}
                        />
                    </View>
                </View>
                <View style={{backgroundColor: '#fff', flex: 3, alignItems: 'center'}}>
                    <View style={styles.forResults}>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Text style={{fontSize: 18, color: "#000"}}>1st Referee</Text>
                            <Text style={{marginLeft: 55, fontSize: 18, color: "#2ECC98"}}>1 min 9 sec</Text>
                        </View>
                        <View style={{height: 1, width: 270, backgroundColor: "#DCDCDC", marginTop: 21}}></View>

                        <View style={{flexDirection: 'row', marginTop: 22}}>
                            <Text style={{fontSize: 18, color: "#000"}}>2nd Referee</Text>
                            <Text style={{marginLeft: 55, fontSize: 18, color: "#2ECC98"}}>1 min 12 sec</Text>
                        </View>
                        <View style={{height: 1, width: 270, backgroundColor: "#DCDCDC", marginTop: 21}}></View>

                        <View style={{flexDirection: 'row', marginTop: 22}}>
                            <Text style={{fontSize: 18, color: "#000"}}>3rd Referee</Text>
                            <Text style={{marginLeft: 55, fontSize: 18, color: "#2ECC98"}}>1 min 06 sec</Text>
                        </View>
                        <View style={{height: 1, width: 270, backgroundColor: "#DCDCDC", marginTop: 21}}></View>

                        <Text style={{color:"#000", fontSize: 18, marginTop: 12}}>Average</Text>
                        <Text style={{color:"#2ECC98", fontSize: 18, marginTop: 7}}>1 min 09 sec</Text>
                    </View>
                </View>
            </View>
        );
    }
}

let time1 = 69;
let time3 = 72;
let time2 = 66;

//time1, time2, time3 - показатели трех судей. Могут быть взяты из this.props

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#fff',
        flex: 1
    },

    forResults: {
      marginTop: 20,
      width: 260,
      height: 296,
      alignItems: 'center',
      textAlign: 'center',
    }
});

const data = {
    labels: ['1 Referee', '2 Referee', '3 Referee'],
    datasets: [{
        data: [ time1, time2, time3 ]
    }]
};
