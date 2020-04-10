import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import QrScanScreen from '../screens/QrScanScreen';
import QrDisplayScreen from '../screens/QrDisplayScreen';
import InfoScreen from '../screens/InfoScreen';
import Icons from '../icons';

const QrScanStack = createStackNavigator({
    Qr: QrScanScreen
});

QrScanStack.navigationOptions = {
    tabBarLabel: 'Scan QR code',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Icons.qrScan} />
};

const QrDisplayStack = createStackNavigator({
    Qr: QrDisplayScreen
});

QrDisplayStack.navigationOptions = {
    tabBarLabel: 'Generate QR code',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Icons.add} />
};

const InfoStack = createStackNavigator({
    Info: InfoScreen
});

InfoStack.navigationOptions = {
    tabBarLabel: 'Information',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Icons.info} />
};

export default createBottomTabNavigator({
    QrScanStack,
    QrDisplayStack,
    InfoStack
});
