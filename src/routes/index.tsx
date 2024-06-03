import { BrowserRouter } from 'react-router-dom'

import { CustomerRoutes } from './customer.routes'

export function Routes() {
  return (
    <BrowserRouter>
      <CustomerRoutes />
    </BrowserRouter>
  )
}
