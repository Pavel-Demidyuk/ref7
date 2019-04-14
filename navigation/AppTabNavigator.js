import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TimerScreen from '../screens/TimerScreen'
import ResultsScreen from "../screens/ResultsScreen";



const TimerStack = createStackNavigator({
    Timer: TimerScreen,
});

TimerStack.navigationOptions = {
    tabBarLabel: 'Timer',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-timer' : 'md-timer'}
        />
    ),
};


const ResultsStack = createStackNavigator({
    Result: ResultsScreen,
});

ResultsStack.navigationOptions = {
    tabBarLabel: 'Results',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
        />
    ),
};
export default createBottomTabNavigator({
    TimerStack,
    ResultsStack,
});
