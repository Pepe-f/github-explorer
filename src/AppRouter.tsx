import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'
import Repository from './pages/Repository/Repository'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/repository' element={<Repository />} />
    </Routes>
  )
}

export default AppRouter
