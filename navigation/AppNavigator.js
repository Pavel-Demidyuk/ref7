<<<<<<< HEAD
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AppTabNavigator from './AppTabNavigator';

export default createAppContainer(createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: AppTabNavigator,
}));
=======
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppTabNavigator from './AppTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: AppTabNavigator,
}));
>>>>>>> ec1e2f88e5ba4f141c2cf5165b16d58d45638f04
