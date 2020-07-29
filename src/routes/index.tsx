import React from 'react'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import { useAuth } from '../context/Auth'

import LoadingScreen from '../components/LoadingScreen'

const Router: React.FC = () => {
    const { user, loading } = useAuth()

    if (loading) {
        return <LoadingScreen />
    }

    return user ? <AppRoutes /> : <AuthRoutes />
}

export default Router