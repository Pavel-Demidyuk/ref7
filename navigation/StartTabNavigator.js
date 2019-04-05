import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import QrScanScreen from '../screens/QrScanScreen';
import QrDisplayScreen from '../screens/QrDisplayScreen';
import ResultsScreen from '../screens/ResultsScreen';
import TimerScreen from '../screens/TimerScreen';

const QrScanStack = createStackNavigator({
    Qr: QrScanScreen,
});

QrScanStack.navigationOptions = {
    tabBarLabel: 'Scan QR code',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-qr-scanner'
                    : 'md-qr-scanner'
            }
        />
    ),
};

const QrDisplayStack = createStackNavigator({
    Qr: QrDisplayScreen,
});

QrDisplayStack.navigationOptions = {
    tabBarLabel: 'Generate QR code',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-barcode'
                    : 'md-qr-scanner'
            }
        />
    ),
};

const TimerStack = createStackNavigator({
  Timer: TimerScreen,
});

TimerStack.navigationOptions = {
  tabBarLabel: 'Timer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const ResultsStack = createStackNavigator({
  Result: ResultsScreen,
});

ResultsStack.navigationOptions = {
  tabBarLabel: 'Results',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};
export default createBottomTabNavigator({
    QrScanStack,
    QrDisplayStack,
    TimerScreen,
    ResultsScreen,
});
