import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import RefereesContext from "../contexts/Referees"


export default function ReferessConnected() {

    const refereesContext = useContext(RefereesContext)
    return (
        <View>
            <Text>Referees connected: {refereesContext.sideReferees.length}</Text>
        </View>
    );
}
