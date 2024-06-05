import { Route, Routes } from 'react-router-dom'

import { DishEditor } from '@/pages/dish-editor'
import { DishView } from '@/pages/dish-view'
import { Home } from '@/pages/home'
import { NotFound } from '@/pages/not-found'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id/editor" element={<DishEditor />} />
      <Route path="/dishes/create" element={<DishEditor />} />
      <Route path="/dishes/:id" element={<DishView />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
