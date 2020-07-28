import React from 'react'
import { TextInputProps } from 'react-native'

import theme from '../../styles/theme'

import { Container, TextInput, Icon } from './styles'

interface InputProps extends TextInputProps {
    name: string
    icon: string
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color={theme.colors.textLight} />
      <TextInput 
        keyboardAppearance="dark"
        placeholderTextColor={theme.colors.textLight} 
        {...rest} 
      />
    </Container>
  )
}

export default Input