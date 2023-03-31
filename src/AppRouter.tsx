import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'
import Repository from './pages/Repository/Repository'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/repository/:owner/:name' element={<Repository />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default AppRouter
