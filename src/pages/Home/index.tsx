import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import { useAuth } from '../../context/Auth'

// import { Container } from './styles';

const Home: React.FC = () => {
    const theme = useTheme()
    const { signOut } = useAuth()

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: theme.colors.text, fontSize: 24, marginBottom: 16, fontFamily: 'RobotoSlab-Medium'}}>Home</Text>
            <TouchableOpacity style={{paddingVertical: 8, paddingHorizontal: 32, backgroundColor: theme.colors.primary, borderRadius: 10}} onPress={signOut}>
                <Text style={{fontSize: 20, color: theme.colors.background, fontFamily: 'RobotoSlab-Regular'}}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home