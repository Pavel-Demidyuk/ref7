import React from 'react';
import { View, Text } from 'react-native';
import { Card } from './../components/Card';
import { useAvgTime } from '../db/timer';
import { timeToString } from '../helpers';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { addResults, useResults } from '../db/results';
import { Table, TableWrapper, Cell } from 'react-native-table-component';

export default function ResultsScreen() {
    const [time] = useAvgTime();
    const [results] = useResults();

    return (
        <Card
            circle={circleSize => (
                <Text
                    style={{
                        fontSize: circleSize / 8,
                        fontFamily: 'timer',
                        color: '#000'
                    }}
                >
                    {timeToString(time)}
                </Text>
            )}
            text={() => (
                <View>
                    <Table
                        borderStyle={{
                            borderWidth: 0
                        }}
                        style={{ width: 160 }}
                    >
                        {results.map((e, i) => (
                            <TableWrapper
                                style={{ flexDirection: 'row', backgroundColor: '#fff' }}
                                key={i}
                            >
                                <Cell
                                    data={i + 1}
                                    textStyle={{ margin: 0, color: '#000' }}
                                />
                                <Cell
                                    data={timeToString(e.time)}
                                    textStyle={{
                                        margin: 0,
                                        color: '#444',
                                        fontFamily: 'timer'
                                    }}
                                    style={{ width: 100 }}
                                />
                            </TableWrapper>
                        ))}
                    </Table>
                </View>
            )}
            button="Save Result"
            btnRound={10}
            onPress={() => addResults(time, +new Date())}
            id={() => (
                <Text style={{ color: 'gray', textAlign: 'center', marginTop: 16 }}>
                    Competition ID: {pin}{' '}
                </Text>
            )}
        />
    );
}

ResultsScreen.navigationOptions = {
    header: null
};
