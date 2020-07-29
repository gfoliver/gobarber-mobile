import React, { createContext, useCallback, useState, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../services/api'

interface SignInDTO {
    email: string
    password: string
}

interface IAuthContext {
    signIn({ email, password }: SignInDTO): Promise<void>
    signOut(): void
    user: object
    loading: boolean
}

interface SignInResponse {
    data: {
        token: string
        user: object
    }
}

interface AuthData {
    token: string
    user: object
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthData>({} as AuthData)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStorageData() {
            const token = await AsyncStorage.getItem('@GoBarber:token')
            const user = await AsyncStorage.getItem('@GoBarber:user')

            if (token && user) {
                setData({ token, user: JSON.parse(user) })
            }

            setLoading(false)
        }

        loadStorageData()
    })

    const signIn = useCallback(async ({ email, password }: SignInDTO) => {
        const response = await api.post<SignInResponse>('/auth/login', { email, password })
        
        const { token, user } = response.data.data

        setData({ token, user })

        await AsyncStorage.setItem('@GoBarber:token', token)
        await AsyncStorage.setItem('@GoBarber:user', JSON.stringify(user))
    }, [])
    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove(['@GoBarber:token', '@GoBarber:user'])

        setData({} as AuthData)
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext)

    if (!context)
        throw new Error('useAuth must be used inside an AuthProvider')

    return context
}

export { AuthProvider, useAuth }