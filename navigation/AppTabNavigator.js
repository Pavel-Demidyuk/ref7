import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TimerScreen from '../screens/TimerScreen';
import ResultsScreen from '../screens/ResultsScreen';
import TestScreen from '../screens/TestScreen';
import icons from '../icons';
import {colorNames} from "react-native-svg/lib/extract/extractColor";

const TimerStack = createStackNavigator({
    Timer: TimerScreen
});

TimerStack.navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'Timer',
    tabBarOptions: {
        activeTintColor: '#000',
        showLabel: true,
    },
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={icons.timer}/>
};

const ResultsStack = createStackNavigator({
    Result: ResultsScreen
});

ResultsStack.navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'Results',
    tabBarOptions: {
        activeTintColor: '#000',
        showLabel: true
    },
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={icons.podium} />
};

const TestStack = createStackNavigator({
    Test: TestScreen
});

TestStack.navigationOptions = {
    tabBarLabel: 'Test',
    tabBarOptions: {
        activeTintColor: '#000',
        showLabel: true,
    },
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={icons.test} />
};

export default createBottomTabNavigator({
    TimerStack,
    ResultsStack,
    TestStack
});
