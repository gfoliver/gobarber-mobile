import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 30px;
`

export const Title = styled.Text`
    font-size: 24px;
    color: ${props => props.theme.colors.text};
    margin-top: 64px;
    margin-bottom: 24px;
    font-family: 'RobotoSlab-Medium';
`