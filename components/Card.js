import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from '../styles';

function Card({ circle, text, button, onPress, color = '#2DCB73'}) {
  return (
    <View style={styles.container}>
      <View style={styles.qrCard}>
        <View style={{ ...styles.circle, borderColor: color }}>
          { circle() }
        </View>
        <View style={{ marginTop: wp('20%') }}>
          { text() }
        </View>
      </View>
      <View style={styles.startTournamentButtonPos}>
          <TouchableOpacity style={{
            ...styles.blockButtonOutline,
            borderColor: color, shadowColor: color
          }} onPress={onPress}>
              <Text style={{
                fontSize: wp('5%'),
                color
              }}>{ button }</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export { Card }
