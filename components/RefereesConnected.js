import { Text, View } from 'react-native';
import React from 'react';
import RefereeStatus from './RefereeStatus';
import { useRefs } from '../db/ref';
import Constants from 'expo-constants';
import { extractID } from '../helpers';
import { Table, Row } from 'react-native-table-component';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function ReferessConnected({ showMe = true }) {
    let [refs] = useRefs();
    let id = extractID(Constants.deviceId);
    return (
        <View>
            <Table
                borderStyle={{ borderWidth: 0 }}
                style={{ width: wp('60%'), height: hp('17%') }}
            >
                {refs
                    .filter(e => id != extractID(e) || showMe)
                    .map(e => (
                        <RefereeStatus id={e} key={e} />
                    ))}
            </Table>
        </View>
    );
}
