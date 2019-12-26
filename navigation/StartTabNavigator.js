import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import QrScanScreen from '../screens/QrScanScreen';
import QrDisplayScreen from '../screens/QrDisplayScreen';
import InfoScreen from '../screens/InfoScreen';

const QrScanStack = createStackNavigator({
    Qr: QrScanScreen
});

QrScanStack.navigationOptions = {
    tabBarLabel: 'Scan QR code',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-qr-scanner'}
        />
    )
};

const QrDisplayStack = createStackNavigator({
    Qr: QrDisplayScreen
});

QrDisplayStack.navigationOptions = {
    tabBarLabel: 'Generate QR code',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-barcode' : 'md-barcode'}
        />
    )
};

const InfoStack = createStackNavigator({
    Info: InfoScreen
});

InfoStack.navigationOptions = {
    tabBarLabel: 'Information',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-information' : 'md-information-circle'}
        />
    )
};

export default createBottomTabNavigator({
    QrScanStack,
    QrDisplayStack,
    InfoStack
});
