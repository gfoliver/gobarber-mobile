import React, { useCallback, useRef } from 'react'
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Title, LoginButton, LoginButtonText, Icon } from './styles'

const Register: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const navigation = useNavigation()

    const navigateToLogin = useCallback(() => {
        navigation.navigate("Login")
    }, [])

    const handleSubmit = useCallback((data) => {
        console.log(data)
    }, [])

    const submitForm = useCallback(() => {
        formRef.current.submitForm()
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
                        <Input name="name" icon="user" placeholder="Nome" />
                        <Input name="email" icon="mail" placeholder="E-mail" />
                        <Input name="password" icon="lock" placeholder="Senha" />
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