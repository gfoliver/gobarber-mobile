import styled from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  background: ${props => props.theme.colors.inputBackground};
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`

export const TextInput = styled.TextInput`
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  flex: 1;
`