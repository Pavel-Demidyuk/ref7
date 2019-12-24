import React from 'react';
import { View, Text } from 'react-native';
import { Card } from './../components/Card';
import { useAvgTime } from '../db/timer';
import { timeToString } from '../helpers';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { addResults, useResults } from '../db/results';
import { Table, Rows } from 'react-native-table-component';

export default function ResultsScreen() {
    const [time] = useAvgTime();
    const [results] = useResults()

    return (
        <Card
            circle={() => (
                <Text
                    style={{
                        fontSize: wp('12%'),
                        color: '#000'
                    }}
                >
                    {timeToString(time)}
                </Text>
            )}
            text={() => (
                <View>
                    <Table
                        borderStyle={{ borderWidth: 0, borderColor: '#fff' }}
                        style={{ width: 160 }}
                    >
                        <Rows data={results.map((e, i)=>[i+1, timeToString(e.time)])}/>
                    </Table>
                </View>
            )}
            button="Save Result"
            onPress={() => addResults(time, +new Date())}
        />
    );
}

ResultsScreen.navigationOptions = {
    header: null
};
