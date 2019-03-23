import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {BarChart} from 'react-native-chart-kit';
import {Body, Button, Header, Left, Text, Title} from 'native-base';

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
                            <Ionicons name='md-arrow-back' style={{color: "#fff", fontSize: 25}}/>
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
                            height={200}
                            chartConfig={{
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
                        <View style={{flexDirection: 'row', marginTop: 30}}>
                            <Text style={{fontSize: 16, color: "#000"}}>1st Referee</Text>
                            <Text style={{marginLeft: 15, fontSize: 13, color: "#2ECC98"}}>1 min 9 sec</Text>
                        </View>
                        <View style={{height: 1, width: 190, backgroundColor: "#DCDCDC", marginTop: 20}}></View>

                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Text style={{fontSize: 16, color: "#000"}}>2nd Referee</Text>
                            <Text style={{marginLeft: 15, fontSize: 13, color: "#2ECC98"}}>1 min 12 sec</Text>
                        </View>
                        <View style={{height: 1, width: 190, backgroundColor: "#DCDCDC", marginTop: 20}}></View>

                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Text style={{fontSize: 16, color: "#000"}}>3rd Referee</Text>
                            <Text style={{marginLeft: 15, fontSize: 13, color: "#2ECC98"}}>1 min 06 sec</Text>
                        </View>
                        <View style={{height: 1, width: 190, backgroundColor: "#DCDCDC", marginTop: 20}}></View>

                        <Text style={{color: "#000", fontSize: 21, marginTop: 12}}>Average</Text>
                        <Text style={{color: "#2ECC98", fontSize: 16, marginTop: 7}}>1 min 09 sec</Text>
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
        backgroundColor: "#fff",
        borderRadius: 25,
        borderColor: "#EFEFEF",
        borderWidth: 1,
        width: 240,
        height: 290,
        alignItems: 'center',
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

const data = {
    labels: ['1 Referee', '2 Referee', '3 Referee'],
    datasets: [{
        data: [time1, time2, time3]
    }]
};
