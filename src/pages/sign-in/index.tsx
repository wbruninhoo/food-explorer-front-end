import { Link } from 'react-router-dom'

import LogoImg from '@/assets/logo.svg'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

import { Container, Form, LogoWrapper } from './styles'

export function SignIn() {
  return (
    <Container>
      <LogoWrapper>
        <img src={LogoImg} alt="Food Explorer" />
      </LogoWrapper>

      <Form>
        <h1>Faça login</h1>

        <Input.Root label="Email">
          <Input.Element
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </Input.Root>

        <Input.Root label="Senha">
          <Input.Element type="password" placeholder="No mínimo 6 caracteres" />
        </Input.Root>

        <Button.Root type="submit">
          <Button.Text text="Entrar" />
        </Button.Root>

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
