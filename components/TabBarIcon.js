<<<<<<< HEAD
import React from 'react';
import {Ionicons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
    return (
        <Ionicons
            name={props.name}
            size={26}
            style={{marginBottom: -3}}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}
=======
import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
>>>>>>> ec1e2f88e5ba4f141c2cf5165b16d58d45638f04
