import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const Authstack: FC = () => {
    return (
        <Navigator>
            <Screen name="login" component={Login}></Screen>
            <Screen name="signup" component={Signup}></Screen>
        </Navigator>
    )
}

export default Authstack;
