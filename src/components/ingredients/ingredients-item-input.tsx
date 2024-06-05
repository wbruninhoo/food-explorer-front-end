import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

import { Input } from './styles'

function IngredientsItemInputInner(
  { ...rest }: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return <Input ref={ref} {...rest} />
}

export const IngredientsItemInput = forwardRef(IngredientsItemInputInner)
