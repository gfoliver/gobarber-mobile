import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState, useCallback } from 'react'
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

interface InputRef {
  focus(): void
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({ name, icon, ...rest }, ref) => {
  const theme = useTheme()
  
  const { fieldName, registerField, defaultValue = '', error } = useField(name)

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })
  const inputElementRef = useRef(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setisFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])
  
  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setisFilled(!!inputValueRef.current.value)
  }, [])

  useImperativeHandle(ref, () => ({ 
    focus() {
      inputElementRef.current.focus()
    } 
  }))

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
    <Container isFocused={isFocused} hasError={!!error}>
      <Icon name={icon} size={20} color={isFocused || isFilled ? theme.colors.primary : theme.colors.textLight} />
      <TextInput 
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor={theme.colors.textLight} 
        onChangeText={value => inputValueRef.current.value = value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest} 
      />
    </Container>
  )
}

export default forwardRef(Input)