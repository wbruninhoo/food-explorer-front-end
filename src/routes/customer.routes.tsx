import { Route, Routes } from 'react-router-dom'

import { DishView } from '@/pages/dish-view'
import { Home } from '@/pages/home'
import { NotFound } from '@/pages/not-found'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id" element={<DishView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
