import React from 'react'
import { StatusBar } from 'expo-status-bar'

import AppProvider from './context'
import Router from './routes'

const App: React.FC = () => {
  return (
      <AppProvider>
        <StatusBar style="light" />
        <Router />
      </AppProvider>
  )
}

export default App