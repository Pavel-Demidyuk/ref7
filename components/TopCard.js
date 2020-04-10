import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage } from 'react-native-responsive-fontsize';
import TopCardStyle from '../styles/TopCardStyle'

const btnHeight = Math.min(hp('12%'), 64);


function TopCard({
    background = '#EEFFF5',
    text,
    infoContainer,
    button,
    onPress,
    id,
    btnRound = btnHeight / 2
}) {
    return (
        <View
            style={{
                ...TopCardStyle.styles.container,
                backgroundColor: background
            }}
        >
            <View style={TopCardStyle.styles.topCard}>
                <View style={TopCardStyle.styles.infoContainer}>{infoContainer()}</View>
                <View style={TopCardStyle.styles.textInfo}>
                    {id ? <View style={TopCardStyle.styles.forID}>{id()}</View> : null}
                    {text()}
                </View>
            </View>
            <TouchableOpacity style={TopCardStyle.styles.actionButton} onPress={onPress}>
                <LinearGradient
                    colors={['#00FA87', '#00F4BB']}
                    style={{
                        ...TopCardStyle.styles.gradient,
                        borderRadius: btnRound
                    }}
                >
                    <Text
                        style={{
                            fontSize: RFPercentage(2.5),
                            fontWeight: 'bold',
                            color: '#fff'
                        }}
                    >
                        {button}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

export { TopCard };
