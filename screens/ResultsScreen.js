import React from 'react';
import { View, Text } from 'react-native';
import { TopCard } from './../components/TopCard';
import { useAvgTime } from '../db/timer';
import { timeToString } from '../helpers';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { addResults, useResults } from '../db/results';
import { Table, TableWrapper, Cell } from 'react-native-table-component';
import {RFPercentage} from "react-native-responsive-fontsize";


export default function ResultsScreen() {
    const [time] = useAvgTime();
    const [results] = useResults();

    return (
        <TopCard
            infoContainer={() => (
                <View
                    style={{
                         width: wp('71%'),
                         height: wp('71%'),
                         borderRadius: wp('71%') / 2,
                         backgroundColor: '#E7E7E7',
                         alignItems: 'center',
                         justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            width: wp('54%'),
                            height: wp('54%'),
                            borderRadius: wp('54%') / 2,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 0,
                            },
                            shadowOpacity: 0.16,
                            shadowRadius: 1,
                            elevation: 10
                        }}
                    >
                        <Text style={{color: '#18D166'}}>ВРЕМЯ ГЛАВНОГО СУДЬИ</Text>
                    </View>
                </View>
            )}
            text={() => (
                <View style={{height: hp('16.8%'), overflow: 'scroll'}}>
                    <Table
                        borderStyle={{
                            borderWidth: 0
                        }}
                    >
                        {results.map((e, i) => (
                            <TableWrapper
                                style={{
                                    flexDirection: 'row',
                                    marginTop: hp('0.7%'),
                                    width: wp('60%'),
                                    height: hp('5%')
                                }}
                                key={i}
                            >
                                <Cell
                                    data={i + 1}
                                    textStyle={{ color: '#000', fontSize: RFPercentage(2.7) }}
                                />
                                <Cell
                                    data={timeToString(e.time)}
                                    textStyle={{ color: '#18D166', fontSize: RFPercentage(2.7) }}
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
