import { Route, Routes } from 'react-router-dom'

import { DishCreate } from '@/pages/dish-create'
import { DishEdit } from '@/pages/dish-edit'
import { DishView } from '@/pages/dish-view'
import { Home } from '@/pages/home'
import { NotFound } from '@/pages/not-found'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id/edit" element={<DishEdit />} />
      <Route path="/dishes/create" element={<DishCreate />} />
      <Route path="/dishes/:id" element={<DishView />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
