import React, { useEffect, useRef } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { useField } from '@unform/core'

import { Container, TextInput, Icon } from './styles'

interface InputProps extends TextInputProps {
    name: string
    icon: string
}

interface InputValueReference {
  value: string
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const theme = useTheme()
  
  const { fieldName, registerField, defaultValue = '', error } = useField(name)

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })
  const inputElementRef = useRef(null)

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      }
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <Icon name={icon} size={20} color={theme.colors.textLight} />
      <TextInput 
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor={theme.colors.textLight} 
        onChangeText={value => inputValueRef.current.value = value}
        {...rest} 
      />
    </Container>
  )
}

export default Input