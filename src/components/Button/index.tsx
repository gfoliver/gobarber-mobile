import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Text } from './styles'

interface ButtonProps extends TouchableOpacityProps {
    children: string
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container activeOpacity={.7} {...rest}>
        <Text>{children}</Text>
    </Container>
  )
}

export default Button