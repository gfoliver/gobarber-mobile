import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string
            text: string
            textLight: string
            primary: string
            inputBackground: string
            error: string
        }
    }
}