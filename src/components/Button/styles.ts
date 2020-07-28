import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: 17px 30px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  margin-top: 8px;
`

export const Text = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Medium'
`