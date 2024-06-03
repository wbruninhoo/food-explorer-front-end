import { Link } from 'react-router-dom'

import LogoImg from '@/assets/logo.svg'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

import { Container, Form, LogoWrapper } from './styles'

export function SignUp() {
  return (
    <Container>
      <LogoWrapper>
        <img src={LogoImg} alt="Food Explorer" />
      </LogoWrapper>

      <Form>
        <h1>Crie sua conta</h1>

        <Input.Root label="Seu nome">
          <Input.Element type="text" placeholder="Exemplo: Maria da Silva" />
        </Input.Root>

        <Input.Root label="Email">
          <Input.Element
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </Input.Root>

        <div>
          <Input.Root label="Senha">
            <Input.Element
              type="password"
              placeholder="No mínimo 6 caracteres"
              minLength={6}
            />
          </Input.Root>
        </div>

        <Button.Root type="submit">
          <Button.Text text="Criar conta" />
        </Button.Root>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
