import styled from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 150px 30px;
`

export const Title = styled.Text`
    font-size: 24px;
    color: ${props => props.theme.colors.text};
    margin-top: 64px;
    margin-bottom: 24px;
    font-family: 'RobotoSlab-Medium';
`

export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 24px;
`

export const ForgotPasswordText = styled.Text`
    color: ${props => props.theme.colors.text};
    font-family: 'RobotoSlab-Regular';
    font-size: 16px;
`

export const RegisterButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${props => props.theme.colors.background};
    padding: 20px;
    flex-direction: row;
    justify-content: center;
    border-top-width: 1px;
    border-color: ${props => props.theme.colors.inputBackground};
`
export const Icon = styled(FeatherIcon)`
    color: ${props => props.theme.colors.primary};
`

export const RegisterButtonText = styled.Text`
    margin-left: 16px;
    color: ${props => props.theme.colors.primary};
    font-family: 'RobotoSlab-Regular';
    font-size: 16px;
`