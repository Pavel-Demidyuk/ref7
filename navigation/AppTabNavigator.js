import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TimerScreen from '../screens/TimerScreen';
import ResultsScreen from '../screens/ResultsScreen';
import TestScreen from '../screens/TestScreen';

const TimerStack = createStackNavigator({
    Timer: TimerScreen
});

TimerStack.navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'Timer',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} />
};

const ResultsStack = createStackNavigator({
    Result: ResultsScreen
});

ResultsStack.navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'Results',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
        />
    )
};

const TestStack = createStackNavigator({
    Test: TestScreen
});

TestStack.navigationOptions = {
    tabBarLabel: 'Test',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    )
};

export default createBottomTabNavigator({
    TimerStack,
    ResultsStack,
    TestStack
});
