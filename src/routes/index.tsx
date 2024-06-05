import { BrowserRouter } from 'react-router-dom'

import { AdminRoutes } from './admin-routes'
// import { AuthRoutes } from './auth-routes'
// import { CustomerRoutes } from './customer.routes'

export function Routes() {
  return (
    <BrowserRouter>
      <AdminRoutes />
    </BrowserRouter>
  )
}
