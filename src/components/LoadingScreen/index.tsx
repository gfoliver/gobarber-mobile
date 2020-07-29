import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import theme from '../../styles/theme'

const LoadingScreen: React.FC = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background}}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
)

export default LoadingScreen