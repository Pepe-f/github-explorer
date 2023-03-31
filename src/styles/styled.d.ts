import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      error: string

      background: string
      title: string
      titleSecondary: string
      text: string
      textSecondary: string
      button: string
      shape: string
    }
  }
}
