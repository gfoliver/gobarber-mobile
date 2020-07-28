import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const AppProvider: React.FC = ({ children }) => {
    const [fontsLoaded] = useFonts({
        'RobotoSlab-Regular': RobotoSlab_400Regular,
        'RobotoSlab-Medium': RobotoSlab_500Medium,
    })

    if (!fontsLoaded)
        return <AppLoading />
    else
        return (
            <NavigationContainer>
                <ThemeProvider theme={theme}>
                    { children }
                </ThemeProvider>
            </NavigationContainer>
        )
}

export default AppProvider