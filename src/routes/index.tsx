import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'styled-components'

import Login from '../pages/Login'
import Register from '../pages/Register'

const Auth = createStackNavigator()

const AuthRouter: React.FC = () => {
    const theme = useTheme()

    return (
        <Auth.Navigator screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: theme.colors.background }
        }}>
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="Register" component={Register} />
        </Auth.Navigator>
    )
}

export default AuthRouter