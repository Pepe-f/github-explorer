import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'

import AppRouter from './AppRouter'

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
