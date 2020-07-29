import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

import { AuthProvider } from './Auth'

import LoadingScreen from '../components/LoadingScreen'

const AppProvider: React.FC = ({ children }) => {
    const [fontsLoaded] = useFonts({
        'RobotoSlab-Regular': RobotoSlab_400Regular,
        'RobotoSlab-Medium': RobotoSlab_500Medium,
    })

    if (!fontsLoaded)
        return <LoadingScreen />
    else
        return (
            <AuthProvider>
                <NavigationContainer>
                    <ThemeProvider theme={theme}>
                        { children }
                    </ThemeProvider>
                </NavigationContainer>
            </AuthProvider>
        )
}

export default AppProvider