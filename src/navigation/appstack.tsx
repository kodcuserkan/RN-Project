import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Dashboard } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const Appstack: FC = () => {
    return (
        <Navigator>
            <Screen name="home" component={Home}></Screen>
            <Screen name="dashboard" component={Dashboard}></Screen>
        </Navigator>
    )
}

export default Appstack
