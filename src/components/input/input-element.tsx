import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

type InputElementProps =
  | ({
      component?: 'input'
    } & InputProps)
  | ({ component: 'textarea' } & TextareaProps)

export function InputElement({ ...rest }: InputElementProps) {
  if (rest.component === 'textarea') {
    return <textarea {...rest} />
  }

  return <input {...rest} />
}
