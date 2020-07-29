import React, { useCallback, useRef } from 'react'
import { Image, KeyboardAvoidingView, Platform, View, ScrollView, TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'

import api from '../../services/api'

import getValidationErrors from '../../utils/getValidationErrors'

import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Title, LoginButton, LoginButtonText, Icon } from './styles'

interface RegisterForm {
    email: string
    name: string
    password: string
}

const Register: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const emailInputRef = useRef<TextInput>(null)
    const passwordInputRef = useRef<TextInput>(null)

    const navigation = useNavigation()

    const navigateToLogin = useCallback(() => {
        navigation.navigate("Login")
    }, [])

    const handleSubmit = useCallback(async (data: RegisterForm) => {
        formRef.current?.setErrors({})

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
                password: Yup.string().min(8, 'No mínimo 8 dígitos')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            await api.post('/users', data)
            
            Alert.alert("Sucesso!", "Cadastro efetuado com sucesso, faça login para acessar a aplicação.")

            navigation.navigate("Login")

        } catch (error) {
            console.log(error)
            if (error instanceof Yup.ValidationError) {
                const errors = getValidationErrors(error)
                formRef.current?.setErrors(errors)
                
                return
            }

            Alert.alert("Erro no cadastro", "Houve um erro ao executar o seu cadastro, tente novamente.")
        }
    }, [])

    const submitForm = useCallback(() => {
        formRef.current.submitForm()
    }, [])

    const focusEmailInput = useCallback(() => {
        emailInputRef.current.focus()
    }, [])
    
    const focusPasswordInput = useCallback(() => {
        passwordInputRef.current.focus()
    }, [])

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === "ios" ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                contentContainerStyle={{flex: 1}}
                keyboardShouldPersistTaps="handled"
            >
                <Container>
                    <Image source={logoImg} />
                    <View>
                        <Title>Crie sua conta</Title>
                    </View>
                    <Form ref={formRef} onSubmit={handleSubmit} style={{width: '100%'}}>
                        <Input 
                            name="name" 
                            icon="user" 
                            placeholder="Nome" 
                            autoCapitalize="words"
                            returnKeyType="next"
                            onSubmitEditing={focusEmailInput}
                        />
                        <Input 
                            ref={emailInputRef}
                            name="email" 
                            icon="mail" 
                            placeholder="E-mail" 
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onSubmitEditing={focusPasswordInput}
                        />
                        <Input 
                            ref={passwordInputRef}
                            name="password" 
                            icon="lock" 
                            placeholder="Senha" 
                            secureTextEntry
                            textContentType="newPassword"
                            returnKeyType="send"
                            onSubmitEditing={submitForm}
                        />
                        <Button onPress={submitForm}>Cadastrar</Button>
                    </Form>
                </Container>
            </ScrollView>
            <LoginButton activeOpacity={.7} onPress={navigateToLogin}>
                <Icon name="arrow-left" size={20} />
                <LoginButtonText>Voltar para login</LoginButtonText>
            </LoginButton>
        </KeyboardAvoidingView>
    )
}

export default Register