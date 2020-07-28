import styled from 'styled-components/native'
import * as LoginStyle from '../Login/styles'
import FeatherIcon from 'react-native-vector-icons/Feather'

export const Container = styled(LoginStyle.Container)``;
export const Title = styled(LoginStyle.Title)``;

export const LoginButton = styled(LoginStyle.RegisterButton)``;
export const LoginButtonText = styled(LoginStyle.RegisterButtonText)`
    color: ${props => props.theme.colors.text};
`;

export const Icon = styled(FeatherIcon)`
    color: ${props => props.theme.colors.text};
`;