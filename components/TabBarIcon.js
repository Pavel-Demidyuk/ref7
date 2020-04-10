import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
    return (
        <Ionicons
            name={props.name}
            size={props.focused ? 33 : 25}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}
