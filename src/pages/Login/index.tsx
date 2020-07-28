import React, { useCallback, useRef } from 'react'
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { 
    Container, 
    Title, 
    ForgotPassword, 
    ForgotPasswordText, 
    RegisterButton, 
    RegisterButtonText, 
    Icon
} from './styles'

const Login: React.FC = () => {
    const navigation = useNavigation();

    const formRef = useRef<FormHandles>(null)

    const navigateToRegister = useCallback(() => {
        navigation.navigate("Register");
    }, [])

    const handleSubmit = useCallback(async (data) => {
        console.log(data)
    }, [])

    const submitForm = useCallback(() => {
        formRef.current?.submitForm()
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
                        <Title>Faça seu login</Title>
                    </View>
                    <Form onSubmit={handleSubmit} ref={formRef} style={{width: '100%'}}>
                        <Input name="email" icon="mail" placeholder="E-mail" />
                        <Input name="password" icon="lock" placeholder="Senha" />
                        <Button onPress={submitForm}>Entrar</Button>
                    </Form>
                    <ForgotPassword>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                    </ForgotPassword>
                </Container>
            </ScrollView>
            <RegisterButton activeOpacity={.7} onPress={navigateToRegister}>
                <Icon name="log-in" size={20} />
                <RegisterButtonText>Criar uma conta</RegisterButtonText>
            </RegisterButton>
        </KeyboardAvoidingView>
    )
}

export default Login