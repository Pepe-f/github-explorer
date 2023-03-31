import { FC, useCallback } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import Header from './components/Header/Header'

import { usePersistedState } from './hooks/usePersistedState'

import GlobalStyle from './styles/global'
import dark from './styles/themes/dark'
import light from './styles/themes/light'

import AppRouter from './AppRouter'

const App: FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@GitHubExplorer:theme',
    light
  )

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme, setTheme])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
