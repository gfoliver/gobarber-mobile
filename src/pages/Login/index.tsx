import React, { useCallback, useRef } from 'react'
import { 
    Image, 
    KeyboardAvoidingView, 
    Platform, 
    View, 
    ScrollView, 
    TextInput, 
    Alert 
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'

import { useAuth } from '../../context/Auth'

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

interface LoginForm {
    email: string
    password: string
}

const Login: React.FC = () => {
    const navigation = useNavigation();

    const { signIn } = useAuth()

    const formRef = useRef<FormHandles>(null)
    const passwordInputRef = useRef<TextInput>(null)

    const navigateToRegister = useCallback(() => {
        navigation.navigate("Register");
    }, [navigation])

    const handleSubmit = useCallback(async (data: LoginForm) => {
        formRef.current?.setErrors({})

        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
                password: Yup.string().required('Senha obrigatória')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            await signIn(data)
        }
        catch(error) {
            if (error instanceof Yup.ValidationError) {
                const errors = getValidationErrors(error)
                formRef.current?.setErrors(errors)

                return
            }

            Alert.alert("Erro", "Erro ao efetuar o login")
        }
    }, [signIn])

    const submitForm = useCallback(() => {
        formRef.current?.submitForm()
    }, [])

    const focusPasswordInput = useCallback(() => {
        passwordInputRef.current.focus()
    }, [passwordInputRef])

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
                        <Input 
                            name="email" 
                            icon="mail" 
                            placeholder="E-mail" 
                            autoCapitalize="none"
                            autoCorrect={false}
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
                            returnKeyType="send"
                            onSubmitEditing={submitForm}
                        />
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