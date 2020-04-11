import React from 'react';
import { View, Text } from 'react-native';
import { TopCard } from './../components/TopCard';
import { useAvgTime } from '../db/timer';
import { timeToString } from '../helpers';
import { addResults, useResults } from '../db/results';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { Table, TableWrapper, Cell } from 'react-native-table-component';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ResultsStyle from "../styles/ResultsStyle";

export default function ResultsScreen() {
    const [time] = useAvgTime();
    const [results] = useResults();

    return (
        <TopCard
            infoContainer={() => (
                <View
                    style={ResultsStyle.styles.bigCircle}
                >
                    <View
                        style={ResultsStyle.styles.smallCircle}
                    >
                        <Text style={{ color: '#18D166' }}>ВРЕМЯ ГЛАВНОГО СУДЬИ</Text>
                    </View>
                </View>
            )}
            text={() => (
                <View style={ResultsStyle.styles.tableContainer}>
                    <Table
                        borderStyle={{
                            borderWidth: 0
                        }}
                    >
                        {results.map((e, i) => (
                            <TableWrapper
                                style={ResultsStyle.styles.table}
                                key={i}
                            >
                                <Cell
                                    data={i + 1}
                                    textStyle={{
                                        color: '#000',
                                        fontSize: RFPercentage(2.7)
                                    }}
                                />
                                <Cell
                                    data={timeToString(e.time)}
                                    textStyle={{
                                        color: '#18D166',
                                        fontSize: RFPercentage(2.7)
                                    }}
                                />
                            </TableWrapper>
                        ))}
                    </Table>
                </View>
            )}
            button="SAVE RESULT"
            btnRound={39}
            onPress={() => addResults(time, +new Date())}
            id={() => (
                <Text style={{ color: '#000', textAlign: 'center' }}>
                    Competition ID: {pin}{' '}
                </Text>
            )}
        />
    );
}

ResultsScreen.navigationOptions = {
    header: null
};
