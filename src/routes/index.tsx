import { BrowserRouter } from 'react-router-dom'

import { AuthRoutes } from './auth-routes'
// import { CustomerRoutes } from './customer.routes'

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
