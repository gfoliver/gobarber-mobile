import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'styled-components'

import Home from '../pages/Home'

const App = createStackNavigator()

const AppRouter: React.FC = () => {
    const theme = useTheme()

    return (
        <App.Navigator screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: theme.colors.background }
        }}>
            <App.Screen name="Home" component={Home} />
        </App.Navigator>
    )
}

export default AppRouter