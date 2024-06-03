import { Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/home'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
